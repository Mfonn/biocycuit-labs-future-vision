import { describe, expect, it } from "vitest";
import { agenticInquirySchema, securityInquirySchema } from "@/components/ServiceInquiryForm";

const validInquiry = {
  name: "Morgan Lee",
  email: "morgan@example.com",
  company: "Northstar Health",
  phone: "+234 800 123 4567",
  setup: "Cloud",
  details: "Automate routine intake and appointment enquiries.",
};

describe("service enquiry requirements", () => {
  it("accepts the Cloud and On-Premise choices for Agentic AI", () => {
    expect(agenticInquirySchema.safeParse({ ...validInquiry, setup: "Cloud" }).success).toBe(true);
    expect(agenticInquirySchema.safeParse({ ...validInquiry, setup: "On-Premise" }).success).toBe(true);
  });

  it("rejects Hybrid for Agentic AI", () => {
    expect(agenticInquirySchema.safeParse({ ...validInquiry, setup: "Hybrid" }).success).toBe(false);
  });

  it("accepts Cloud, Hybrid and On-Premise for a security review", () => {
    for (const setup of ["Cloud", "Hybrid", "On-Premise"]) {
      expect(securityInquirySchema.safeParse({ ...validInquiry, setup }).success).toBe(true);
    }
  });

  it("requires a valid work email before preparing an enquiry", () => {
    expect(agenticInquirySchema.safeParse({ ...validInquiry, email: "not-an-email" }).success).toBe(false);
    expect(securityInquirySchema.safeParse({ ...validInquiry, email: "not-an-email" }).success).toBe(false);
  });
});