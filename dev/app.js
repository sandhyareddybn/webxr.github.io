import * as THREE from '../libs/three/three.module.js';

class App
{
    constructor()
    {
        const container = document.createElement('div');
        document.body.appendChild(container);

        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0, 100);
        this.camera.position.set(0,0,4);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xaabbcc);

        this.renderer = new THREE.WebGL1Renderer({antialias:true});
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setAnimationLoop(this.render.bind(this));
        container.appendChild(this.renderer.domElement);
    }

    render()
    {
        this.renderer.render(this.scene, this.camera);
    }
}

export {App}