import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useRef } from 'react';

const testimonials = [
  {
    name: "Bhavana N Sivadas",
    role: "Software Engineer @ Fidelity Investments",
    image: "https://cdn-icons-png.flaticon.com/512/194/194938.png",
    content:
      "Rahul played a key role in strengthening my technical and professional foundation. He demonstrated deep expertise in Java, Spring Boot, backend development, and structured problem-solving approaches. His strong command over cloud and DevOps, including CI/CD pipelines and deployment strategies, was especially impactful. Beyond technical skills, he helped me understand corporate workflows and collaboration standards. Always approachable and dependable, he consistently provided clarity and guidance.",
    rating: 5,
  },
  {
    name: "Sunny Aryan",
    role: "Principal Software Engineer @ Fidelity Investments",
    image: "https://cdn-icons-png.flaticon.com/512/194/194931.png",
    content:
      "I worked closely with Rahul on a high-impact initiative that gained enterprise-level recognition and was later selected for a US Patent grant. The effort also earned our team the company’s Excellence Award. Rahul was a key contributor in both implementation and execution. His hands-on problem-solving mindset helped overcome initial barriers and accelerated successful adoption of the solution.",
    rating: 5,
  },
  {
    name: "Pranit Rai",
    role: "Software Engineer @ Fidelity Investments",
    image: "https://cdn-icons-png.flaticon.com/512/194/194931.png",
    content:
      "Rahul is a highly skilled backend engineer with strong expertise in Java and Spring Boot. He consistently delivers clean, scalable, and well-structured backend solutions, with a solid understanding of REST APIs and business logic implementation. He approaches problems with clarity and precision, quickly translating requirements into production-ready code. His strength lies in backend development, where he adds the most value to the team.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container-custom" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{'// Feedback'}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimonials from clients and collaborators
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors shadow-card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-mono font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
