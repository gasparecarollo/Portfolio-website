"use client";
import React, { useState, useTransition } from 'react';
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li> Node.js</li>
                <li>Express</li>
                <li>PostgresSQL</li>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>NextJS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li> Pursuit Fellowship for Fullstack Web/App Development</li>
                <li>New York Institute of Technology: Master's Degree in Communication Arts</li>
                <li>St. Francis College</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li> Free Code Camp: Javascript and Algorithms </li>
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        )
    },
];


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }


    return (
        <section className='text-white'> <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/MyAboutPicture.jpg' alt='Edited AI generated cartoon of Gaspare on the Computer wearing a Yankee hat' width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className='text-4xl font-bold text-white mb-4'> About Me</h2>
                <p className='text-base lg:text-lg'> I am a full stack web devoloper.</p>
                <div className='flex flex-row justify-start mt-8' >
                    <TabButton selectTab={() =>
                        handleTabChange("skills")} active={tab === "skills"}
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")} active={tab === "education"} >
                        {" "}
                        Education {" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}
                    >
                        {" "}
                        Certifications{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
        </section>
    );
};

export default AboutSection;