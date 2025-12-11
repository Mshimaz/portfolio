import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data';

const Skills = () => {
    return (
        <section className="section bg-slate-800/50" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-slate-700 hover:bg-slate-600 border border-slate-600 px-6 py-3 rounded-full text-slate-200 font-medium transition-colors cursor-default shadow-sm"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
