import * as THREE from 'three';

export class AgentNetwork3D {
  constructor(containerId, onNodeClick) {
    this.container = document.getElementById(containerId);
    this.onNodeClick = onNodeClick;

    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.nodes = [];
    this.links = [];
    this.particles = [];
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredNode = null;
    this.selectedNodeId = null;

    // Node data
    this.nodeData = [
      { id: 'human', name: 'Human Supervisor', role: '지휘 및 최종 의사결정', color: 0xffd700, size: 0.8, pos: new THREE.Vector3(0, 2.5, 0) },
      { id: 'req', name: 'Requirements Agent', role: '요구사항 분석 및 명세 구체화', color: 0x06b6d4, size: 0.5, pos: new THREE.Vector3(-2.2, 0.8, 1.2) },
      { id: 'risk', name: 'Risk Analyst Agent', role: '품질 위험성 평가 및 우선순위 도출', color: 0xa855f7, size: 0.5, pos: new THREE.Vector3(-1.0, 0.8, -1.8) },
      { id: 'tc', name: 'TC Generator Agent', role: '테스트 시나리오 및 TC 자동 설계', color: 0x3b82f6, size: 0.5, pos: new THREE.Vector3(1.2, 0.8, -1.8) },
      { id: 'defect', name: 'Defect Analyst Agent', role: '테스트 실행 및 오동작 분석', color: 0x10b981, size: 0.5, pos: new THREE.Vector3(2.2, 0.8, 1.2) },
      { id: 'report', name: 'Reporter Agent', role: '결함 보고 및 테스트 결과 리포팅', color: 0xef4444, size: 0.5, pos: new THREE.Vector3(0, -1.0, 0) }
    ];

    // Connect flow: from -> to
    this.linkData = [
      { from: 'human', to: 'req' },
      { from: 'req', to: 'risk' },
      { from: 'risk', to: 'tc' },
      { from: 'tc', to: 'defect' },
      { from: 'defect', to: 'report' },
      { from: 'report', to: 'human' },
      // Sub loops
      { from: 'req', to: 'tc' },
      { from: 'defect', to: 'tc' }
    ];

    this.init();
    this.animate();
  }

  init() {
    // 1. Create Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x060512, 0.08);

    // 2. Camera Setup
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 400;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 1.5, 8);

