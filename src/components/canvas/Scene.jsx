import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Dodecahedron, MeshDistortMaterial, Float, Points, PointMaterial } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';

const HeroMesh = () => {
    const meshRef = useRef();
    const mouse = useMousePosition();

    useFrame((state) => {
        const { x, y } = mouse;

        // Parallax tilt effect
        const targetRotationX = y * 0.4;
        const targetRotationY = x * 0.4;

        meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;

        // Persistent rotation
        meshRef.current.rotation.z += 0.001;
    });

    return (
        <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
            <Dodecahedron
                ref={meshRef}
                args={[1.5, 0]}
                position={[4, -1, 0]} // Positioned to bleed off the right
                scale={4.5} // Hero scale
            >
                <MeshDistortMaterial
                    color="#00d2ff"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    wireframe
                    emissive="#0066ff"
                    emissiveIntensity={3}
                    transparent
                    opacity={0.4}
                />
            </Dodecahedron>
        </Float>
    );
};

const NeuralParticles = ({ count = 600 }) => {
    const pointsRef = useRef();
    const mouse = useMousePosition();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const originalPositions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10;
            positions.set([x, y, z], i * 3);
            originalPositions.set([x, y, z], i * 3);
        }
        return { positions, originalPositions };
    }, [count]);

    useFrame((state) => {
        const { positions, originalPositions } = particles;
        const { x, y } = mouse;

        const magnetX = x * 8;
        const magnetY = y * 8;

        for (let i = 0; i < count; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;

            const dx = magnetX - positions[ix];
            const dy = magnetY - positions[iy];
            const dist = Math.sqrt(dx * dx + dy * dy);

            const strength = Math.max(0, (6 - dist) / 6) * 0.06;

            positions[ix] += (originalPositions[ix] - positions[ix]) * 0.02 + dx * strength;
            positions[iy] += (originalPositions[iy] - positions[iy]) * 0.02 + dy * strength;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <Points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <PointMaterial
                transparent
                color="#00d2ff"
                size={0.035}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

const Scene = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'radial-gradient(circle at center, #050505 0%, #000 100%)',
            pointerEvents: 'none'
        }}>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[15, 15, 15]} intensity={1.5} color="#00d2ff" />

                <HeroMesh />
                <NeuralParticles />

                <EffectComposer>
                    <Bloom
                        intensity={2.0}
                        luminanceThreshold={0.15}
                        luminanceSmoothing={1}
                        mipmapBlur
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default Scene;
