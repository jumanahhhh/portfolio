import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';


const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.35}/>
            <directionalLight position={[0,0,0.05]}/>
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" flatShading polygonOffest polygonOffsetFactor={-5} />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} map={decal} />
      </mesh>
    </Float>
  );
};



const BallCanvas=({icon})=>{
  return(
    <Canvas>
      <Suspense fallback={CanvasLoader}/>
      <OrbitControls enablezoom={false}></OrbitControls>
      <Ball icon={icon}/>
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas;


