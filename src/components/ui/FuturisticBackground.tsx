import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 5000 }) => {
  const points = useRef<THREE.Points>(null!);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;
    points.current.rotation.y = clock.getElapsedTime() * 0.05;
    points.current.rotation.x = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#D4A542"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
      />
    </points>
  );
};

const Grid = () => {
  return (
    <group>
      <gridHelper
        args={[30, 30, "#D4A542", "#D4A542"]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -2]}
      >
        <meshBasicMaterial attach="material" transparent opacity={0.03} />
      </gridHelper>
    </group>
  );
};

export const FuturisticBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#030303"]} />
        <ambientLight intensity={0.5} />
        <Particles />
        <Grid />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303] pointer-events-none" />
    </div>
  );
};
