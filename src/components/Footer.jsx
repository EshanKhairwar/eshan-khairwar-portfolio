
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-transparent text-stone-200">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>

        {/* Contact Info */}
        <div className="space-y-6">
          <motion.div
            className="flex items-center justify-center gap-3"
            variants={itemVariants}
          >
            <FaMapMarkerAlt className=" text-xl" />
            <p>Gondia, Maharashtra, India</p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-3"
            variants={itemVariants}
          >
            <FaPhoneAlt className="text-xl" />
            <p>+91 7588145768</p> {/* Replace with your number */}
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-3"
            variants={itemVariants}
          >
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:eshankhairwar@gmail.com"
              className="hover:underline"
            >
              eshankhairwar@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
