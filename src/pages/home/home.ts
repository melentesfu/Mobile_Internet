import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera , CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public photo :any;
  public base64Image :string;


constructor(public navCtrl: NavController,private camera: Camera) {
 }

 ngOnInit(){
  this.photo =[];
 }

 takePicture(){
  const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     this.photo.push(this.base64Image);
     this.photo.reverse();
    }, (err) => {
     // Handle error
    });
 }

}
