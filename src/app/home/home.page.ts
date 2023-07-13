import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = '';
  date: string ='';
  description: string ='';
  photo: string ='';


  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });

    this.photo = 'data:image/jpeg;base64,' + image.base64String;
  }

  async saveEntry() {
    const entry = {
      title: this.title,
      date: this.date,
      description: this.description,
      photo: this.photo,
    };

    // Aquí puedes agregar el código para guardar la entrada en una base de datos o almacenamiento local

    console.log(entry);
    this.clearForm();
  }

  clearForm() {
    this.title = '';
    this.date = '';
    this.description = '';
    this.photo = '';
  }
}

