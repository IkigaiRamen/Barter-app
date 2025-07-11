import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/back/services/annonce.service';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css']
})
export class EditAnnonceComponent {
  annonce: any = {};
  annonceId: any;

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.annonceId = this.route.snapshot.paramMap.get('id');
    this.annonceService.getAnnonce(this.annonceId).subscribe((data: any) => {
      this.annonce = data;
    });
  }

  updateAnnonce() {
    this.annonceService.updateAnnonce(this.annonceId, this.annonce).subscribe(() => {
      console.log('Annonce updated');
      this.router.navigate(['/back/annonces']);
    });
  }
}
