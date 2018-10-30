import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IImage } from './gallery/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private imageUrl = 'http://localhost:8080/ProjectBE-web/rest/message/images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<IImage[]> {
    return this.http.get<IImage[]>(this.imageUrl);
  }
}
