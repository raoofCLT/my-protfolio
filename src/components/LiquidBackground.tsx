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
        opacity={0.8}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#ff6b6b" />
      <pointLight position={[5, 5, 5]} intensity={1} color="#4ecdc4" />
      
      {/* Visible spheres in front of camera */}
      <AnimatedSphere position={[-1.5, 1, 2]} color="#ff6b6b" speed={0.3} />
      <AnimatedSphere position={[1.5, -1, 1]} color="#4ecdc4" speed={0.2} />
      <AnimatedSphere position={[0, 1.5, 3]} color="#45b7d1" speed={0.4} />
      <AnimatedSphere position={[-2, -0.5, 2.5]} color="#96ceb4" speed={0.25} />
      <AnimatedSphere position={[2, 0.5, 1.5]} color="#ffeaa7" speed={0.35} />
    </>
  );
}

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
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