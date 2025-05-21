import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
    return (
        <div id="services" className='w-full px-4 md:px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/20'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h4 className='text-center mb-3 text-lg font-Ovo text-blue-600 dark:text-blue-400'>What I offer</h4>
                <h2 className='text-center text-4xl md:text-5xl font-Ovo font-bold mb-4'>My Services</h2>
                <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-8'></div>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-Ovo'
                >
                    I'm a full-stack developer passionate about building scalable and user-friendly web and mobile applications that make an impact. 
                </motion.p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {serviceData.map(({ icon, title, description, link }, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="h-full"
                        >
                            <div className='group relative h-full overflow-hidden bg-white dark:bg-gray-800/50 rounded-2xl p-8
                                hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700
                                hover:-translate-y-2'>
                                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300'></div>
                                
                                <div className='relative z-10'>
                                    <div className='mb-6 w-14 h-14 rounded-2xl bg-blue-50 dark:bg-gray-700/50 
                                        flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                        <Image src={icon} alt={title} className='w-7 h-7' />
                                    </div>
                                    
                                    <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 
                                        dark:group-hover:text-blue-400 transition-colors duration-300'>
                                        {title}
                                    </h3>
                                    
                                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                                        {description}
                                    </p>
                                    
                                    {link && (
                                        <motion.a 
                                            href={link}
                                            className='inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mt-6 
                                                group-hover:gap-3 transition-all duration-300'
                                            whileHover={{ x: 5 }}
                                        >
                                            Learn more
                                            <Image src={assets.right_arrow} alt='arrow' className='w-4' />
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Services