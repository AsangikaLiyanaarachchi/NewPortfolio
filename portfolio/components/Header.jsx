import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-8 py-20'>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image 
                    src={assets.profile_img} 
                    alt='Profile' 
                    className='rounded-full w-40 h-40 object-cover border-4 border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300' 
                />
            </motion.div>
            <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='flex items-center gap-2 text-xl md:text-2xl mb-2 font-Ovo'
            >
                Hi! I am Asangika Liyanaarachchi 
                <motion.div
                    animate={{ rotate: [0, 14, -8, 14, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                    <Image src={assets.hand_icon} alt='waving hand' className='w-7' />
                </motion.div>
            </motion.h3>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='text-4xl sm:text-6xl lg:text-[70px] font-Ovo font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'
            >
                Full-Stack Developer 
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className='max-w-2xl mx-auto font-Ovo text-lg text-gray-600 dark:text-gray-300 leading-relaxed'
            >
                I'm a full-stack developer passionate about crafting dynamic websites,
                mobile applications, and digital experiences that fuel growth for businesses.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className='flex flex-col sm:flex-row items-center gap-4 mt-6'
            >
                <a href='#contact'
                    className='px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white flex items-center gap-2
                    hover:from-blue-600 hover:to-violet-600 transition-all duration-300 font-medium text-base shadow-lg
                    hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]'>
                    Contact me <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
                </a>
                <a href='/sample-resume.pdf' download
                    className='px-8 py-3 rounded-full border border-gray-300 flex items-center gap-2
                    bg-transparent hover:bg-gray-50 transition-all duration-300 font-medium text-base
                    hover:border-gray-400 active:scale-[0.98]
                    dark:text-white dark:hover:bg-white/5'>
                    My resume <Image src={assets.download_icon} alt='download' className='w-4' />
                </a>
            </motion.div>
        </div>
    )
}

export default Header