import {Injectable} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private _storage : AngularFireStorage) { }

  uploadFile(file: File){
    const filePath = `uploads/${file.name}`;
    const fileRef = this._storage.ref(filePath);
    this._storage.upload(filePath, file);
    return fileRef.getDownloadURL();
  }


}
