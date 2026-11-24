import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowUpRight, Check, Pencil } from "lucide-react";
import { Reveal, mailto } from "@/components/Lux";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const inquiryFields = {
  name: z.string().trim().min(2, "Enter your full name.").max(100, "Use 100 characters or fewer."),
  email: z.string().trim().email("Enter a valid work email.").max(255, "Use 255 characters or fewer."),
  company: z.string().trim().min(2, "Enter your company name.").max(120, "Use 120 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(5, "Enter a phone or WhatsApp number.")
    .max(40, "Use 40 characters or fewer.")
    .regex(/^[+()\d\s.-]+$/, "Use digits and common phone-number symbols only."),
  setup: z.enum(["Cloud", "Hybrid", "On-Premise"], { required_error: "Choose a setup." }),
  details: z
    .string()
    .trim()
    .min(10, "Add a little more detail so the enquiry has context.")
    .max(1200, "Use 1,200 characters or fewer."),
};

const baseInquirySchema = z.object(inquiryFields);
export const agenticInquirySchema = baseInquirySchema.superRefine((value, context) => {
  if (value.setup === "Hybrid") {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["setup"], message: "Choose Cloud or On-Premise." });
  }
});
export const securityInquirySchema = baseInquirySchema;
export type ServiceInquiryValues = z.infer<typeof baseInquirySchema>;

type ServiceInquiryKind = "agentic-ai" | "security-review";

const formCopy: Record<
  ServiceInquiryKind,
  {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    setupLabel: string;
    setupOptions: ServiceInquiryValues["setup"][];
    detailsLabel: string;
    submitLabel: string;
    emailSubject: string;
    serviceName: string;
  }
> = {
  "agentic-ai": {
    id: "book-call",
    eyebrow: "Start a conversation",
    title: "Book a 15-Minute Call",
    intro: "Share the task or workflow that is slowing your team down. Your answers open in an email draft for you to review and send.",
    setupLabel: "Preferred Setup",
    setupOptions: ["Cloud", "On-Premise"],
    detailsLabel: "What Your Team Needs Automated",
    submitLabel: "Prepare email draft",
    emailSubject: "Agentic AI enquiry",
    serviceName: "Agentic AI",
  },
  "security-review": {
    id: "security-form",
    eyebrow: "Request a security review",
    title: "Where should the review begin?",
    intro: "Tell BioCircuit Laboratories about your current setup and the risk or compliance question that needs attention. Your answers open in an email draft for you to review and send.",
    setupLabel: "Current Setup",
    setupOptions: ["Cloud", "Hybrid", "On-Premise"],
    detailsLabel: "Main Priority",
    submitLabel: "Prepare email draft",
    emailSubject: "Security review request",
    serviceName: "Security & Governance",
  },
};

const ServiceInquiryForm = ({ kind }: { kind: ServiceInquiryKind }) => {
  const copy = formCopy[kind];
  const [draftHref, setDraftHref] = useState<string | null>(null);
  const schema = kind === "agentic-ai" ? agenticInquirySchema : securityInquirySchema;
  const form = useForm<ServiceInquiryValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", phone: "", setup: undefined, details: "" },
  });

  const prepareDraft = (values: ServiceInquiryValues) => {
    const body = [
      `Service: ${copy.serviceName}`,
      `Name: ${values.name}`,
      `Work email: ${values.email}`,
      `Company: ${values.company}`,
      `Phone / WhatsApp: ${values.phone}`,
      `${copy.setupLabel}: ${values.setup}`,
      `${copy.detailsLabel}: ${values.details}`,
    ].join("\n");
    const href = mailto(copy.emailSubject, body);
    const trackingWindow = window as Window & { dataLayer?: Array<Record<string, string>> };

    trackingWindow.dataLayer?.push({ event: "service_inquiry_draft_opened", service: kind });
    setDraftHref(href);
    window.location.href = href;
  };

  return (
    <Reveal className="mt-24">
      <section id={copy.id} className="scroll-mt-28" aria-labelledby={`${copy.id}-title`}>
        <div className="surface p-7 sm:p-10 lg:p-14">
          <p className="overline text-accent mb-5">{copy.eyebrow}</p>
          <h2 id={`${copy.id}-title`} className="font-display text-3xl sm:text-4xl text-foreground mb-5 max-w-2xl">
            {draftHref ? "Next, send your email" : copy.title}
          </h2>
          <p className="font-body text-sm sm:text-base text-platinum-dim leading-relaxed max-w-2xl mb-9">
            {draftHref
              ? "Your email app should open with your answers. Press Send there to complete the enquiry. This page does not send or save your details."
              : copy.intro}
          </p>

          {draftHref ? (
            <div className="max-w-2xl space-y-5" aria-live="polite">
              <Alert className="border-accent/30 bg-accent/5">
                <Check aria-hidden="true" />
                <AlertTitle>Email draft prepared</AlertTitle>
                <AlertDescription className="text-platinum-dim">
                  If no email app opened, use the button below. Your details remain in this page only until you leave or refresh.
                </AlertDescription>
              </Alert>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-sm">
                  <a href={draftHref}>
                    Open email draft again <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button type="button" variant="outline" className="rounded-sm" onClick={() => setDraftHref(null)}>
                  <Pencil aria-hidden="true" /> Edit answers
                </Button>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(prepareDraft)} noValidate className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="name" maxLength={100} aria-required="true" placeholder="Your name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" autoComplete="email" maxLength={255} aria-required="true" placeholder="you@company.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="organization" maxLength={120} aria-required="true" placeholder="Your organisation" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone / WhatsApp</FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" autoComplete="tel" maxLength={40} aria-required="true" placeholder="+234 ..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="setup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{copy.setupLabel}</FormLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger aria-required="true">
                            <SelectValue placeholder="Choose a setup" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {copy.setupOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>{copy.detailsLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          maxLength={1200}
                          aria-required="true"
                          className="min-h-32 resize-y"
                          placeholder={kind === "agentic-ai" ? "Describe the repetitive work, how often it happens, and the systems involved." : "Describe the main security, privacy, or compliance concern."}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <Button type="submit" className="rounded-sm">
                    {copy.submitLabel} <ArrowUpRight aria-hidden="true" />
                  </Button>
                  <p className="font-body text-xs text-platinum-dim leading-relaxed">
                    Your answers are not sent or stored by this site. Review and send them in your email app.
                  </p>
                </div>
              </form>
            </Form>
          )}
        </div>
      </section>
    </Reveal>
  );
};

export default ServiceInquiryForm;