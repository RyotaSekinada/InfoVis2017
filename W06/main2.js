function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 6 );
    camera.lookAt({x:0, y:0, z:0});
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
	[-1, 1, 1], //v0
	[-1,-1, 1], //v1
	[ 1,-1, 1], //v2
	[ 1, 1, 1], //v3
	[-1, 1,-1], //v4
	[-1,-1,-1], //v5
	[ 1,-1,-1], //v6
	[ 1, 1,-1]  //v7
    ];

    var faces = [
	[0,1,2] // f0:v0-v1-v2
    ];

    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
    var id = faces[0];
    var f0 = new THREE.Face3( id[0], id[1], id[2]);

    var geometry1 = new THREE.Geometry();
    geometry1.vertices.push( v0 );
    geometry1.vertices.push( v1 );
    geometry1.vertices.push( v2 );
    geometry1.faces.push( f0 );
    var material1 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material1.vertexColors = THREE.FaceColors;
    material1.side = THREE.DoubleSide;
    geometry1.computeFaceNormals();
    var tril1 = new THREE.Mesh( geometry1, material1 );
    scene.add( tril1 );

    var geometry2 = new THREE.Geometry();
    geometry2.vertices.push( v2 );
    geometry2.vertices.push( v3 );
    geometry2.vertices.push( v0 );
    geometry2.faces.push( f0 );
    var material2 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material2.vertexColors = THREE.FaceColors;
    material2.side = THREE.DoubleSide;
    geometry2.computeFaceNormals();
    var tril2 = new THREE.Mesh( geometry2, material2 );
    scene.add( tril2 );

    var geometry3 = new THREE.Geometry();
    geometry3.vertices.push( v4 );
    geometry3.vertices.push( v5 );
    geometry3.vertices.push( v6 );
    geometry3.faces.push( f0 );
    var material3 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material3.vertexColors = THREE.FaceColors;
    material3.side = THREE.DoubleSide;
    geometry3.computeFaceNormals();
    var tril3 = new THREE.Mesh( geometry3, material3 );
    scene.add( tril3 );

    var geometry4 = new THREE.Geometry();
    geometry4.vertices.push( v6 );
    geometry4.vertices.push( v7 );
    geometry4.vertices.push( v4 );
    geometry4.faces.push( f0 );
    var material4 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material4.vertexColors = THREE.FaceColors;
    material4.side = THREE.DoubleSide;
    geometry4.computeFaceNormals();
    var tril4 = new THREE.Mesh( geometry4, material4 );
    scene.add( tril4 );

    var geometry5 = new THREE.Geometry();
    geometry5.vertices.push( v0 );
    geometry5.vertices.push( v1 );
    geometry5.vertices.push( v5 );
    geometry5.faces.push( f0 );
    var material5 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material5.vertexColors = THREE.FaceColors;
    material5.side = THREE.DoubleSide;
    geometry5.computeFaceNormals();
    var tril5 = new THREE.Mesh( geometry5, material5 );
    scene.add( tril5 );

    var geometry6 = new THREE.Geometry();
    geometry6.vertices.push( v5 );
    geometry6.vertices.push( v4 );
    geometry6.vertices.push( v0 );
    geometry6.faces.push( f0 );
    var material6 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material6.vertexColors = THREE.FaceColors;
    material6.side = THREE.DoubleSide;
    geometry6.computeFaceNormals();
    var tril6 = new THREE.Mesh( geometry6, material6 );
    scene.add( tril6 );

    var geometry7 = new THREE.Geometry();
    geometry7.vertices.push( v3 );
    geometry7.vertices.push( v2 );
    geometry7.vertices.push( v6 );
    geometry7.faces.push( f0 );
    var material7 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material7.vertexColors = THREE.FaceColors;
    material7.side = THREE.DoubleSide;
    geometry7.computeFaceNormals();
    var tril7 = new THREE.Mesh( geometry7, material7 );
    scene.add( tril7 );

    var geometry8 = new THREE.Geometry();
    geometry8.vertices.push( v6 );
    geometry8.vertices.push( v7 );
    geometry8.vertices.push( v3 );
    geometry8.faces.push( f0 );
    var material8 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material8.vertexColors = THREE.FaceColors;
    material8.side = THREE.DoubleSide;
    geometry8.computeFaceNormals();
    var tril8 = new THREE.Mesh( geometry8, material8 );
    scene.add( tril8 );

    var geometry9 = new THREE.Geometry();
    geometry9.vertices.push( v0 );
    geometry9.vertices.push( v3 );
    geometry9.vertices.push( v7 );
    geometry9.faces.push( f0 );
    var material9 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material9.vertexColors = THREE.FaceColors;
    material9.side = THREE.DoubleSide;
    geometry9.computeFaceNormals();
    var tril9 = new THREE.Mesh( geometry9, material9 );
    scene.add( tril9 );

    var geometry10 = new THREE.Geometry();
    geometry10.vertices.push( v7 );
    geometry10.vertices.push( v4 );
    geometry10.vertices.push( v0 );
    geometry10.faces.push( f0 );
    var material10 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material10.vertexColors = THREE.FaceColors;
    material10.side = THREE.DoubleSide;
    geometry10.computeFaceNormals();
    var tril10 = new THREE.Mesh( geometry10, material10 );
    scene.add( tril10 );

    var geometry11 = new THREE.Geometry();
    geometry11.vertices.push( v1 );
    geometry11.vertices.push( v2 );
    geometry11.vertices.push( v6 );
    geometry11.faces.push( f0 );
    var material11 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material11.vertexColors = THREE.FaceColors;
    material11.side = THREE.DoubleSide;
    geometry11.computeFaceNormals();
    var tril11 = new THREE.Mesh( geometry11, material11 );
    scene.add( tril11 );

    var geometry12 = new THREE.Geometry();
    geometry12.vertices.push( v6 );
    geometry12.vertices.push( v5 );
    geometry12.vertices.push( v1 );
    geometry12.faces.push( f0 );
    var material12 = new THREE.MeshLambertMaterial({color: 0xffffff});
    material12.vertexColors = THREE.FaceColors;
    material12.side = THREE.DoubleSide;
    geometry12.computeFaceNormals();
    var tril12 = new THREE.Mesh( geometry12, material12 );
    scene.add( tril12 );

    var light = new THREE.PointLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    scene.add( light );

    document.addEventListener( 'mousedown', mouse_down_event );
    function mouse_down_event( event )
    {
	
	//スクリーン幅とか高さとか
	var vx = renderer.domElement.offsetLeft;
	var vy = renderer.domElement.offsetTop;
	var vw = renderer.domElement.width;
	var vh = renderer.domElement.height;

	//マウス位置(2D)
	var x_win = event.clientX;
	var y_win = event.clientY;

	//マウス位置(3D)
	var x_NDC = 2*(x_win-vx)/vw-1;
	var y_NDC = -( 2*(y_win-vy)/vh-1);

	//マウスベクトル
	var p_NDC = new THREE.Vector3( x_NDC, y_NDC, 1 );
	var p_wld = p_NDC.unproject( camera );

	var ray = new THREE.Raycaster
	  ( camera.position, p_wld.sub( camera.position ).normalize() );

	var int1 = ray.intersectObject( tril1 );
	if(int1.length>0){
		int1[0].face.color.setRGB( 1, 0, 0 );
		int1[0].object.geometry.colorsNeedUpdate = true;
		}

	var int2 = ray.intersectObject( tril2 );
	if(int2.length>0){
		int2[0].face.color.setRGB( 1, 0, 0 );
		int2[0].object.geometry.colorsNeedUpdate = true;
		}

	var int3 = ray.intersectObject( tril3 );
	if(int3.length>0){
		int3[0].face.color.setRGB( 1, 0, 0 );
		int3[0].object.geometry.colorsNeedUpdate = true;
		}

	var int4 = ray.intersectObject( tril4 );
	if(int1.length>0){
		int4[0].face.color.setRGB( 1, 0, 0 );
		int4[0].object.geometry.colorsNeedUpdate = true;
		}

	var int5 = ray.intersectObject( tril5 );
	if(int5.length>0){
		int5[0].face.color.setRGB( 1, 0, 0 );
		int5[0].object.geometry.colorsNeedUpdate = true;
		}

	var int6 = ray.intersectObject( tril6 );
	if(int6.length>0){
		int6[0].face.color.setRGB( 1, 0, 0 );
		int6[0].object.geometry.colorsNeedUpdate = true;
		}

	var int7 = ray.intersectObject( tril7 );
	if(int7.length>0){
		int7[0].face.color.setRGB( 1, 0, 0 );
		int7[0].object.geometry.colorsNeedUpdate = true;
		}

	var int8 = ray.intersectObject( tril8 );
	if(int8.length>0){
		int8[0].face.color.setRGB( 1, 0, 0 );
		int8[0].object.geometry.colorsNeedUpdate = true;
		}

	var int9 = ray.intersectObject( tril9 );
	if(int9.length>0){
		int9[0].face.color.setRGB( 1, 0, 0 );
		int9[0].object.geometry.colorsNeedUpdate = true;
		}

	var int10 = ray.intersectObject( tril10 );
	if(int10.length>0){
		int10[0].face.color.setRGB( 1, 0, 0 );
		int10[0].object.geometry.colorsNeedUpdate = true;
		}

	var int11 = ray.intersectObject( tril11 );
	if(int11.length>0){
		int11[0].face.color.setRGB( 1, 0, 0 );
		int11[0].object.geometry.colorsNeedUpdate = true;
		}

	var int12 = ray.intersectObject( tril12 );
	if(int12.length>0){
		int12[0].face.color.setRGB( 1, 0, 0 );
		int12[0].object.geometry.colorsNeedUpdate = true;
		}

		
	}

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        tril1.rotation.x += 0.01;
        tril1.rotation.y += 0.01;
	tril2.rotation.x += 0.01;
        tril2.rotation.y += 0.01;
	tril3.rotation.x += 0.01;
        tril3.rotation.y += 0.01;
	tril4.rotation.x += 0.01;
        tril4.rotation.y += 0.01;
	tril5.rotation.x += 0.01;
        tril5.rotation.y += 0.01;
	tril6.rotation.x += 0.01;
        tril6.rotation.y += 0.01;
	tril7.rotation.x += 0.01;
        tril7.rotation.y += 0.01;
	tril8.rotation.x += 0.01;
        tril8.rotation.y += 0.01;
	tril9.rotation.x += 0.01;
        tril9.rotation.y += 0.01;
	tril10.rotation.x += 0.01;
        tril10.rotation.y += 0.01;
	tril11.rotation.x += 0.01;
        tril11.rotation.y += 0.01;
	tril12.rotation.x += 0.01;
        tril12.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}
