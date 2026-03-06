import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import "./CameraSuccess.css";
function CameraModel() {

  const model = useGLTF("/models/dslr_camera.glb");
  const cameraRef = useRef();

  useFrame((state) => {

    if (!cameraRef.current) return;

    // Camera moving forward (towards screen)
    if (cameraRef.current.position.z > -1) {
      cameraRef.current.position.z -= 0.05;
    }

    // slight floating
    cameraRef.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.1;

  });

  return (

    <motion.group
      ref={cameraRef}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 2.8] }}   // BIG zoom
      transition={{ delay: 1.5, duration: 0.8 }}
      position={[0, -1, 6]}
    >

      <primitive object={model.scene} />

    </motion.group>

  );

}

function CameraSuccess({ show }) {

  if (!show) return null;

  return (

    <div className="cinematic-overlay">

      <div className="camera-3d">

        <Canvas camera={{ position: [0, 0, 7] }}>

          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />

          <CameraModel />

          <Environment preset="studio" />

        </Canvas>

      </div>

      {/* FLASH */}
      <motion.div
        className="camera-flash"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 2.2, duration: 0.5 }}
      />

      {/* PHOTO CARD */}
      <motion.div
className="photo-card"
initial={{ y: 300, opacity: 0, scale: 0.6 }}
animate={{ y: 0, opacity: 1, scale: 1 }}
transition={{ delay: 2.6, duration: 0.8 }}
>

<div className="card-icon">📸</div>

<h2>Thank You!</h2>

<p>Your enquiry has been saved successfully.</p>

<span className="card-line"></span>

<p className="card-subtext">
Our team will contact you soon.
</p>

</motion.div>

    </div>

  );

}

export default CameraSuccess;