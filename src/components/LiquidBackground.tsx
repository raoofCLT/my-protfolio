import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4ecdc4" />
      
      <AnimatedSphere position={[-4, 2, -5]} color="#ff6b6b" speed={0.3} />
      <AnimatedSphere position={[4, -2, -8]} color="#4ecdc4" speed={0.2} />
      <AnimatedSphere position={[0, 3, -6]} color="#45b7d1" speed={0.4} />
      <AnimatedSphere position={[-6, -1, -4]} color="#96ceb4" speed={0.25} />
      <AnimatedSphere position={[6, 1, -7]} color="#ffeaa7" speed={0.35} />
    </>
  );
}

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-3]">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default LiquidBackground;