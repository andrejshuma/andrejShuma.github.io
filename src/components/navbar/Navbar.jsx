import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Andrej Shumanovski
        </motion.span>
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a href="">
            <img src="/public/github.png" alt="" />
          </a>
          <a href="">
            <img src="/public/linkedin.png" alt="" />
          </a>

          <a href="">
            <img src="/public/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/public/instagram.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
