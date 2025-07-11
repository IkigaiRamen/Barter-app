import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseService } from 'src/app/back/services/response.service';

@Component({
  selector: 'app-edit-response',
  templateUrl: './edit-response.component.html',
  styleUrls: ['./edit-response.component.css']
})
export class EditResponseComponent {
  response: any = {};
  responseId?: any;

  constructor(
    private responseService: ResponseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.responseId = this.route.snapshot.paramMap?.get('id');
    this.responseService.getResponse(this.responseId).subscribe((data: any) => {
      this.response = data;
    });
  }

  updateResponse() {
    this.responseService.updateResponse(this.responseId, this.response).subscribe(() => {
      console.log('Response updated');
      this.router.navigate(['/back/responses']);
    });
  }
}
