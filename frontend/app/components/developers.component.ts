import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

import { Developer } from '../models/developer';
import { DeveloperService } from '../services/developer.service';

@Component({
  selector: 'developers',
  templateUrl: 'app/templates/developers.template.html'
})

export class DevelopersComponent implements OnInit {
  errorMessage: string;
  developers: Developer[];

  constructor(
    private _router: Router,
    private _developerService: DeveloperService) { }

  ngOnInit() {
    this.getDevelopers();
  }

  getDevelopers() {
    this._developerService.getDevelopers().subscribe(
       developers => this.developers = developers,
       error => this.errorMessage = <any>error);
  }
}