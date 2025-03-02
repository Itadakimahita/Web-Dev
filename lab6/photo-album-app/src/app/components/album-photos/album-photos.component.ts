
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number | null = null;
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getPhotosByAlbumId(this.albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}