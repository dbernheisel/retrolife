import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Publisher } from '../models/publisher';
import { PublisherService } from '../services/publisher.service';

@Component({
  selector: 'publishers',
  templateUrl: 'app/templates/publishers.template.html'
})

export class PublishersComponent implements OnInit {
  errorMessage: string;
  publishers: Publisher[];

  constructor(
    private _router: Router,
    private _publisherService: PublisherService) { }

  ngOnInit() {
    this.getPublishers();
  }

  getPublishers() {
    this._publisherService.getPublishers()
      .then(publishers => this.publishers = publishers)
      .catch(error => this.errorMessage = error);
  }
}