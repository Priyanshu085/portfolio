"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from '@/components/(about)/TabButton'
import { DataMenuProps } from '@/types'

const Data_Item: DataMenuProps[] = [
    {
        title: "education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>B-Tech Computer Science (2021-25)</li>
                <li>Intermediate (2019-21)</li>
            </ul>
        ),
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Prompt Engineering @[Deeplearning AI]</li>
                <li>Generative AI @[GoogleSkill Boost]</li>
                {/* <li> </li> */}
                <li>DevOps Fundamentals @[Udemy]</li>
            </ul>
        ),
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();
    const [menuOpen, setMenuOpen] = useState(true);

    const handleTabChange = (id: string) => {
        startTransition (() => {
            setTab(id);
        });
    }; 

    return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-14 sm:py-16'>
            <Image src="/images/about-image.png" width={500} height={500} alt='About-image' />
            <div className='mt-8 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='
                    text-4xl font-bold primary mb-4 cursor-pointer
                    hove:text-white 
                '>
                    About Me</h2>
                <div className=' border-4 primary-bd py-7 px-7 rounded-3xl' id='about-text'>
                    <p className='md:text-xl text-xs'>
                        Hey there! I&apos;m Priyanshu, a 3rd year engineering student with a focus on Data Science. 
                        Proficient in Python, MERN stack, and front-end technologies, I&apos;ve embarked on a journey to create impactful tech solutions. 
                        Currently, I&apos;m diving into Generative AI and Prompt Engineering, aiming to fuse these technologies into innovative projects.
                    </p>

                    {/* Mobile View */}
                    <div className="lg:hidden block mt-4">
                    <select
                        value={tab}
                        onChange={(e) => handleTabChange(e.target.value)}
                        className="block w-full px-4 py-2 text-white bg-white border border-slate-800 rounded-md"
                    >
                        <option value="education">Education</option>
                        <option value="certifications">Certifications</option>
                    </select>
                    </div>

                    {/* Desktop View */}
                    <div className='hidden lg:flex border-slate-800 flex-row text-lg mt-4 space-x-4'>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab === "education"} 
                        >
                            Education
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab === "certifications"} 
                        >
                            Certifications
                        </TabButton>
                    </div>

                    {/* Content */}
                    <div className='mt-4'>{Data_Item.find((e) => e.id == tab)?.content}</div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection