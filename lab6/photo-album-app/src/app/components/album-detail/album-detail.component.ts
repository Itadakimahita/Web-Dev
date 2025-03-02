
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
    imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  albumId: number | null = null;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbumById(this.albumId).subscribe((album) => {
      this.album = album;
      this.editedTitle = album.title;
    });
  }

  saveChanges(): void {
    if (this.album) {
      const updatedAlbum: Album = { ...this.album, title: this.editedTitle };
      this.albumsService.updateAlbum(this.album.id, updatedAlbum).subscribe(() => {
        this.albumsService.fetchAlbums();
        alert('Album updated successfully!');
      });
    }
  }

  goToPhotos(): void {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}