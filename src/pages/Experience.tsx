import { motion } from "framer-motion";
import { StyledExperience } from "./styles";

const Experience = () => {
  return (
    <StyledExperience className="page-content">
      <motion.div
        className="test"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ delay: 0.3, stiffness: 75 }}
      >
        <h1>Test Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Porttitor nullam lectus diam
          nulla ultrices tellus hendrerit. Adipiscing hendrerit risus tristique
          arcu in volutpat nibh integer. Adipiscing vulputate nunc et accumsan
          condimentum etiam justo diam. Sodales convallis pharetra sed ultricies
          neque pretium vitae egestas varius. Eget id viverra nec sed quam
          euismod elit. Auctor vel ac
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Porttitor nullam lectus diam
          nulla ultrices tellus hendrerit. Adipiscing hendrerit risus tristique
          arcu in volutpat nibh integer. Adipiscing vulputate nunc et accumsan
          condimentum etiam justo diam. Sodales convallis pharetra sed ultricies
          neque pretium vitae egestas varius. Eget id viverra nec sed quam
          euismod elit. Auctor vel ac
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Porttitor nullam lectus diam
          nulla ultrices tellus hendrerit. Adipiscing hendrerit risus tristique
          arcu in volutpat nibh integer. Adipiscing vulputate nunc et accumsan
          condimentum etiam justo diam. Sodales convallis pharetra sed ultricies
          neque pretium vitae egestas varius. Eget id viverra nec sed quam
          euismod elit. Auctor vel ac
        </p>
      </motion.div>
    </StyledExperience>
  );
};

export default Experience;
