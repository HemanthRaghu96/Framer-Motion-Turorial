import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{
        scale: 1,
        rotate: 0,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 3,
      }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{
        top: -50,
        bottom: 50,
        left: -50,
        right: 50,
      }}
      dragElastic={0.2}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src="https://media.gettyimages.com/id/1994616800/photo/matterhorn-mountain-winter-view-in-zermatt-switzerland-european-alps.jpg?s=612x612&w=0&k=20&c=0QIprCkdRSiaj2KU7bj1ww7JrOxKHo_tPYoWJUUjIrQ="
        alt="CardImg"
      />
      <div className="p-6">
        <div className="text-black text-xl font-semibold mb-2">Card title</div>
        <p className="text-gray-700 mb-4">
          This is a simple card with Framer animation and tailwindcss for
          styling
        </p>
        <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-300 transition">
          Learn more
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
