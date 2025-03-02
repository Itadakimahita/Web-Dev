
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.albumsService.albums$.subscribe((albums) => {
      this.albums = albums;
    });
  }

  deleteAlbum(id: number): void {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumsService.deleteAlbum(id).subscribe(() => {
        this.albumsService.fetchAlbums();
      });
    }
  }

  viewAlbumDetails(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}