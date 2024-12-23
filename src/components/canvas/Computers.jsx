import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./stylized_mushrooms/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black"  position={[0, 50, 0]}/>
      <pointLight intensity={3} position={[0, 0, 0]} />
      <spotLight position={[0,20,0]} angle={0.12} penumbra={1} intensity={6} castShadow shadow-mapSize={[1024,1024]}/>
      
      <primitive 
      object={computer.scene}
      scale={isMobile ? 1.75 : 2}
      position={isMobile ? [0, -3.25, -1.5] : [0, -3.25, -1.5]}
      rotation={[-0.01,0.01,-0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas=()=>{
  const [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])
  return(
    <Canvas frameLoop="demand" shadows camera={{position:[20,3,5], fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={0}/>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas;