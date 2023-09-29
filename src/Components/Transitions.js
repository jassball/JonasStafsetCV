import { motion } from "framer-motion";
import "./Styles/FrontPage.css";

const Transitions = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 2 }}
        transition={{ duration: 1, ease: [0.44, 2, 0.72, 2] }}
      />

      <motion.div
        className="slide-out"
        initial={{ scaleY: 2 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.44, 2, 0.72, 2] }}
      />
    </>
  );
};

export default Transitions;
