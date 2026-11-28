import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const assessmentSrc = `${import.meta.env.BASE_URL}readiness-assessment.html`;

const ReadinessAssessment = () => (
  <>
    <Seo
      title="Security & AI Readiness Assessment | BioCircuit Laboratories"
      description="A preliminary self-assessment of your security practices and readiness for an AI project."
      path="/readiness-assessment"
    />
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-background">
      <header className="shrink-0 border-b border-platinum/10 bg-background">
        <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <div>
            <p className="overline text-primary">BioCircuit Laboratories</p>
            <p className="font-display text-sm text-foreground sm:text-base">Security and AI readiness check</p>
          </div>
          <nav aria-label="Return to service pages" className="flex flex-wrap gap-2">
            <Button asChild size="sm" variant="outline" className="rounded-sm">
              <Link to="/agentic-ai"><ArrowLeft aria-hidden="true" /> Agentic AI</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="rounded-sm">
              <Link to="/security-governance"><ArrowLeft aria-hidden="true" /> Security &amp; Governance</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="min-h-0 flex-1">
        <iframe
          title="Security audit and artificial intelligence readiness assessment"
          src={assessmentSrc}
          className="h-full w-full border-0"
        />
      </main>
    </div>
  </>
);

export default ReadinessAssessment;