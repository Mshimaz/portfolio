import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';

const Experience = () => {
    return (
        <section className="section" id="experience">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-8 top-0 h-full w-0.5 bg-slate-700"></div>

                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-20 py-8 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-[27px] top-10 w-3 h-3 bg-cyan-400 rounded-full border-4 border-slate-900 group-hover:scale-150 transition-transform"></div>

                            <div className="glass-card">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <h4 className="text-lg text-cyan-400 font-medium">{exp.company}</h4>
                                    </div>
                                    <span className="text-sm text-slate-400 mt-2 md:mt-0 px-3 py-1 bg-slate-800 rounded-full border border-slate-700 inline-block">
                                        {exp.duration}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-slate-300 text-sm md:text-base flex items-start">
                                            <span className="text-cyan-500 mr-2 mt-1.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
