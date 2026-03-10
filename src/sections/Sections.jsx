import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Rocket, Code2, Cpu, Palette, ExternalLink, Globe, Database } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const Home = () => (
    <section id="home" className="section-container">
        <motion.div {...fadeInUp}>
            <span className="badge">CSE (AIML) | Open Source Developer</span>
            <h1 className="heading-font" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 800, lineHeight: 1 }}>
                ARYAN <br /> <span className="gradient-text">CHINTHALA</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem' }}>he/him</p>
            <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginTop: '2rem', color: 'var(--text-muted)' }}>
                CSE (AIML) Student exploring AI, Machine Learning & Data-Driven Systems.
                Maintainer at GCET Open Source Foundation, fostering collaborative development and open-source innovation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                <a href="#projects" className="btn-primary">Explore My Work</a>
                <a href="#contact" className="btn-outline">Get In Touch</a>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem', color: 'var(--text-muted)' }}>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/aryan-chinthala-2007kai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="mailto:aryankai1221@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <MapPin size={18} /> Hyderabad, Telangana, India
                </div>
            </div>
        </motion.div>
    </section>
);

export const About = () => (
    <section id="about" className="section-container">
        <motion.div {...fadeInUp}>
            <h2 className="heading-font" style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="glass-card">
                    <p style={{ fontSize: '1.1rem' }}>
                        I'm a CSE (AIML) student at Geethanjali College of Engineering and Technology, passionate about learning AI, Machine Learning, and Data-Driven Systems. Actively contributing to the open-source community
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Focus Areas:</h4>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                            <li><strong>Machine Learning Fundamentals</strong> - Learning core concepts and algorithms</li>
                            <li><strong>Data-Driven Systems</strong> - Building applications with data at their core</li>
                            <li><strong>Open Source Leadership</strong> - Maintaining GCET Open Source Foundation</li>
                        </ul>
                    </div>
                </div>
                <div className="glass-card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Education</h3>
                    <div style={{ borderLeft: '2px solid var(--accent-primary)', paddingLeft: '1.5rem' }}>
                        <h4 style={{ fontSize: '1.2rem' }}>Geethanjali College of Engineering and Technology</h4>
                        <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Bachelor's Degree in Computer Science</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Aug 2025 - Aug 2029</p>
                        <p style={{ marginTop: '0.5rem' }}>Specialization: Artificial Intelligence & Machine Learning</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2.5rem', textAlign: 'center' }}>
                        <div><h4 className="gradient-text" style={{ fontSize: '2rem' }}>1</h4><p style={{ fontSize: '0.8rem' }}>OS Maintainer</p></div>
                        <div><h4 className="gradient-text" style={{ fontSize: '2rem' }}>10+</h4><p style={{ fontSize: '0.8rem' }}>Tech Skills</p></div>
                        <div><h4 className="gradient-text" style={{ fontSize: '2rem' }}>3</h4><p style={{ fontSize: '0.8rem' }}>Hackathons</p></div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section >
);

