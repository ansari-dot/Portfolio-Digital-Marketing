
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x4533D6, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x7B61FF,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create larger accent particles
    const accentGeometry = new THREE.BufferGeometry();
    const accentCount = 50;
    
    const accentPosArray = new Float32Array(accentCount * 3);
    for (let i = 0; i < accentCount * 3; i++) {
      accentPosArray[i] = (Math.random() - 0.5) * 10;
    }
    
    accentGeometry.setAttribute('position', new THREE.BufferAttribute(accentPosArray, 3));
    
    const accentMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xFF3366,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    const accentMesh = new THREE.Points(accentGeometry, accentMaterial);
    scene.add(accentMesh);
    
    // Handle mouse movement for interactivity
    let mouseX = 0;
    let mouseY = 0;
    
    function onMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate particles
      particlesMesh.rotation.x = elapsedTime * 0.05;
      particlesMesh.rotation.y = elapsedTime * 0.03;
      
      // Move particles based on mouse position
      particlesMesh.rotation.x += mouseY * 0.05;
      particlesMesh.rotation.y += mouseX * 0.05;
      
      accentMesh.rotation.x = elapsedTime * 0.07;
      accentMesh.rotation.y = elapsedTime * 0.04;
      
      // Render
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      scene.remove(particlesMesh);
      scene.remove(accentMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      accentGeometry.dispose();
      accentMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="canvas-container" 
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ThreeBackground;
