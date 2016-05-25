import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PublisherService } from './services/publisher.service';
import { PublishersComponent } from './components/publishers.component';

import { DeveloperService } from './services/developer.service';
import { DevelopersComponent } from './components/developers.component';

import { ManufacturerService } from './services/manufacturer.service';
import { ManufacturersComponent } from './components/manufacturers.component';

@Component({
    selector: `retroraider`,
    templateUrl: `app/templates/app.template.html`,
    styleUrls: [`stylesheets/app.css`],
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ ROUTER_PROVIDERS, DeveloperService, PublisherService, ManufacturerService ]
})

@RouteConfig([
    { path: '/publishers', name: 'Publishers', component: PublishersComponent },
    // { path: '/publishers/:id', name: 'Publisher', component: PublisherComponenet },
    { path: '/developers', name: 'Developers', component: DevelopersComponent, useAsDefault: true },
    { path: '/manufacturers', name: 'Manufacturers', component: ManufacturersComponent }
])

export class AppComponent { }