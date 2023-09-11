import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

const Tachometer: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const [rotationSpeed, setRotationSpeed] = useState(0);

  useFrame(() => {
    if (meshRef.current) {
      const currentRotation = meshRef.current.rotation.z;
      const newRotation = currentRotation + rotationSpeed;
      meshRef.current.rotation.set(0, 0, newRotation);
    }
  });

  const handleWheel = (event: ThreeEvent<WheelEvent>) => {
    // <-- Adjust the event type here
    const delta = event.deltaY;
    if (delta > 0) {
      setRotationSpeed((prev) => Math.min(prev + 0.01, 0.1));
    } else {
      setRotationSpeed((prev) => Math.max(prev - 0.01, 0));
    }
  };

  return (
    <Box ref={meshRef} onWheel={handleWheel}>
      <meshStandardMaterial color="blue" />
    </Box>
  );
};

const IntroSection: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Tachometer />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default IntroSection;
