import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  constructor(private route :ActivatedRoute ){
    const Id = parseInt(this.route.snapshot.params["id"],10);
    console.log(Id)
  }

}
