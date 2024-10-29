import { motion } from "framer-motion";

const Gesture = () => {
  return (
    <div>
        {/* whileHover */}
        <h1 className="font-bold text-center">whileHover</h1>
      <motion.div
        className="box mt-[10px]"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      {/* whileTap */}
      <h1 className="font-bold text-center mt-[30px]">whileTap</h1>
      <motion.div
        className="box mt-[10px]"
        whileTap={{ scale: 0.8, backgroundColor: "crimson" }}
        transition={{ type: "spring", stiffness: 300 }}
      />
       {/* whileDrag */}
       <h1 className="font-bold text-center mt-[30px]">whileDrag</h1>
      <motion.div
        className="box mt-[10px]"
        drag
        dragConstraints={{
            top:-50,
            left:-50,
            right:50,
            bottom:50
        }}
      />
    </div>
  );
};

export default Gesture;
