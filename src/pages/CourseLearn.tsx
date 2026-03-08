import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { courses, getCourseProgress, saveCourseProgress } from "@/data/courses";
import { useState, useEffect } from "react";

const CourseLearn = () => {
  const { courseId, moduleId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);
  const mod = course?.modules.find((m) => m.id === moduleId);
  const moduleIndex = course?.modules.findIndex((m) => m.id === moduleId) ?? -1;

  const [phase, setPhase] = useState<"reading" | "quiz" | "results">("reading");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [moduleId, phase]);

  if (!course || !mod) return <div className="min-h-screen bg-background flex items-center justify-center text-foreground">Module not found.</div>;

  const handleStartQuiz = () => {
    setPhase("quiz");
    setCurrentQ(0);
    setAnswers(new Array(mod.quiz.length).fill(null));
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswer = (idx: number) => {
    if (showExplanation) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < mod.quiz.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Calculate score & save
      const score = answers.reduce((sum, a, i) => sum + (a === mod.quiz[i].correctIndex ? 1 : 0), 0);
      const progress = getCourseProgress(course.id);
      if (!progress.completedModules.includes(mod.id)) {
        progress.completedModules.push(mod.id);
      }
      progress.scores[mod.id] = score;
      saveCourseProgress(course.id, progress.completedModules, progress.scores);
      setPhase("results");
    }
  };

  const score = answers.reduce((sum, a, i) => sum + (a === mod.quiz[i].correctIndex ? 1 : 0), 0);
  const nextModule = course.modules[moduleIndex + 1];
  const isLastModule = moduleIndex === course.modules.length - 1;

  return (
    <div className="min-h-screen bg-background">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to={`/course/${course.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
            <ArrowLeft size={16} /><span>Back to Course</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="font-display text-xs tracking-wider text-foreground truncate">Module {moduleIndex + 1} of {course.modules.length}</span>
          {/* Progress dots */}
          <div className="hidden sm:flex items-center gap-1 ml-auto">
            {course.modules.map((m, i) => (
              <div key={m.id} className={`w-2 h-2 rounded-full ${i === moduleIndex ? "bg-primary" : i < moduleIndex ? "bg-primary/40" : "bg-border"}`} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* READING PHASE */}
          {phase === "reading" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-body block mb-4">Module {moduleIndex + 1} • {mod.readingTime} read</span>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-10">{mod.title}</h1>
              <div className="space-y-6 font-body text-sm text-muted-foreground leading-[1.8]">
                {mod.content.map((p, i) => (
                  <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    {p}
                  </motion.p>
                ))}
              </div>
              <div className="mt-12 text-center">
                <button onClick={handleStartQuiz} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
                  Take the Quiz <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* QUIZ PHASE */}
          {phase === "quiz" && (
            <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-body block mb-4">Question {currentQ + 1} of {mod.quiz.length}</span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8">{mod.quiz[currentQ].question}</h2>
              <div className="space-y-3">
                {mod.quiz[currentQ].options.map((opt, i) => {
                  const isCorrect = i === mod.quiz[currentQ].correctIndex;
                  const isSelected = selectedAnswer === i;
                  let borderClass = "border-border hover:border-primary/50";
                  if (showExplanation) {
                    if (isCorrect) borderClass = "border-primary bg-primary/10";
                    else if (isSelected && !isCorrect) borderClass = "border-destructive bg-destructive/10";
                    else borderClass = "border-border opacity-50";
                  }
                  return (
                    <button key={i} onClick={() => handleAnswer(i)} disabled={showExplanation} className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${borderClass}`}>
                      <div className="flex items-center gap-3">
                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold border ${showExplanation && isCorrect ? "border-primary text-primary" : showExplanation && isSelected ? "border-destructive text-destructive" : "border-border text-muted-foreground"}`}>
                          {showExplanation && isCorrect ? <CheckCircle2 size={16} /> : showExplanation && isSelected && !isCorrect ? <XCircle size={16} /> : String.fromCharCode(65 + i)}
                        </div>
                        <span className="font-body text-sm text-foreground">{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 rounded-xl border border-primary/20 bg-primary/5">
                  <p className="font-body text-sm text-muted-foreground"><strong className="text-primary">Explanation:</strong> {mod.quiz[currentQ].explanation}</p>
                </motion.div>
              )}

              {showExplanation && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-center">
                  <button onClick={handleNext} className="px-8 py-3 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
                    {currentQ < mod.quiz.length - 1 ? "Next Question" : "See Results"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* RESULTS PHASE */}
          {phase === "results" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl font-bold text-primary">{score}/{mod.quiz.length}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Module Complete!</h2>
              <p className="font-body text-muted-foreground mb-8">
                You scored {score} out of {mod.quiz.length} on "{mod.title}"
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {nextModule && (
                  <Link to={`/course/${course.id}/module/${nextModule.id}`} onClick={() => { setPhase("reading"); setSelectedAnswer(null); setShowExplanation(false); }} className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
                    Next Module →
                  </Link>
                )}
                {isLastModule && (
                  <Link to={`/course/${course.id}/certificate`} className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
                    🎓 Get Certificate
                  </Link>
                )}
                <Link to={`/course/${course.id}`} className="px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-500">
                  Back to Course
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseLearn;
