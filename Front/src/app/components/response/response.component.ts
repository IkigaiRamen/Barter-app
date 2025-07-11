import { Router } from '@angular/router';
import { ResponseService } from './../../back/services/response.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  responses?: any[];

  constructor(private responseService: ResponseService, private router: Router) { }

  ngOnInit(): void {
    this.responseService.getAllResponses().subscribe((data: any) => {
      this.responses = data;
      console.log(data);
    });
  }

  deleteResponse(responseId: number) {
    if (confirm('Are you sure you want to delete this response?')) {
      this.responseService.deleteResponse(responseId).subscribe(() => {
        // Refresh your data or update the UI as needed after a successful delete
        console.log('Response deleted');
        this.responseService.getAllResponses().subscribe((data: any) => {
          this.responses = data;
          console.log(data);
        });
      });
    }
  }

  editResponse(responseId: number) {
    this.router.navigate([`/back/editresponse/${responseId}`]);
  }
}
