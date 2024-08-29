import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AI Chat bot",
    img: "/clone.png",
    desc: "This is a full stack project that I have done. It is a chat bot that uses AI to answer questions from the user. It is built with React, Node.js, Express, and MongoDB.",
    link: "https://github.com/andrejshuma/chatgpt-clone",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    img: "/website.png",
    desc: "This is a frontend project that I have done. It is a personal portfolio website that I have built with React. It is a responsive website that looks good on all devices.",
    link: "https://github.com/andrejshuma/andrejShuma.github.io",
  },
  {
    id: 3,
    title: "Website for FotoStation",
    img: "/logo.jpg",
    desc: "This is a frontend project that I have done. It is a website for a local photography studio in Skopje. It is built with Webflow and has a gallery, testimonial section, contact form, and a location.",
    link: "https://fotostation.mk",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["end end ", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>See demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
