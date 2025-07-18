
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function AnimatedTorus({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.7;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.9}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function AnimatedBox({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed;
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.7}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#ff6b6b" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#4ecdc4" />
      <pointLight position={[0, -5, 0]} intensity={0.6} color="#45b7d1" />
      
      {/* Spheres */}
      <AnimatedSphere position={[-3, 2, -5]} color="#ff6b6b" speed={0.3} />
      <AnimatedSphere position={[3, -2, -8]} color="#4ecdc4" speed={0.2} />
      <AnimatedSphere position={[0, 3, -6]} color="#45b7d1" speed={0.4} />
      <AnimatedSphere position={[-4, -1, -7]} color="#96ceb4" speed={0.25} />
      <AnimatedSphere position={[4, 1, -9]} color="#ffeaa7" speed={0.35} />
      
      {/* Torus objects */}
      <AnimatedTorus position={[-2, -3, -10]} color="#e17055" speed={0.15} />
      <AnimatedTorus position={[2, 2, -12]} color="#74b9ff" speed={0.2} />
      <AnimatedTorus position={[0, -2, -8]} color="#a29bfe" speed={0.18} />
      
      {/* Box objects */}
      <AnimatedBox position={[-5, 0, -15]} color="#fd79a8" speed={0.1} />
      <AnimatedBox position={[5, -1, -13]} color="#55a3ff" speed={0.12} />
      <AnimatedBox position={[0, 4, -11]} color="#00b894" speed={0.14} />
    </>
  );
}

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
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
