/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import goal1 from '../assets/goal1.jpg'
import goal2 from '../assets/goal2.jpg'
import { motion } from 'framer-motion'

const Goals = () => {
  return (
    <section class="min-h-[100vh] flex items-center justify-center bg-[#277BC0]">
        <div class="container px-5 py-24 mx-auto">
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
              class="flex flex-col text-center w-full mb-20">
                <h2 class="text-7xl capitalize text-white tracking-widest font-medium title-font mb-5">
                  our goals
                </h2>
            </motion.div>
            <div class="flex flex-wrap items-center text-center justify-center -m-4 gap-5 px-5">
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
                  class="lg:w-1/3 border-[#FBDF07] rounded-full border-[30px]">
                    <div class="flex rounded-lg h-full bg-gray-100 flex-col">
                        <div class="flex items-center">
                            <Image
                                src={goal1}
                                alt="Research"
                            />
                        </div>
                        <div class="flex flex-col gap-10 items-center text-center py-5">
                            <p className='text-md capitalize font-bold'>
                                Helping you visualize outcomes that you want <br/>
                                So that you can increase your confidence. Seeing <br/>
                                yourself succeed. motivates you.
                            </p>
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
                  class="lg:w-1/3 border-[#FBDF07] rounded-full border-[30px]">
                    <div class="flex rounded-lg h-full bg-gray-100 flex-col">
                        <div class="flex items-center">
                            <Image
                                src={goal2}
                                alt="Research"
                            />
                        </div>
                        <div class="flex flex-col gap-10 items-center text-center py-5">
                            <p className='text-md capitalize font-bold'>
                              We give young peoplethe chance to experience <br/>
                              cultures, respect differences, and develop new <br/>
                              relationships.
                            </p>
                        </div>
                    </div>
                </motion.div>
              
            </div>
        </div>
    </section>
  )
}

export default Goals
