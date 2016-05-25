import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

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
    this._developerService.getDevelopers()
                          .then(developers => this.developers = developers)
                          .catch(error => this.errorMessage = error);
  }
}