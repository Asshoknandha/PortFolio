import React from 'react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial = {{opacity:0,y:-100}}
      transition={{duration:1.5}}
       className='my-20 text-center text-4xl'>My Skills</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial = {{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className="flex flex-wrap justify-center items-center gap-4">
        {[ 
          { icon: <FaReact className='text-7xl text-cyan-400' />, duration: 2.5 },
          { icon: <FaNodeJs className='text-7xl text-green-500' />, duration: 2.8 },
          { icon: <BiLogoPostgresql className='text-7xl text-sky-700' />, duration: 3 },
          { icon: <RiTailwindCssLine className='text-7xl text-sky-400' />, duration: 3.2 }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            variants={iconVariants(item.duration)} 
            initial="initial" 
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;


