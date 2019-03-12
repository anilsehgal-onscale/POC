import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';

import * as THREE from 'three';
import { RestService } from './rest.service';
import { OrbitControls } from 'three-orbitcontrols-ts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Observable<any>;
  private rs: RestService;
  title = 'OnScale Angular POC';

  @ViewChild('container') elementRef: ElementRef;
  private container: HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cube: THREE.Mesh;


  constructor(private restService: RestService) {
    this.rs = restService;
  }
  get_products() {
    this.products = this.rs.get_products();
  }

  ngOnInit() {
    this.container = this.elementRef.nativeElement;
    this.init();
  }

  init() {
    const screen = {
      width  : 400,
      height : 300
    };
    const view = {
      angle  : 45,
      aspect : screen.width / screen.height,
      near   : 0.1,
      far    : 10000
    };
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view. near, view.far);
    this.renderer = new THREE.WebGLRenderer();
    this.scene.add(this.camera);
    const light = new THREE.PointLight( 0xffffff, 1, 100 );
    light.position.set( 50, 50, 50 );
    this.scene.add( light );
    const light2 = new THREE.AmbientLight( 0xffffff, 0.5 );
    light2.position.set( 50, 50, 50 );
    this.scene.add( light2 );
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.renderer.setClearColor('#FFFFFF');
    this.camera.position.set(0, 0, 30);
    this.camera.lookAt(this.scene.position);
    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshLambertMaterial({ color : 0xFFFFFF});
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);
    this.render();
  }

  render() {
    const self: AppComponent = this;
    (function render() {
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
      self.animate();
    }());
  }

  animate() {
    this.cube.rotateX(0.01);
    this.cube.rotateY(0.01);

  }

}
