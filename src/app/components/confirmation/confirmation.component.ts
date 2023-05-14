import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  fullName: string | null | undefined;
  totalAmount: number | null | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fullName = this.route.snapshot.queryParamMap.get('fullName');
    this.totalAmount = parseFloat(this.route.snapshot.queryParamMap.get('totalAmount') as string);
  }

}
