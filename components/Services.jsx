/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import research from '../assets/research.jpg'
import content from '../assets/content.jpg'
import creativity from '../assets/creativity.jpg'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-[#277BC0]">
        <div className="container px-5 py-24 mx-auto">
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
                className="flex flex-col text-center w-full mb-20">
                <h2 className="text-7xl capitalize text-white tracking-widest font-medium title-font mb-5">
                    what we offer
                </h2>
                <p className="text-center text-lg text-gray-200">
                    In impact social club we believe that small details hit difference that's
                    <br/>
                    why we take care of every single one, in order to create the revolution
                </p>
            </motion.div>
            <div className="flex flex-wrap -m-4 gap-5 px-5">
                <motion.div 
                    initial={{
                        opacity:0,
                        y:300
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    transition={{
                        duration:1
                    }}
                    viewport={{ once: true}}
                    className=" flex-1  border-[#FBDF07] rounded-full border-[30px]">
                    <div className="flex rounded-lg h-full bg-gray-100 flex-col">
                        <div className="flex items-center">
                            <Image
                                src={research}
                                alt="Research"
                            />
                        </div>
                        <div className="flex flex-col gap-10 items-center text-center py-5">
                            <h1 className='text-3xl capitalize font-bold'>
                                research
                                <br/>
                                & planning
                            </h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{
                        opacity:0,
                        y:300
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    transition={{
                        duration:1.5
                    }}
                    viewport={{ once: true}}
                    className="flex-1  border-[#FBDF07] rounded-full border-[30px]">
                    <div className="flex rounded-lg h-full bg-gray-100 flex-col">
                        <div className="flex items-center">
                            <Image
                                src={content}
                                alt="Research"
                            />
                        </div>
                        <div className="flex flex-col gap-10 items-center text-center py-5">
                            <h1 className='text-3xl capitalize font-bold'>
                                content
                            </h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{
                        opacity:0,
                        y:300
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    transition={{
                        duration:2
                    }}
                    viewport={{ once: true}}
                    className="flex-1  border-[#FBDF07] rounded-full border-[30px]">
                    <div className="flex rounded-lg h-full bg-gray-100 flex-col">
                        <div className="flex items-center">
                            <Image
                                src={creativity}
                                alt="Research"
                            />
                        </div>
                        <div className="flex flex-col gap-10 items-center justify-center text-center py-5">
                            <h1 className='text-3xl capitalize font-bold'>
                                creativity
                            </h1>
                        </div>
                    </div>
                </motion.div>
                
            </div>
        </div>
    </section>
  )
}

export default Services
