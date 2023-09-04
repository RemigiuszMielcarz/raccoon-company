import { motion } from "framer-motion";

const ScrollDown = () => {
  return (
    <div className="absolute left-0 right-0 mx-auto xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
      <a href="#services">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white border-solid flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-white mb-1"
          />
        </div>
      </a>
    </div>
  );
};

export default ScrollDown;