    // 3. Renderer Setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 2, 20);
    pointLight1.position.set(5, 5, 5);
    this.scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 1.5, 20);
    pointLight2.position.set(-5, -5, -5);
    this.scene.add(pointLight2);

    // 5. Draw Network
    this.buildNetwork();

    // 6. Event Listeners
    window.addEventListener('resize', this.onResize.bind(this));
    this.container.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.container.addEventListener('click', this.onMouseClick.bind(this));
  }

  buildNetwork() {
    // A. Draw Nodes
    this.nodeData.forEach(data => {
      // Base Sphere Geometry
      const geometry = new THREE.SphereGeometry(data.size, 32, 32);
      
      // Glowing wireframe + solid material mix
      const material = new THREE.MeshPhongMaterial({
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.4,
        shininess: 100,
        specular: 0xffffff
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(data.pos);
      mesh.userData = { id: data.id, name: data.name, role: data.role, color: data.color, baseSize: data.size };
      
      // Wireframe overlay for premium digital vibe
      const wireframeGeo = new THREE.SphereGeometry(data.size + 0.05, 10, 10);
      const wireframeMat = new THREE.MeshBasicMaterial({
        color: data.color,
        wireframe: true,
        transparent: true,
        opacity: 0.2
      });
      const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
      mesh.add(wireframe);

      this.scene.add(mesh);
      this.nodes.push(mesh);
    });

    // B. Draw Links
    this.linkData.forEach(link => {
      const fromNode = this.nodes.find(n => n.userData.id === link.from);
      const toNode = this.nodes.find(n => n.userData.id === link.to);

      if (fromNode && toNode) {
        const points = [fromNode.position, toNode.position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.15
        });
        const line = new THREE.Line(geometry, material);
        this.scene.add(line);
        this.links.push({ mesh: line, from: fromNode.position, to: toNode.position });
      }
    });

    // C. Initialize Particle Pulses (Moving data packets)
    for (let i = 0; i < this.linkData.length * 2; i++) {
      const link = this.linkData[i % this.linkData.length];
      const fromNode = this.nodes.find(n => n.userData.id === link.from);
      const toNode = this.nodes.find(n => n.userData.id === link.to);

      if (fromNode && toNode) {
        const particleGeo = new THREE.SphereGeometry(0.06, 8, 8);
        const particleMat = new THREE.MeshBasicMaterial({
          color: fromNode.userData.color,
          transparent: true,
          opacity: 0.8
        });
        const mesh = new THREE.Mesh(particleGeo, particleMat);
        this.scene.add(mesh);

        this.particles.push({
          mesh: mesh,
          from: fromNode.position,
          to: toNode.position,
          progress: Math.random() // staggered start positions
        });
      }
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    // Slow rotation of entire network to show 3D depth
    const time = Date.now() * 0.0005;
    
    // Slight auto-orbit
    this.nodes.forEach(node => {
      // Subtle float effect
      const index = this.nodeData.findIndex(n => n.id === node.userData.id);
      node.position.y = this.nodeData[index].pos.y + Math.sin(time * 2 + index) * 0.08;
      
      // Wireframe rotation
      if (node.children[0]) {
        node.children[0].rotation.y += 0.005;
        node.children[0].rotation.x += 0.002;
      }
    });

    // Re-draw links to follow floating nodes
    this.links.forEach(link => {
      const positions = link.mesh.geometry.attributes.position.array;
      positions[0] = link.from.x;
      positions[1] = link.from.y;
      positions[2] = link.from.z;
      positions[3] = link.to.x;
      positions[4] = link.to.y;
      positions[5] = link.to.z;
      link.mesh.geometry.attributes.position.needsUpdate = true;
    });

    // Move data pulse particles
    this.particles.forEach(p => {
      p.progress += 0.008;
      if (p.progress >= 1.0) {
        p.progress = 0;
      }
      p.mesh.position.lerpVectors(p.from, p.to, p.progress);
    });

    // Scene slow auto-pan based on mouse position
    this.camera.position.x += (this.mouse.x * 2 - this.camera.position.x) * 0.05;
    this.camera.position.y += (this.mouse.y * 1.5 + 1.5 - this.camera.position.y) * 0.05;
    this.camera.lookAt(0, 0.5, 0);

    this.renderer.render(this.scene, this.camera);
  }

  onMouseMove(event) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Raycast for hover
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.nodes);

    if (intersects.length > 0) {
      const obj = intersects[0].object;
      if (this.hoveredNode !== obj) {
        // Reset previous hovered node
        if (this.hoveredNode) {
          this.hoveredNode.scale.set(1, 1, 1);
          this.hoveredNode.material.emissiveIntensity = 0.4;
        }

        // Scale up hovered
        this.hoveredNode = obj;
        this.hoveredNode.scale.set(1.2, 1.2, 1.2);
        this.hoveredNode.material.emissiveIntensity = 0.8;
        this.container.style.cursor = 'pointer';
      }
    } else {
      if (this.hoveredNode) {
        this.hoveredNode.scale.set(1, 1, 1);
        this.hoveredNode.material.emissiveIntensity = 0.4;
        this.hoveredNode = null;
        this.container.style.cursor = 'default';
      }
    }
  }

  onMouseClick(event) {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.nodes);

    if (intersects.length > 0) {
      const clicked = intersects[0].object;
      this.selectedNodeId = clicked.userData.id;
      
      // Node glow effect on click
      this.nodes.forEach(n => {
        n.material.emissiveIntensity = n.userData.id === this.selectedNodeId ? 1.0 : 0.2;
      });

      if (this.onNodeClick) {
        this.onNodeClick(clicked.userData);
      }
    }
  }

  onResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 400;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
