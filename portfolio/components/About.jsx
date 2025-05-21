import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = ({isDarkMode}) => {
    return (
        <div id='aboutme' className='w-full px-4 md:px-[12%] py-20 scroll-mt-20 bg-gray-50/50 dark:bg-gray-900/20'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h4 className='text-center mb-3 text-lg font-Ovo text-blue-600 dark:text-blue-400'>Introduction</h4>
                <h2 className='text-center text-4xl md:text-5xl font-Ovo font-bold mb-4'>About me</h2>
                <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-12'></div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className='text-xl md:text-2xl font-Ovo font-medium text-gray-800 dark:text-white mb-6'>
                        Hi, I'm Asangika Liyanaarachchi
                    </p>
                    <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
                        An undergraduate specializing in Information Technology at the University of Moratuwa. 
                        As a dedicated full-stack developer, I bring passion and expertise to building
                        impactful web and mobile applications.
                    </p>
                    <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4'>
                        With a blend of creativity and technical know-how,
                        I'm focused on creating user-friendly and effective digital solutions that help businesses thrive in the digital age.
                        I'm driven to solve complex challenges and bring ideas to life through innovative and practical design and development.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            key={index}
                            className="h-full"
                        >
                            <div className='border border-gray-200 bg-white/50 backdrop-blur-sm
                                rounded-xl p-6 cursor-pointer hover:bg-white group text-center
                                hover:-translate-y-2 duration-300 hover:shadow-xl h-full
                                dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-800
                                flex flex-col items-center justify-between'>
                                <div className="flex-1 flex flex-col items-center justify-start pt-2">
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} 
                                        className='w-10 group-hover:scale-110 transition-transform duration-300'/>
                                    <h3 className='mt-6 mb-3 font-semibold text-gray-800 dark:text-white text-lg'>{title}</h3>
                                </div>
                                <p className='text-gray-600 dark:text-gray-300 text-sm'>{description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h4 className='mb-8 text-2xl font-semibold text-gray-800 dark:text-white font-Ovo'>Tools I use</h4>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        {toolsData.map((tool, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                key={index}
                            >
                                <div className='flex items-center justify-center w-14 sm:w-16
                                    aspect-square bg-white border border-gray-200 rounded-xl
                                    hover:-translate-y-2 hover:shadow-lg duration-300 group
                                    dark:bg-gray-800 dark:border-gray-700'>
                                    <Image src={tool} alt='Tool' 
                                        className='w-7 sm:w-8 group-hover:scale-110 transition-transform duration-300'/>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About