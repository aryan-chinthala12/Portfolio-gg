import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = ({ isHovering }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // High-precision spring physics for a tactical feel
    const springConfig = { mass: 0.6, stiffness: 450, damping: 25 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        x.set(mousePos.x);
        y.set(mousePos.y);
    }, [mousePos, x, y]);

    // Overall container size
    const size = isHovering ? 50 : 60;

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: size,
                height: size,
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference',
            }}
        >
            <svg
                viewBox="0 0 100 100"
                style={{
                    width: '100%',
                    height: '100%',
                    fill: 'none',
                    stroke: 'white',
                    strokeWidth: 2,
                }}
            >
                {/* 1. Tactical Outer Brackets */}
                <motion.g
                    animate={{ scale: isHovering ? 0.9 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                    {/* Top Left Bracket */}
                    <path d="M 15 25 L 15 15 L 25 15" strokeLinecap="square" />
                    {/* Top Right Bracket */}
                    <path d="M 75 15 L 85 15 L 85 25" strokeLinecap="square" />
                    {/* Bottom Left Bracket */}
                    <path d="M 15 75 L 15 85 L 25 85" strokeLinecap="square" />
                    {/* Bottom Right Bracket */}
                    <path d="M 75 85 L 85 85 L 85 75" strokeLinecap="square" />
                </motion.g>

                {/* 2. Central Targeting Assembly */}
                <motion.g
                    animate={{ rotate: isHovering ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ originX: "50px", originY: "50px" }}
                >
                    {/* Radiating Dashes */}
                    <line x1="50" y1="32" x2="50" y2="40" strokeWidth="1.5" /> {/* Top */}
                    <line x1="50" y1="60" x2="50" y2="68" strokeWidth="1.5" /> {/* Bottom */}
                    <line x1="32" y1="50" x2="40" y2="50" strokeWidth="1.5" /> {/* Left */}
                    <line x1="60" y1="50" x2="68" y2="50" strokeWidth="1.5" /> {/* Right */}

                    {/* Central Ring */}
                    <circle cx="50" cy="50" r="6" strokeWidth="2" />
                </motion.g>

                {/* 3. Constant Center Dot */}
                <circle cx="50" cy="50" r="1.5" fill="white" stroke="none" />
            </svg>
        </motion.div>
    );
};

export default CustomCursor;
