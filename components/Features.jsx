import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  return (
    <div className='h-screen bg-[#AFAFAF] bg-search justify-center flex items-center flex-col text-center'>

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
        <h1 className='md:text-8xl text-4xl  capitalize font-bold text-[#FBDF07]'>
          reasearch &
          <br/>
          planning
        </h1>

        <p className='text-white md:text-lg text-md'>
          As team members, we try our best to make sure that every <br/> member will enjoy each second of his life while joining us,<br/> We try to make them feel welcome and comfy around us.
        </p>
      </motion.div>

    </div>
  )
}

export default Features
