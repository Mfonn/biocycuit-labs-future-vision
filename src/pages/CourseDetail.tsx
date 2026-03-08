import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BookOpen, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { courses, getCourseProgress, enrollInCourse, isEnrolled } from "@/data/courses";
import { useState, useEffect } from "react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);
  const [enrolled, setEnrolled] = useState(false);
  const [progress, setProgress] = useState<{ completedModules: string[]; scores: Record<string, number> }>({ completedModules: [], scores: {} });

  useEffect(() => {
    if (courseId) {
      setEnrolled(isEnrolled(courseId));
      setProgress(getCourseProgress(courseId));
    }
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) return <div className="min-h-screen bg-background flex items-center justify-center text-foreground">Course not found.</div>;

  const handleEnroll = () => {
    enrollInCourse(course.id);
    setEnrolled(true);
  };

  const completedCount = progress.completedModules.length;
  const totalModules = course.modules.length;
  const progressPercent = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;
  const allComplete = completedCount === totalModules;

  return (
    <div className="min-h-screen bg-background">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/education" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            <ArrowLeft size={16} /><span>Courses</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="font-display text-xs tracking-wider text-foreground truncate">{course.title}</span>
        </div>
      </motion.div>

      <section className="relative pt-32 pb-16 px-6 overflow-hidden bio-grid">
        <div className="absolute inset-0 bg-gradient-radial-glow" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-body">{course.level}</span>
            <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full font-body border border-primary/30 text-primary bg-primary/5 flex items-center gap-1"><Clock size={10} />{course.duration}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">{course.title}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="font-body text-lg text-muted-foreground leading-relaxed mb-8">{course.description}</motion.p>

          {!enrolled ? (
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} onClick={handleEnroll} className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
              Enroll — Free
            </motion.button>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm font-body text-muted-foreground">
                <span>Progress</span><span>{progressPercent}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">Modules</h2>
          <div className="space-y-4">
            {course.modules.map((mod, i) => {
              const isCompleted = progress.completedModules.includes(mod.id);
              const isUnlocked = enrolled && (i === 0 || progress.completedModules.includes(course.modules[i - 1].id));
              const score = progress.scores[mod.id];

              return (
                <motion.div key={mod.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  {isUnlocked ? (
                    <Link to={`/course/${course.id}/module/${mod.id}`} className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300">
                      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-display font-bold ${isCompleted ? "bg-primary text-primary-foreground" : "border border-primary/30 text-primary"}`}>
                        {isCompleted ? <CheckCircle2 size={18} /> : i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{mod.title}</h3>
                        <p className="text-xs text-muted-foreground font-body flex items-center gap-2">
                          <BookOpen size={10} />{mod.readingTime} read + quiz
                          {score !== undefined && <span className="text-primary">• Score: {score}/{mod.quiz.length}</span>}
                        </p>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </Link>
                  ) : (
                    <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/30 opacity-50">
                      <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-border text-muted-foreground text-sm font-display">
                        <Lock size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-sm font-semibold text-muted-foreground truncate">{mod.title}</h3>
                        <p className="text-xs text-muted-foreground font-body">{enrolled ? "Complete previous module to unlock" : "Enroll to access"}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {allComplete && enrolled && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 text-center">
              <Link to={`/course/${course.id}/certificate`} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
                🎓 View Your Certificate
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
