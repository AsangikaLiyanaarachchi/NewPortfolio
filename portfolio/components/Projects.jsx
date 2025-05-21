import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20'>

            <h2 className='text-center text-5xl font-Ovo'>My Works</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                <div className='flex-row'>
                    <div className='w-64 sm:w-80 rounded-3xl max-w-none mb-3'>
                        <Image src={assets.StyleSync} alt='' className='w-full rounded-xl' />
                    </div>
                    <div className='w-64 sm:w-80 rounded-3xl max-w-none mb-1'>
                        <Image src={assets.P1_img2} alt='' className='w-full rounded-xl' />
                    </div>
                </div>


                <div className='flex-1'>
                    <h4 className=' mb-2 text-3xl font-Ovo'>StyleSync - Salon Appointment Management System💇‍♂️</h4>
                    <p className='mb-8 max-w-2xl font-Ovo'>
                        StyleSync is a modern and intuitive salon appointment management system designed to enhance efficiency and convenience for both
                        customers and salon owners. The system streamlines the entire appointment booking process, ensuring a seamless experience for users.
                    </p>
                    <p className='mb-8 max-w-2xl font-Ovo'>
                        For Customers:<br />
                        ✅ Browse salon services effortlessly.<br />
                        ✅ Check real-time availability of stylists.<br />
                        ✅ Book appointments with just a few clicks.<br />
                        ✅ Receive notifications and reminders.<br />
                        For Salons:<br />
                        ✅ Manage daily schedules efficiently.<br />
                        ✅ Keep track of customer appointments and history.<br />
                        ✅ Send automated reminders and notifications.<br />
                        ✅ Improve customer engagement and retention.
                    </p>
                    <p className='mb-5 max-w-2xl font-Ovo'>
                        💻 Tech Stack:<br />
                        Web Application: Built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js).<br />
                        Mobile Application: Developed with React Native for a seamless user experience.
                    </p>
                    <p className='mb-5 max-w-2xl font-Ovo'>
                        🌟 My Role: Full Stack Developer,
                    </p>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                    📁github: Full Stack Developer,
                    </p>
                </div>

            </div>

            {/* secont project */}

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

                <div className='flex-1'>
                    <h4 className=' mb-2 text-3xl font-Ovo'>Plura - SaaS Website Builder🚀</h4>
                    <p className='mb-8 max-w-2xl font-Ovo'
                    >Plura is a powerful SaaS website builder designed to help agencies and businesses create high-performance websites and funnels effortlessly.
                        This project was developed to enhance my technical expertise and push the boundaries of innovation, leveraging modern,
                        high-performance technologies to deliver a seamless website-building, project management, and financial automation experience.
                    </p>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Key Features<br />
                        ✅ Agency & Sub-Accounts – Manage multiple clients with ease<br />
                        ✅ Unlimited Funnel Hosting – Build, deploy, and optimize high-converting funnels<br />
                        ✅ Full Website & Funnel Builder – Drag-and-drop, no-code functionality<br />
                        ✅ Stripe Integration – Subscription plans, add-on products, and custom checkouts<br />
                        ✅ Custom Dashboards & Analytics – Gain real-time insights for data-driven decisions<br />
                        ✅ Lead Generation & Notifications – Capture and nurture leads effortlessly<br />
                        ✅ Dark & Light Mode – Sleek and intuitive UI for an enhanced user experience<br />
                        ✅ Scalable & Flexible Architecture – Designed for growth and high performance<br />
                    </p>

                    <p className='mb-5 max-w-2xl font-Ovo'>
                        💻 Tech Stack:<br />
                        Next.js 14, React,Bun, Node.js,MySQL, Prisma ORM,Stripe Connect, Stripe Subscriptions
                    </p>
                    <p className='mb-5 max-w-2xl font-Ovo'>
                        🌟 My Role:Full Stack Developer,
                    </p>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                    📁github:Full Stack Developer,
                    </p>
                </div>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.work_2} alt=''
                        className='w-full rounded-3xl' />
                </div>
            </div>

            {/* 3rd project */}

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.work_2} alt=''
                        className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <h4 className=' mb-2 text-3xl font-Ovo'>Fashion House - E-Commerce Platform 🛍️</h4>
                    <p className='mb-8 max-w-2xl font-Ovo'
                    >Fashion House is a modern e-commerce platform designed to provide customers with a seamless and engaging online
                        shopping experience. The application features an intuitive user-friendly interface, advanced search & filtering options,
                        secure payment methods, and personalized recommendations, ensuring a smooth and enjoyable shopping journey.
                    </p>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Key Features:<br />
                        ✅ User-Friendly Interface – Intuitive design for a hassle-free shopping experience<br />
                        ✅ Advanced Search & Filtering – Find products easily with smart filters<br />
                        ✅ Secure Payments – Safe transactions with multiple payment gateways<br />
                        ✅ Personalized Recommendations – AI-driven suggestions based on user preferences<br />
                        ✅ Seamless Cart & Checkout Process – Smooth and optimized for conversions<br />
                        ✅ Responsive & Mobile-Friendly – Optimized for all devices<br />
                    </p>
                    <p className='mb-5 max-w-2xl font-Ovo'>
                        💻 Tech Stack:<br />
                        React, Node.js, MongoDB, Redux
                    </p>
                    <p className='mb-5 max-w-2xl font-Ovo'>
                        🌟 My Role:<br />
                        Frontend Developer ,
                    </p>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        github:<br />
                        Full Stack Developer,
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Projects
