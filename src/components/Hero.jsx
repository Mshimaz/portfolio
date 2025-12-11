import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" id="about">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-block relative"
                >
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl mx-auto">
                        <img
                            src={PERSONAL_INFO.image}
                            alt={PERSONAL_INFO.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Hi, I'm <span style={{ color: '#38bdf8' }}>Shimaz</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto"
                >
                    {PERSONAL_INFO.role}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-slate-300 max-w-xl mx-auto mb-10 text-lg leading-relaxed"
                >
                    {PERSONAL_INFO.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a href="#projects" className="btn">View My Work</a>
                    <a href="#contact" className="btn bg-slate-800 text-white border border-slate-600 hover:bg-slate-700">Contact Me</a>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-slate-500 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
