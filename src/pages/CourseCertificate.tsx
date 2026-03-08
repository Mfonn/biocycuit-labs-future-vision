import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, ArrowLeft, Download } from "lucide-react";
import { courses, getTotalScore } from "@/data/courses";
import { useEffect, useRef } from "react";

const CourseCertificate = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!course) return <div className="min-h-screen bg-background flex items-center justify-center text-foreground">Course not found.</div>;

  const { score, total } = getTotalScore(course.id);
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= 60;
  const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-background">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to={`/course/${course.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            <ArrowLeft size={16} /><span>Back to Course</span>
          </Link>
        </div>
      </motion.div>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            {/* Certificate Card */}
            <div ref={certRef} className="rounded-2xl border-2 border-primary/30 bg-card p-8 sm:p-12 text-center relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

              <div className="relative z-10">
                <Award className="mx-auto text-primary mb-4" size={48} />

                <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-body mb-2">BioCircuit Laboratories</p>

                <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">Certificate of Completion</h1>

                <div className="h-px w-32 mx-auto bg-primary/30 my-6" />

                <p className="font-body text-muted-foreground mb-1">This certifies that the holder has successfully completed</p>

                <h2 className="font-display text-xl font-bold text-primary my-4">{course.title}</h2>

                <div className="flex items-center justify-center gap-6 my-6">
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">{percentage}%</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body">Final Score</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">{score}/{total}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body">Questions Correct</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">{course.modules.length}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body">Modules</p>
                  </div>
                </div>

                <div className="h-px w-32 mx-auto bg-primary/30 my-6" />

                <p className="text-xs text-muted-foreground font-body">{date}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{course.duration} • {course.level}</p>

                {passed ? (
                  <div className="mt-6 inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                    <span className="text-xs font-display tracking-wider uppercase text-primary">✓ Passed</span>
                  </div>
                ) : (
                  <div className="mt-6 inline-block px-4 py-2 rounded-full border border-bio-warm/30 bg-bio-warm/5">
                    <span className="text-xs font-display tracking-wider uppercase text-bio-warm">Review recommended — retake modules for a higher score</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/education" className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
                Explore More Courses
              </Link>
              <Link to={`/course/${course.id}`} className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500">
                Review Modules
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;
