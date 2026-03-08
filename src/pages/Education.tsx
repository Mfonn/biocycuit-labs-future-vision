import { motion } from "framer-motion";
import { BookOpen, Clock, Users, Star } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const courses = [
  {
    title: "Introduction to Biotechnology",
    description: "A foundational course covering the basics of biotech — from DNA to industrial applications. Perfect for curious minds with no prior background.",
    duration: "4 weeks",
    level: "Beginner",
    topics: ["Cell biology fundamentals", "DNA & gene expression", "Biotech applications in daily life"],
  },
  {
    title: "Water Science & Wellness",
    description: "Explore the science behind water — its molecular properties, role in human health, and the emerging research on structured water.",
    duration: "3 weeks",
    level: "All Levels",
    topics: ["Molecular properties of water", "Water and cellular health", "Purification vs. structuring"],
  },
  {
    title: "Machine Learning for Biology",
    description: "Learn how ML models are transforming biological research — from protein folding to drug discovery. Hands-on coding included.",
    duration: "6 weeks",
    level: "Intermediate",
    topics: ["ML fundamentals for bio", "Protein structure prediction", "Biological dataset analysis"],
  },
  {
    title: "Synthetic Biology Essentials",
    description: "Understand how scientists engineer biological systems — designing genetic circuits, biosensors, and living machines.",
    duration: "5 weeks",
    level: "Intermediate",
    topics: ["Genetic circuit design", "Biosensor development", "Ethics of synthetic biology"],
  },
];

const Education = () => {
  return (
    <ServicePageLayout
      title="Education"
      subtitle="Refreshing courses that bridge traditional knowledge with modern science — learn biology, technology, and wellness in ways you've never experienced."
      overline="Learning Hub"
    >
      {/* Course cards */}
      <div className="space-y-8 mb-16">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group p-8 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:glow-border transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <span className="text-[10px] tracking-wider uppercase px-2 py-1 rounded-full border border-accent/30 text-accent font-body">
                    {course.level}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 flex lg:flex-col items-center gap-4 text-sm text-muted-foreground font-body">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-primary" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-primary" />
                  Online
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why learn section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-primary/20 bg-primary/5 p-8 mb-16"
      >
        <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
          Why Learn with BioCircuit?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Community-Driven", desc: "Join a network of curious minds exploring biology's frontiers together." },
            { icon: Star, title: "Practical Focus", desc: "Every course includes real experiments, datasets, or research contributions." },
            { icon: BookOpen, title: "Fresh Perspective", desc: "We blend traditional wellness knowledge with cutting-edge biotech." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="mx-auto mb-3 text-primary" size={24} />
              <h3 className="font-display text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="text-center">
        <a
          href="mailto:education@biocircuitlaboratories.org?subject=Course Inquiry"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display text-sm tracking-wider uppercase bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500"
        >
          Enroll Now
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default Education;
