import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as deliveryAgentsData from '../../../deliveryAgent.json';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-delivery',
  standalone: false,
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent implements OnInit {
  agents: any[] = [];

  constructor(private router: Router, private deliveryState : DeliveryService) {}

  ngOnInit() {
    this.deliveryState.isDeliveryPageActive = true;
    this.agents = deliveryAgentsData.DeliveryAgent;
  }

  ngOnDestroy() {
    this.deliveryState.isDeliveryPageActive = false;
  }

  assignAgent(agentId : string) {
    alert('Agent ${agentId} assigned!');
  }

  goBack() {
    this.deliveryState.isDeliveryPageActive = false;
    this.router.navigate(['/']);
  }
}
