import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../back/services/annonce.service'; // Import the AnnonceService
import { Router } from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces?: any[];

  constructor(private annonceService: AnnonceService, private router: Router) {}

  ngOnInit(): void {
    this.annonceService.getAllAnnonces().subscribe((data: any) => {
      this.annonces = data;
      console.log(data);
    });
  }

  deleteAnnonce(annonceId: number) {
    if (confirm('Are you sure you want to delete this annonce?')) {
      this.annonceService.deleteAnnonce(annonceId).subscribe(() => {
        // Refresh your data or update the UI as needed after a successful delete
        console.log('Annonce deleted');
        this.annonceService.getAllAnnonces().subscribe((data: any) => {
          this.annonces = data;
          console.log(data);
        });
      });
    }
  }

  editAnnonce(annonceId: number) {
    this.router.navigate([`/back/editAnnonce/${annonceId}`]);
  }
}
