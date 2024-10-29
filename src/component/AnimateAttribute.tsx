
import { motion } from "framer-motion";
const AnimateAttribute = () => {
  return (
    <div className="flex m-2">
     {/* animate  attribute*/}
      {/* x,y->translate(move),rotate->rotate the div, scale->zoom(height and width * no), skew->tilt */}

      <motion.div className="box m-[100px]" animate={{ x: 100, }} />
      <motion.div className="box" animate={{ rotate: 60 }} />
      <motion.div className="box m-[100px]" animate={{ scale: 2 }} />
      <motion.div className="box m-[100px]" animate={{ skew: 20 }} />
      </div>
  )
}

export default AnimateAttribute