import { motion } from "framer-motion";
const TransitionAttribute = () => {
  return (
    <div>
      {/* transition  */}
      {/* delay->start after few sec, duration->how long trantion take ,ease->fade */}
      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 200 }}
        transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default TransitionAttribute;
