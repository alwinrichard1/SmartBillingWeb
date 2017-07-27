import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private doctors = ['Dr. R V Dhamodharen', 'Dr. K T Thomas', 'Dr. Richard', 'Dr. Demmos'];
  private products = ['Calpol 550 (25)', 'Cipcal 350 Cipcal 350 Cipcal 350 Cipcal 350  (600)', 'Paracitamol 500 (0)', 'Aten 30 (85)'];
  private batches = ['AS54646 - 50', 'ADS2230 - 30', 'PSAadsdA00 -112'];
}
