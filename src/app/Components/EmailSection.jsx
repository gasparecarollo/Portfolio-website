import React from 'react';
import GithubIcon from '../../../public/GitHub-logo.png';
import LinkedInIcon from '../../../public/LinkedIn-logo.png';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className="text-xl font-bold text-white my-2">
                    Let's Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is always open for collaborations. Whether you have a question, or just want to stop by and say hi, I'll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/gasparecarollo">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gcarollo85/">
                        <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                </div>
                <div>
                    <form className="flex flex-col">
                        <div className="mb-6">
                            <label htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium ">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="johndoe@gmail.com"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#8CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject"
                                className="text-white block mb-2 text-sm font-medium ">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Your message here..."
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#8CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default EmailSection
