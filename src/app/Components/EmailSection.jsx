"use client";
import React, { useState } from 'react';
import GithubIcon from '../../../public/GitHub-logo.png';
import LinkedInIcon from '../../../public/LinkedIn-logo.png';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSent, setEmailSent] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        //Form the request for sending data to the server.
        const options = {
            //The method is POST because we are sending data.
            method: 'POST',
            //Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            //Body of the request is the JSON data we created above.
            body: JSONdata,

        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === "success") {
            console.log("Message sent.");
            setEmailSent(true);
        }
    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center, _var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-5'></div>
            <div>
                <h5 className="text-xl font-bold text-white my-2">
                    Let's Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is always open for collaborations. Whether you have a question, or just want to stop by and say hi, I'll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2 mb-4">
                    <Link href="https://github.com/gasparecarollo">
                        <Image src={GithubIcon} alt="Github Icon"
                            weight={50} height={50}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/gcarollo85/">
                        <Image src={LinkedInIcon} alt="LinkedIn Icon" width={50} height={50} />
                    </Link>
                </div>
                <div>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium ">Your Email</label>
                            <input
                                name="email"
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
                                name="subject"
                                type="text"
                                id="subject"
                                placeholder="What's on your mind?"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#8CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor='message'
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className='bg-[#18191E] border border-[#33353F] placeholder-[#8CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                                placeholder='Your message goes here...'
                            />
                            <button
                                type='submit'
                                className="bg-secondary-600
                                hover:bg-secondary-800 text-white font medium py-2.5 px-5 rounded-lg w-full my-3"> Send Message</button>
                            {
                                emailSent && (
                                    <p className="text-primary-500 text-sm mt-2">Email sent successfully!</p>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default EmailSection
