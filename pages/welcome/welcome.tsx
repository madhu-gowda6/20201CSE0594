import { Sun, Zap, AlertTriangle, Sparkles, Info } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


const WelcomePage: React.FC = () => {
    return (
        <div id='Myid' className="flex flex-row h-screen justify-center items-center bg-black space-x-2">
            <div className=" p-8 rounded-3xl shadow-lg mb-8 h-5/6 m-5 flex flex-wrap justify-around text-center w-9/12">
                <div className=' w-2/5 text-slate-400'>
                    <Sun className=' text-orange-500 w-full mb-2' size={25} />
                    <h1 className=' text-3xl text-white mb-5'>Examples</h1>
                    <div>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>Can you help me? I'm having fever</p>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>I have stomach pain</p>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>Suggest some medicine for headache..!</p>
                    </div>  
                </div>
                <div className=' w-2/5 text-slate-400'>
                    <Zap className=' text-yellow-500 w-full mb-2' size={25} />
                    <h1 className=' text-3xl text-white mb-5'>Capabilities</h1>
                    <div>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>Diagnose acute diseases and available 24/7</p>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>Can predict possible diseases based on symptoms</p>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>Can prescribe medicine</p>
                    </div>
                </div>
                <div className=' w-2/5 text-slate-400'>
                    <AlertTriangle className=' text-red-500 w-full mb-2' size={25} />
                    <h1 className=' text-3xl text-white mb-5'>Limitations</h1>
                    <div>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>Cannot diagnose serious acute diseases</p>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>Cannot provide medicine which require experts</p>
                        <p className=' bg-gray-900 rounded-lg p-1 mb-2'>Still it is in development, results may inaccurate in some scenarios..!</p>
                    </div>
                </div>
            </div>
            <div className=" bg-black p-8 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-5xl font-bold mb-4 text-white">Welcome to <span className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Avinya</span></h2>
                <p className="text-gray-500 text-center">An open source AI ChatBot, which can diagnose acute diseases, predict diseases and provide medicines to user based on symptoms</p>
                <div className='flex flex-row mt-1'>
                    <Link className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 m-4 flex flex-row" href={'/'}><Sparkles size={18} className='mx-1' color='black'/><>Let's Start</></Link>
                    <Link className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 flex flex-row" href={'/about'}><Info size={18} className='mx-1' color='black'/><>About</></Link>
                </div>
                
            </div>
        </div>
    );
};

export default WelcomePage;
