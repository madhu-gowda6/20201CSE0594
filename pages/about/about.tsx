import React from 'react';
import { Sun, Zap, AlertTriangle, Sparkles, Info } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import myimage from '../../public/images/CEOmadhu.jpeg';
import myimage1 from '../../public/images/Sachin.jpg';
import myimage2 from '../../public/images/Manja.jpg';
import myimage3 from '../../public/images/Puneeth.jpg';
import myimage4 from '../../public/images/Karthik.jpg';


const About : React.FC = () => {
    
    return (
        <div className="flex flex-col h-screen items-center  space-x-2 m-6 mt-8">
            <div className="  p-8 rounded-lg shadow-lg flex flex-col items-center text-white">
                <h2 className="text-7xl font-bold mb-8 text-white"><span className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>About</span> Us</h2>
                <div className=' justify-startm-5 p-5 rounded-3xl mx-6 backdrop-blur-3xl'>
                    <div className=''></div>
                    <h1 className=' text-4xl mb-7 font-extrabold backdrop-blur-3xl'>Our vision</h1>
                    <p className=' text-lg text-slate-400 backdrop-blur-3xl'>Welcome to <span className=' font-bold text-orange-400'>Avinya</span>, where we are revolutionizing healthcare delivery for smaller towns and rural areas. Our mission is to bridge the gap in access to quality healthcare by harnessing the power of advanced artificial intelligence.<br/><br/>In regions where the scarcity of doctors and healthcare facilities poses a significant challenge, we believe in the potential of AI-driven technologies to transform the landscape. Traditional solutions like telemedicine have encountered hurdles in keeping up with the escalating demand for healthcare services. However, we see a new horizon unfolding with the integration of AI and digital assistants such as Google and Alexa.<br/><br/>At Avinya, we envision a future where everyone, regardless of their geographical location, can have access to a virtual "doctor." Imagine a seamless experience where common ailments like the flu or cold can be diagnosed through a simple dialogue, guided by intelligent algorithms and a vast assimilation of medical knowledge. This isn't just a vision; it's the reality we are working towards.<br/><br/>Our AI-powered system goes beyond the conventional approach. It's designed to analyze symptoms, engage in meaningful dialogues with patients, and provide reliable health assessments. By leveraging the capabilities of artificial intelligence, we aim to make healthcare not only accessible but also efficient and trustworthy for individuals in smaller towns and rural areas.<br/><br/>Join us on this transformative journey as we redefine healthcare delivery. With a commitment to innovation, accessibility, and reliability, Avinya is at the forefront of creating a healthcare solution that adapts to the unique challenges of underserved communities.<br/><br/>Explore our Github page to learn more about the potential and challenges inherent in utilizing artificial intelligence for healthcare. Discover how we are paving the way for a future where everyone can experience the benefits of advanced healthcare solutions, irrespective of their location. At Avinya.ai, we're not just reimagining healthcare; we're making it a reality.<br/><br/><br/>Regards,<br/>Team Avinya</p>
                </div>
            </div>
            <div>
            <div className=' text-white rounded-3xl backdrop-blur-3xl mt-6'>
                    <h1 className=' text-5xl font-bold mb-7 flex justify-center'><span className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2'>We are</span> Team</h1>
                    <div className='flex flex-wrap justify-around text-center'>
                        <div className=' m-5 p-5 rounded-3xl w-2/12'>
                            <Image src={myimage} width={200} height={200} className='rounded-full' alt='Image' />
                            <h1 className=' text-lg text-white mt-5 bg-black rounded-3xl'>Madhu (Team lead)</h1>  
                        </div>
                        <div className=' m-5 p-5 rounded-3xl w-2/12'>
                        <Image src={myimage1} width={200} height={200} className='rounded-full' alt='Image' />
                            <h1 className=' text-lg text-white mt-5 bg-black rounded-3xl'>Sachin</h1> 
                        </div>
                        <div className=' m-5 p-5 rounded-3xl w-2/12'>
                        <Image src={myimage2} width={200} height={200} className='rounded-full' alt='Image' />
                            <h1 className=' text-lg text-white mt-5 bg-black rounded-3xl'>Manjunath</h1>  
                        </div>
                        <div className=' m-5 p-5 rounded-3xl w-2/12'>
                        <Image src={myimage4} width={200} height={200} className='rounded-full' alt='Image' />
                            <h1 className=' text-lg text-white mt-5 bg-black rounded-3xl'>Karthik</h1> 
                        </div>
                        <div className=' m-5 p-5 rounded-3xl w-2/12'>
                        <Image src={myimage3} width={200} height={200} className='rounded-full' alt='Image' />
                            <h1 className=' text-lg text-white mt-5 bg-black rounded-3xl'>Puneeth</h1> 
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=' text-white rounded-3xl backdrop-blur-3xl mt-6 m-8 p-8'>
                    <h1 className=' text-3xl font-bold mb-7 flex justify-center'><span className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-3'>Explore </span> More</h1>
                    <div className='flex flex-wrap justify-around text-center'>
                    <Link href={'https://github.com/madhu-gowda6/20201CSE0594'} target='_blank'>
                    <button type="button" className="text-white bg-transparent hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                        </svg>
                        <h2 className='mx-2'>Connect us with Github</h2>
                    </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default About;
