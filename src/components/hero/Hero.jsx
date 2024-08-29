import { animate } from "framer-motion";
import { motion } from "framer-motion";
import "./Hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 100,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ANDREJ SHUMANOVSKI</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI Designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button>
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>
            <motion.button>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front End Developer | UI/UX Designer | Freelancer | Web Developer
      </motion.div>
      <div className="imgContainer">
        <img src="/public/Super.png" alt="slika" />
      </div>
    </div>
  );
};

export default Hero;
