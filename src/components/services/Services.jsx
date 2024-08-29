import { useRef } from "react";
import "./Services.scss";
import { color, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          My abillities and skills <br /> that can help you
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Software</motion.b>{" "}
            solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For your </motion.b>
            business.
          </h1>
          <button>CONTACT</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>WebFlow</h2>
          <p>
            I design custom layouts, implement animations, and optimize
            performance for visually appealing and functional websites. I create
            dynamic, engaging sites that work seamlessly across devices and
            screen sizes.
          </p>
          <img src="/Clock1.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HTML & CSS</h2>
          <p>
            I craft clean, responsive, and visually appealing websites. I design
            layouts, implement styles, and ensure compatibility across all
            devices and browsers. Whether it's a simple webpage or a complex
            site, I focus on creating seamless user experiences.
          </p>
          <img src="/Clock1.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>JavaScript & React</h2>
          <p>
            As a JavaScript and React expert, I build dynamic, responsive web
            applications with smooth user interactions. From developing complex
            features to optimizing performance, I ensure your site is fast,
            functional, and user-friendly.
          </p>
          <img src="/Clock.png" alt="" />
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding & Design</h2>
          <p>
            I craft unique visual identities that capture your brand's essence.
            From logos to full brand systems, I create unique designs that
            resonate with your audience.
          </p>
          <img src="/Clock.png" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
