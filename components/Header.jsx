import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className='h-screen justify-center flex items-center overflow-hidden'>
        <section className='h-[100vh] w-full flex lg:flex-row flex-col'>
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
                className='flex-1 h-full flex flex-col justify-between md:p-24 p-8'>
                <h1 className='font-semibold text-4xl text-[#277BC0]'>
                    Impact
                </h1>

                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold md:text-8xl sm:text-6xl text-5xl text-[#277BC0]'>
                        The
                        <br/>
                        generation
                        <br/>
                        of tomorrow
                    </h1>
                    <p className='text-gray-500 md:text-xl sm:text-lg text-md'>
                        We do all the research, strategy,<br/> design, and execution so we can create<br/> the revolution together
                    </p>
                </div>
            </motion.div>

            <div className='bg-header flex-1 h-full w-full flex items-center justify-center p-5'>
                <div className='over'/>
                <motion.h1 
                    initial={{
                        opacity:0,
                        x:300
                    }}
                    whileInView={{
                        opacity:1,
                        x:0
                    }}
                    transition={{
                        duration:1.5
                    }}
                    className='capitalize text-white font-bold relative md:text-8xl sm:text-6xl text-4xl text-center'>
                    work hard
                    <br/>
                    dream big
                </motion.h1>
            </div>
        </section>
    </header>
  )
}

export default Header
