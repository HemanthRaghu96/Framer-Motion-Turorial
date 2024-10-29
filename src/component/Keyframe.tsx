import { motion } from "framer-motion";

const Keyframe = () => {
  return (
    <div>
      {/* Keyframe in [start,end]*/}
      <motion.div
        className="box"
        animate={{ scale: [1, 3, 6, 3, 4, 2, 4, 1], rotate: [0, 270, 0, 270] }}
        transition={{ duration: 5 }}
      />
    </div>
  );
};

export default Keyframe;
