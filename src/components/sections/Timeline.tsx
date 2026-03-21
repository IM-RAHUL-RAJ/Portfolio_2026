import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { useRef } from 'react';


const timelineData = [
  // ================= WORK EXPERIENCE =================

  {
    type: "work",
    title: "Software Engineer",
    organization: "Fidelity Investments",
    period: "Aug 2024 – Present",
    description:
      "Working on associate & customer-facing Trade and Money Movement applications using Spring Boot and Angular. Building scalable distributed systems with microservices, event-driven architecture, and cloud-native deployments. Implemented Kafka-based event-driven architecture for real-time streaming and low-latency systems. Deployed containerized workloads on AWS EKS using Docker & Kubernetes",
      
    highlights: [
      "Built scalable microservices with Spring Boot & Angular using REST APIs and monorepo architecture",
      "Implemented Kafka-based event-driven architecture for real-time streaming and low-latency systems",
      "Created Datadog & Splunk dashboards and achieved 95%+ test coverage using JUnit, Mockito & Jest",
      "Deployed containerized workloads on AWS EKS using Docker & Kubernetes",
      "Led Salesforce & SnapLogic ETL migration to Snowflake, reducing on-prem costs significantly",
      "Mentored junior engineers and contributed to system design & API architecture"
    ],
    icon: Briefcase,
  },

  {
    type: "work",
    title: "Associate Software Engineer",
    organization: "Fidelity Investments",
    period: "Aug 2023 – Jul 2024",
    description:
      "Worked on cloud migration, full-stack application modernization, and automation solutions using Snowflake, Docker, and Kubernetes. Migrated critical batch jobs from On-Prem to Snowflake and built new data pipelines. Saved ~200GB VM space by decommissioning legacy infrastructure",
    highlights: [
      "Migrated critical batch jobs from On-Prem to Snowflake and built new data pipelines",
      "Containerized full-stack apps using Docker and orchestrated via Kubernetes",
      "Saved ~200GB VM space by decommissioning legacy infrastructure",
      "Built Smart Intake Tracking tool using Streamlit & Snowflake, saving 3–4 hours/week"
    ],
    icon: Briefcase,
  },

  {
    type: "work",
    title: "Full-Stack Engineer Intern",
    organization: "Fidelity Investments",
    period: "Feb 2023 – Jul 2023",
    description:
      "Developed enterprise-grade data tooling for profiling and analysis of large-scale datasets. Built Datapedia tool for profiling tables with 1B+ records in seconds. Enabled data comparison features reducing analyst effort from weeks to minutes. Also filed for a Patent for the same tool.",
    highlights: [
      "Built Datapedia tool for profiling tables with 1B+ records in seconds",
      "Enabled data comparison features reducing analyst effort from weeks to minutes",
      "Used Python, Django, Pandas, NumPy, and Docker"
    ],
    icon: Briefcase,
  },

  {
    type: "work",
    title: "AI/ML Intern",
    organization: "Nokia",
    period: "Apr 2022 – Aug 2022",
    description:
      "Developed an AI-based attendance system using facial recognition. Integrated with a web interface for real-time monitoring and management.",
    highlights: [
      "Built system using Python, OpenCV, and Tkinter",
      "Delivered as a POC for client use with real-world impact",
      "First industry-grade AI solution implementation"
    ],
    icon: Briefcase,
  },

  {
    type: "work",
    title: "Subject Matter Expert",
    organization: "Chegg Inc",
    period: "Feb 2022 – Jun 2022",
    description:
      "Provided technical mentorship and problem-solving support to US students. Solved 100+ queries on DBMS, OS, C++, Python, and system design. Strengthened core CS fundamentals and communication skills",
    highlights: [
      "Solved 100+ queries on DBMS, OS, C++, Python, and system design",
      "Strengthened core CS fundamentals and communication skills",
      "Worked in US time zones adapting to global collaboration"
    ],
    icon: Briefcase,
  },

  // ================= EDUCATION =================

  {
    type: "education",
    title: "B.E. in Information Science Engineering (CGPA: 9.0)",
    organization: "The National Institute of Engineering, Mysuru",
    period: "Aug 2019 – Jul 2023",
    location: "Mysuru, Karnataka",
    description:
      "Strong foundation in data structures, distributed systems, software engineering, and machine learning.",
    icon: GraduationCap,
  },


  {
    type: "education",
    title: "HSC — 94%",
    organization: "Delhi Public School",
    period: "Apr 2016 – Mar 2018",
    location: "Dhanbad, Jharkhand",
    description:
      "Excelled academically and participated in problem-solving and tech competitions.",
    icon: GraduationCap,
  },
];


export const Timeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="timeline" className="section-padding bg-card/30 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-custom" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{'// My Journey'}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth and educational background
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors shadow-card">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-mono text-primary">{item.period}</span>
                    </div>
                    <h3 className="font-mono font-bold text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.organization}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Empty space for alignment on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
