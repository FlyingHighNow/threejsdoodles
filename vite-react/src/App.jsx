import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, Sparkles} from '@react-three/drei';
import {useRef} from "react";
import { CylinderGeometry } from 'three';

const MagicOrb = () => {

  const meshRef = useRef();


  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
        <sphereGeometry args = {[1,100,100]}/>
        <meshLambertMaterial color ="black"/>

        <Sparkles count={100} 
        scale ={3} 
        size = {6} 
        speed = {0.002} 
        noise={0.2} 
        color = "purple"/>
    </mesh>

    
    
  )
}

const App = () => {
  return (
    <Canvas style = {
      { width: '100vw', 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'}
      }>
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight position = {[1, 1, 1]} intensity={10} color={0x9CDBA6}/>

      <color attach = "background" args={['#F0F0F0']} />

      <MagicOrb/>


    </Canvas>
  )
}

export default App;