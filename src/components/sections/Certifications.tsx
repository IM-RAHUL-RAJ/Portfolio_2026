import { motion, useInView } from "framer-motion";
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import { useRef } from "react";

const certifications = [
  {
    title: "FMR India Excellence Award 2025",
    platform: "Fidelity Investments",
    year: "Mar 2026",
    description:
      "Awarded for high-impact contribution to enterprise-scale systems and innovation.",
    icon: "🏆",
    verified: true,
    url: "#",
  },
  {
    title: "FMR India Excellence Award 2024",
    platform: "Fidelity Investments",
    year: "Feb 2025",
    description:
      "Recognized for delivering scalable solutions and driving significant business impact.",
    icon: "🏅",
    verified: true,
    url: "#",
  },
  {
    title: "AWS Developer Associate",
    platform: "AWS",
    year: "Oct 2025",
    description:
      "Certified in developing and deploying scalable cloud applications on AWS, with hands-on experience in serverless architectures, microservices, and CI/CD pipelines.",
    icon: "☁️",
    verified: true,
    url: "#",
  },
  {
    title: "HackerRank Problem Solving Certified",
    platform: "HackerRank",
    year: "Oct 2024",
    description:
      "Validated problem-solving skills across data structures, algorithms, and coding challenges.",
    icon: "🧩",
    verified: true,
    url: "#",
  },
  {
    title: "Google Cloud Practitioner",
    platform: "Google",
    year: "Nov 2022",
    description:
      "Cloud fundamentals, GCP services, data warehousing, and Kubernetes (GKE) concepts.",
    icon: "☁️",
    verified: true,
    url: "#",
  },
  
  {
    title: "Course Topper — Python",
    platform: "NPTEL",
    year: "Nov 2021",
    description:
      "Achieved top rank in Python programming course, demonstrating strong fundamentals and problem-solving.",
    icon: "🐍",
    verified: true,
    url: "#",
  },
];
const achievements = [
  {
    icon: "🏅",
    title: "US Patent Contribution",
    description: "Part of a project selected for US Patent recognition",
  },
  {
    icon: "💡",
    title: "1000+ Coding Problems",
    description: "Across GFG, LeetCode, HackerRank and other platforms"
  },
  {
    icon: "🏆",
    title: "50+ Deployed Websites",
    description: "Production-ready apps live for clients & on internet"
  },
  {
    icon: "🚀",
    title: "Growing Every Day",
    description: "Consistently improving problem-solving & development skills"
  }
];


export const Certifications = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-custom" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            {"// 05. Credentials"}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and growth through professional certifications
          </p>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />

          
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.title}
              // href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all shadow-card block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.icon}</div>

                <div className="flex items-center gap-2">
                  {cert.verified && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <h3 className="font-mono font-bold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{cert.platform}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {cert.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-primary font-mono">
                <Calendar className="w-3 h-3" />
                {cert.year}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold font-mono mb-2">
            Other <span className="text-primary">Achievements</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-secondary/30 border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-2xl mb-2">{achievement.icon}</div>

              <h4 className="font-mono font-semibold text-sm mb-1">
                {achievement.title}
              </h4>

              <p className="text-xs text-muted-foreground">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
