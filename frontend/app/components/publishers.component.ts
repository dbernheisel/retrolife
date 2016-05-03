import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

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
    this._publisherService.getPublishers().subscribe(
       publishers => this.publishers = publishers,
       error => this.errorMessage = <any>error);
  }
}