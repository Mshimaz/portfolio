import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data';

const Projects = () => {
    return (
        <section className="section bg-slate-800/30" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-card hover:border-cyan-500/50 group"
                        >
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <h4 className="text-slate-400 font-medium">{project.subtitle}</h4>
                            </div>
                            <p className="text-slate-300 mb-6 h-auto min-h-[60px]">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cyan-900/30 text-cyan-300 border border-cyan-900/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.links.playstore && (
                                    <a href={project.links.playstore} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors">
                                        <span>Google Play</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3h7v18h-18v-18h11v2zm2 2v14h3v-14h-3zm-11 14h9v-14h-9v14z" /></svg>
                                    </a>
                                )}
                                {project.links.appstore && (
                                    <a href={project.links.appstore} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors">
                                        <span>App Store</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 3h7v18h-18v-18h11v2zm2 2v14h3v-14h-3zm-11 14h9v-14h-9v14z" /></svg>
                                    </a>
                                )}
                                {/* Fallback for projects with no specific links but maybe GitHub in future */}
                                {Object.keys(project.links).length === 0 && (
                                    <span className="text-sm text-slate-500 italic">Internal / Offline Project</span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
