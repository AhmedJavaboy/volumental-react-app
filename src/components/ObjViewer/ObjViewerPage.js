import React from 'react';
import PropTypes from 'prop-types';

require('../../../node_modules/three/build/three');
require('../../../node_modules/three/examples/js/loaders/OBJLoader.js');
require('../../../node_modules/three/examples/js/controls/TrackballControls.js');
let Detector = require('../../../node_modules/three/examples/js/Detector.js');
let Stats = require('../../../node_modules/three/examples/js/libs/stats.min.js');
import '../../styles/viewerStyle.css';

// Since this component is simple and static, there's no parent container for it.
const ObjViewerPage = ({ objcolor }) => {

    if (!Detector.webgl) Detector.addGetWebGLMessage();
    let container=<div></div>;
    let stats;

    let camera, controls, scene, renderer;

    let cross;
    let manager;
    let onProgress;
    let onError;
    let mouseX = 0, mouseY = 0;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

        init();
    animate();
    

    let theObj;
    function init() {

        container = document.createElement('div');
        document.body.appendChild(container);
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
        camera.position.z = 2;



        controls = new THREE.TrackballControls(camera);
        controls.rotateSpeed = 5.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;
        controls.keys = [65, 83, 68];
        controls.addEventListener('change', render);


        // scene

        scene = new THREE.Scene();

        // scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

        let ambient = new THREE.AmbientLight(0x101030);
        scene.add(ambient);

        let directionalLight = new THREE.DirectionalLight(0xffeedd);
        directionalLight.position.set(0, 0, 1);
        scene.add(directionalLight);

        // texture

        manager = new THREE.LoadingManager();
        manager.onProgress = function (item, loaded, total) {

            console.log(item, loaded, total);

        };

        let texture = new THREE.Texture();

        onProgress = function (xhr) {
            if (xhr.lengthComputable) {
                let percentComplete = xhr.loaded / xhr.total * 100;
                console.log(Math.round(percentComplete, 2) + '% downloaded');
            }
        };

        onError = function (xhr) {
        };


        let loader = new THREE.ImageLoader(manager);
        loader.load('../../textures/UV_Grid_Sm.jpg', function (image) {

            texture.image = image;
            texture.needsUpdate = true;

        });

        // model

        loader = new THREE.OBJLoader(manager);
        loader.load('../../models/left.obj', function (object) {

            object.traverse(function (child) {
                theObj = child;
                if (child instanceof THREE.Mesh) {

                    //child.material.ambient.setHex(0xFF0000);
                    child.material.color.setHex(objcolor);
                    //child.material.map = texture;

                }

            });

            object.position.y = 0;
            scene.add(object);

        }, onProgress, onError);

        //
        /*
                renderer = new THREE.WebGLRenderer();
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(renderer.domElement);
        */

        renderer = new THREE.WebGLRenderer();
        // renderer.setClearColor(scene.fog.color);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // container = document.getElementById('container');
        container.appendChild(renderer.domElement);
        //document.addEventListener('mousemove', onDocumentMouseMove, false);

        //

        stats = new Stats();
        container.appendChild(stats.dom);

        window.addEventListener('resize', onWindowResize, false);

        render();

    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        controls.handleResize();
        render();
    }

    /*
        function onDocumentMouseMove(event) {
    
            mouseX = (event.clientX - windowHalfX) / 100;
            mouseY = (event.clientY - windowHalfY) / 100;
    
            render();
        }
    */
    //
    const changeColor = (event) => {
        event.preventDefault();

        if (objcolor != 0x00FFFF) {
            console.log("Color should change    ");

            let loader = new THREE.OBJLoader(manager);
            loader.load('../../models/left.obj', function (object) {

                object.traverse(function (child) {
                    theObj = child;
                    if (child instanceof THREE.Mesh) {

                        //child.material.ambient.setHex(0xFF0000);
                        child.material.color.setHex(0xFF0000);
                        //child.material.map = texture;

                    }

                });

                object.position.y = 0;
                scene.add(object);

            }, onProgress, onError);

        }
    }
    function animate() {
        requestAnimationFrame(animate);
        controls.update();

        render();
    }
    function render() {
        renderer.render(scene, camera);
        stats.update();
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={changeColor}>change me</button>
            
        </div>
    );

};

ObjViewerPage.propTypes = {
    objcolor: PropTypes.number.isRequired,
}

export default ObjViewerPage;
