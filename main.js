// Initialisation de Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

// Ajout d'un effet de grille futuriste
const gridHelper = new THREE.GridHelper(50, 50, 0x00ff00, 0x00ff00);
scene.add(gridHelper);

// Création d'un réseau de particules (points lumineux)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 200;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particlesMaterial = new THREE.PointsMaterial({ color: 0x00ffcc, size: 0.2 });
const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particleMesh);

// Création des panneaux 3D pour les projets
const projects = [
    { name: "Projet 1", color: 0xff0000 },
    { name: "Projet 2", color: 0x0000ff },
];

projects.forEach((project, i) => {
    const geometry = new THREE.BoxGeometry(3, 2, 0.2);
    const material = new THREE.MeshBasicMaterial({ color: project.color });
    const box = new THREE.Mesh(geometry, material);
    box.position.set(i * 6 - 3, 2, -10);
    scene.add(box);
});

// Animation des particules
function animate() {
    requestAnimationFrame(animate);
    particleMesh.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

// Ajustement de la caméra
camera.position.z = 10;
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
