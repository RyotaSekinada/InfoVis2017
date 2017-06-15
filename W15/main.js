(function($){
	var width = 620;  
	var height = 480; 
	var scene,camera,renderer,controls,geoObj,mesh;
	 
	function main(){
		if(!Detector.webgl)Detector.addGetWebGLMessage();
		var gui = new dat.GUI();
		scene = new THREE.Scene();
 
		camera = new THREE.PerspectiveCamera( 60, width/height, 0.001, 2000);
		scene.add(camera);
		camera.position.set( 50, 30, 50);
 
		renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setSize(width,height);
		renderer.setPixelRatio( window.devicePixelRatio);
		renderer.shadowMap.enabled = true;
		document.body.appendChild( renderer.domElement );
 
		var material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
		mesh = new THREE.Mesh();
		mesh.material = material;
		mesh.position.set(0,0,0);
		mesh.castShadow = true;
		scene.add(mesh);
		
		geoObj = new geoCtrl();
		var folder = gui.addFolder('BoxGeometry')
		folder.add( geoObj, 'x', 5, 100 ).onChange( setGeoVal);
		folder.add( geoObj, 'y', 5, 100 ).onChange( setGeoVal);
		folder.add( geoObj, 'z', 5, 100 ).onChange( setGeoVal);
		setGeoVal();
		
		var ambientLight = new THREE.AmbientLight( 0xDDDDCC, 0.8);

		var spotLight = new THREE.SpotLight(0xFFFFFF,1.2,0);
		spotLight.castShadow = true;
		spotLight.position.set( 10, 30, 30);
		scene.add(ambientLight,spotLight); 

		controls = new THREE.OrbitControls(camera);
		controls.maxDistance = 100;
		controls.maxPolarAngle = Math.PI * 0.5;
		
		resizeSet();
		setTimeout(resize, 1);
	
		rendering();
	}
 
	var geoCtrl = function(){
		this.x = 10;
		this.y = 10;
		this.z = 10;
	};
	
	function setGeoVal(){
		mesh.geometry.dispose();
		mesh.geometry = new THREE.BoxGeometry( geoObj.x, geoObj.y ,geoObj.z );
	}
 
	function rendering(){
		requestAnimationFrame(rendering);
		controls.update();
		renderer.render( scene, camera);
	}
 
	function resizeSet(){
		var queue = null;
    	var wait = 500;
    	window.addEventListener( 'resize', function() {
    		clearTimeout( queue );
    		queue = setTimeout(function() {
    				resize();
    		}, wait );
    	}, false );
    };
	function resize(){
		var width = window.innerWidth;
		var height = window.innerHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);
	}
 
	$(function(){
		main();
	});
})(jQuery);
