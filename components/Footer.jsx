/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {FaPhoneAlt,FaInstagram} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <section class="min-h-[100vh] bg-footer flex items-center justify-center">
      <div className='over'/>
      <div class="container px-5 py-24 mx-auto relative">
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
                duration:2
            }}
          class="flex flex-col text-center w-full mb-20">
          <h2 class="text-6xl text-[#FBDF07] tracking-widest font-bold title-font mb-1">
            Let's glow together
          </h2>
        </motion.div>
        <div class="flex flex-wrap -m-4">
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
            class="p-4 md:w-1/3 w-full">
            <div class="flex rounded-lg justify-center h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-20 h-20 mr-3 inline-flex items-center justify-center rounded-full bg-[#277bc0] text-white flex-shrink-0 md:text-4xl text-3xl">
                  <FaPhoneAlt/>
                </div>
                <h2 class="text-gray-900 md:text-5xl text-3xl title-font font-bold">
                  Phone
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed md:text-3xl text-2xl">
                  +212 650581992
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
                  duration:1.5
              }}
              viewport={{ once: true}}
            class="p-4 md:w-1/3 w-full">
            <div class="flex rounded-lg justify-center h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-20 h-20 mr-3 inline-flex items-center justify-center rounded-full bg-[#277bc0] text-white flex-shrink-0 md:text-4xl text-3xl">
                  <MdEmail/>
                </div>
                <h2 class="text-gray-900 md:text-5xl text-3xl title-font font-bold">
                  Email
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed md:text-3xl text-2xl">
                  impactclub55@gmail.com
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
            class="p-4 md:w-1/3 w-full">
            <div class="flex rounded-lg justify-center h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-20 h-20 mr-3 inline-flex items-center justify-center rounded-full bg-[#277bc0] text-white flex-shrink-0 md:text-4xl text-3xl">
                  <FaInstagram/>
                </div>
                <h2 class="text-gray-900 md:text-5xl text-3xl title-font font-bold">
                  Social Media
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed md:text-3xl text-2xl">
                  @impact.On
                </p>
              </div>
            </div>
          </motion.div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Footer
