import React from 'react'
import { motion } from 'framer-motion'

const Motivation = () => {
  return (
    <div className='h-screen bg-[#AFAFAF] bg-motivation justify-center flex items-center flex-col text-center border-t-2 border-t-[#fbdf07]'>

      <div className='over'/>
      
      <motion.div 
        initial={{
          opacity:0,
          x:-300
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:1.5
        }}
        className='relative flex flex-col gap-8 px-8'>
        <h1 className='md:text-8xl text-4xl capitalize font-bold text-[#FBDF07]'>
          our motivation
        </h1>

        <p className='text-white md:text-lg text-md'>
          We believe that helping other improves social interaction, distracts people frpm their <br/> own problems, and improves self-esteem and competence, Physical Well-Being - helping<br/> others leads to increased social integration which allows people to lead more active lifestyles.
        </p>
      </motion.div>
      
    </div>
  )
}

export default Motivation
