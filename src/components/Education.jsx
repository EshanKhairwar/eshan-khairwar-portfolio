import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 }, // slide in from right
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-transparent">
      {/* Animated heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-16"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <motion.div
        className="relative max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Vertical line */}
        <motion.div
          className="absolute left-2 sm:left-4 top-2 h-full w-0.5 bg-stone-300"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        />

        <div className="flex flex-col gap-12">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              className="relative pl-10 sm:pl-12"
              variants={itemVariants} // <-- cards now slide from right
            >
              {/* Floating timeline dot */}
              <motion.div
                className="absolute left-2 sm:left-4 top-1 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-stone-900"
                initial={{ scale: 0, y: 0 }}
                whileInView={{ scale: 1 }}
                animate={{ y: [4, -4] }}
                transition={{
                  scale: { type: "spring", stiffness: 200, damping: 15 },
                  y: {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                viewport={{ once: true }}
              />

              {/* Card */}
              <motion.div
                className="p-6 rounded-2xl border border-stone-200 dark:border-stone-700 bg-white/5 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-sm text-stone-500 mb-2">{edu.year}</p>

                {/* Degree + Percentage in one line */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  {edu.percentage && (
                    <span className="text-sm text-stone-500 dark:text-stone-400">
                      {edu.percentage}
                    </span>
                  )}
                </div>

                <h4 className="text-sm text-stone-600 dark:text-stone-400 mb-3">
                  {edu.institution}
                </h4>

                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  {edu.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {edu.technologies.map((tech, id) => (
                    <motion.span
                      key={id}
                      className="rounded bg-stone-200 dark:bg-stone-800 px-3 py-1 text-sm font-medium text-stone-700 dark:text-stone-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