const ProjectCard = ({ title, description, tech, github, demo, icon: Icon }) => (
    <motion.div variants={projectVariants} style={{ height: '100%' }}>
        <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1500}
            gyroscope={true}
            className="parallax-tilt"
            style={{ height: '100%' }}
        >
            <div className="glass-card" style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '2.5rem'
            }}>
                <div style={{ flex: 1 }}>
                    <div style={{
                        background: 'rgba(0, 210, 255, 0.1)',
                        width: 'fit-content',
                        padding: '1rem',
                        borderRadius: '12px',
                        marginBottom: '1.5rem',
                        color: 'var(--accent-primary)'
                    }}>
                        <Icon size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', fontWeight: 800 }}>{title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                        {description}
                    </p>
                </div>

                <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
                        {tech.map(t => (
                            <span key={t} className="neon-badge">{t}</span>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                        <a href={github} target="_blank" rel="noreferrer" title="Github Repository" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            <Github size={20} />
                        </a>
                        {demo && (
                            <a href={demo} target="_blank" rel="noreferrer" title="Live Demo" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Tilt>
    </motion.div>
);

export const Projects = () => (
    <section id="projects" className="section-container">
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.h2 variants={fadeInUp} className="heading-font" style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>
                Technical <span className="gradient-text">Deployments</span>
            </motion.h2>
            <motion.p variants={fadeInUp} style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.1rem' }}>
                Engineered explorations in AIML, Fintech, and Low-Level Systems.
            </motion.p>

            <motion.div
                variants={staggerContainer}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'stretch'
                }}
            >
                <ProjectCard
                    title="STE (Smart Tax Estimator)"
                    description="High-precision algorithmic engine for automated tax calculations. Features complex logic-driven income processing and validated estimation models for robust financial forecasting. Baka-Proofed Architecture."
                    tech={["React", "Node.js", "Financial Logic"]}
                    github="https://github.com"
                    demo="https://example.com"
                    icon={Rocket}
                />
                <ProjectCard
                    title="Crypto Tracker"
                    description="Real-time data visualization platform for market monitoring. Leverages persistent REST API integration and dynamic state management to synchronize with high-frequency market volatility."
                    tech={["REST API", "Framer Motion", "Real-time Data"]}
                    github="https://github.com"
                    demo="https://example.com"
                    icon={Globe}
                />
                <ProjectCard
                    title="OI-Bank"
                    description="Specialized banking utility engineered in C. Implements robust binary file handling for secure customer data persistence, struct-based memory management, and optimized low-level validation logic."
                    tech={["C", "Binary File Handling", "System Design"]}
                    github="https://github.com"
                    icon={Database}
                />
            </motion.div>
        </motion.div>
    </section>
);

export const Skills = () => (
    <section id="skills" className="section-container">
        <motion.div {...fadeInUp}>
            <h2 className="heading-font" style={{ fontSize: '3rem' }}>Technical Arsenal</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Tools and technologies I work with</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <Code2 className="text-accent" />
                        <h3>Languages</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                        {['Python', 'Go', 'C', 'HTML', 'CSS', 'SQL', 'React'].map(s => <span key={s} className="badge">{s}</span>)}
                    </div>
                </div>
                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <Cpu className="text-accent" />
                        <h3>Dev & Tools</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                        {['Git', 'GitHub', 'Open Source', 'Microsoft Tools', 'Docker'].map(s => <span key={s} className="badge">{s}</span>)}
                    </div>
                </div>
                <div className="glass-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <Palette className="text-accent" />
                        <h3>Design</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                        {['Canva', 'PowerPoint', 'Excel', 'AutoCAD'].map(s => <span key={s} className="badge">{s}</span>)}
                    </div>
                </div>
            </div>

            <div className="glass-card" style={{ marginTop: '3rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>🎯 Learning & Growth</h3>
                <p>Continuously expanding my knowledge as a student, actively contributing to the open-source community, and building a strong foundation in computer science. Learns by building real-world projects.</p>
                <p style={{ marginTop: '1rem', fontStyle: 'italic', opacity: 0.8 }}>Passionate about collaborative development and learning from the open-source community.</p>
            </div>
        </motion.div>
    </section>
);

export const Contact = () => (
    <section id="contact" className="section-container">
        <motion.div {...fadeInUp}>
            <h2 className="heading-font" style={{ fontSize: '3rem' }}>Let's Connect</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Interested in collaborating or discussing tech? Reach out!</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <a href="https://www.linkedin.com/in/aryan-chinthala-2007kai" className="glass-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Linkedin size={32} style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }} />
                    <h3>LinkedIn</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Connect professionally</p>
                </a>
                <a href="https://github.com" className="glass-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Github size={32} style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }} />
                    <h3>GitHub</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Check my repositories</p>
                </a>
                <a href="mailto:aryankai1221@gmail.com" className="glass-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Mail size={32} style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }} />
                    <h3>Email</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Drop me a message</p>
                </a>
            </div>
        </motion.div>
        <footer style={{ marginTop: '8rem', textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)', paddingTop: '4rem' }}>
            <p>© 2025 Aryan Chinthala. All rights reserved.</p>
            <p style={{ marginTop: '1rem', color: 'white' }}>Building the future with passion & code ✨</p>
        </footer>
    </section>
);
