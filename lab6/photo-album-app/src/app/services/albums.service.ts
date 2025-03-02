import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.http.get<Album[]>(this.apiUrl).subscribe((albums) => {
      this.albumsSubject.next(albums);
    });
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album);
  }

  updateAlbum(id: number, updatedAlbum: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${id}`, updatedAlbum);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getPhotosByAlbumId(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
}