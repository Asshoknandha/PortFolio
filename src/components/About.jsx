import React from 'react'
import {motion} from "motion/react"

const About = () => {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About Me</h2>
        <div
        className="flex flex-wrap">
            <motion.div
            whileInView={{opacity : 1 , x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}} 
             className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className=' w-[400px] h-auto object-contain md:w-[500px] lg:w-[600px] rounded-2xl' src="/aboutme.jpg" alt="" />
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial = {{opacity:0, x:100 }}
            transition={{duration:0.5 }}
             className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2  max-w-xl py-6'>Hi, I'm Asshoknandha! I'm passionate about web development and have experience with React, JavaScript, and backend technologies. I enjoy building projects
        like a cryptocurrency tracker and password generator. I'm currently
        sharpening my skills to land an internship</p>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default About
