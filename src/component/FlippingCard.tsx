import { motion } from "framer-motion";
import { useState } from "react";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div
      className="perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
      variants={{
        front:{rotateX:0},
        back:{rotateY:180}
      }}
      initial="front"
      animate={isFlipped?"back":"front"}
      transition={{duration:0.6}}>
        <div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold">
          Front Side
        </div>
        <div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold rotate-y-180">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
