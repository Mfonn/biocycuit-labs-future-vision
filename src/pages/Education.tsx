import { motion } from "framer-motion";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { courses, getCourseProgress, isEnrolled } from "@/data/courses";
import { useEffect } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Education = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageLayout
      title="Education"
      subtitle="Free, self-paced courses that bridge traditional knowledge with modern science. Read, quiz, earn your certificate."
      overline="Learning Hub"
    >
      <div className="space-y-6 mb-16">
        {courses.map((course, i) => {
          const enrolled = isEnrolled(course.id);
          const progress = getCourseProgress(course.id);
          const pct = enrolled ? Math.round((progress.completedModules.length / course.modules.length) * 100) : 0;

          return (
            <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={`/course/${course.id}`} className="group block p-8 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:glow-border transition-all duration-500 overflow-hidden relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
                    <span className="text-[10px] tracking-wider uppercase px-2 py-1 rounded-full border border-accent/30 text-accent font-body">{course.level}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.map((t) => (
                      <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-body">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                      <span className="flex items-center gap-1"><Clock size={12} className="text-primary" />{course.duration}</span>
                      <span className="flex items-center gap-1"><BookOpen size={12} className="text-primary" />{course.modules.length} modules</span>
                      {enrolled && <span className="text-primary">{pct}% complete</span>}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-display tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      {enrolled ? "Continue" : "Start Course"} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </ServicePageLayout>
  );
};

export default Education;
