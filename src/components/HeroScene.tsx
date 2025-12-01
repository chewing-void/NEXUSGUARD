import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, MeshDistortMaterial, Sparkles, PerspectiveCamera, Grid } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Pulse effect on hover
      const scale = hovered ? 2.2 : 2;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color={hovered ? "#FF8C00" : "#00FF00"} // Orange on hover, Green default
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive={hovered ? "#FF4500" : "#006400"}
          emissiveIntensity={0.5}
          wireframe={true} // Wireframe for that "Grid/Cyberpunk" look
        />
      </mesh>
    </Float>
  );
}

function Background() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={12} size={3} speed={0.4} opacity={0.5} color="#00FF00" />
      <Grid 
        position={[0, -4, 0]} 
        args={[20, 20]} 
        cellSize={0.5} 
        cellThickness={0.5} 
        cellColor="#00FF00" 
        sectionSize={2} 
        sectionThickness={1} 
        sectionColor="#FF8C00" 
        fadeDistance={15} 
        fadeStrength={1} 
      />
    </>
  );
}

function Title() {
  return (
    <group position={[0, -2.5, 0]}>
      {/* Title removed from 3D scene to be handled by HTML overlay for better accessibility and styling */}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <color attach="background" args={['#050505']} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00FF00" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#FF8C00" />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={1} />
      
      <Background />
      <AnimatedShape />
      <Title />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
