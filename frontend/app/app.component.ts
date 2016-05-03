import { Component } from 'angular2/core';
import { RouteConfig,
         ROUTER_DIRECTIVES,
         ROUTER_PROVIDERS } from 'angular2/router';
import { Http, Response }   from 'angular2/http';

import { PublisherService } from './services/publisher.service';
import { DeveloperService } from './services/developer.service';
import { ManufacturerService } from './services/manufacturer.service';
import { PublishersComponent } from './components/publishers.component';
import { DevelopersComponent } from './components/developers.component';
import { ManufacturersComponent } from './components/manufacturers.component';

@Component({
    selector: `retroraider`,
    templateUrl: `app/templates/app.template.html`,
    styleUrls: [`stylesheets/app.css`],
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ ROUTER_PROVIDERS, DeveloperService, PublisherService, ManufacturerService ]
})

@RouteConfig([
    {
        path: '/publishers',
        name: 'Publishers',
        component: PublishersComponent
    },
    // {
    //     path: '/publishers/:id',
    //     name: 'Publisher',
    //     component: PublisherComponenet
    // },
    {
        path: '/developers',
        name: 'Developers',
        component: DevelopersComponent,
        useAsDefault: true
    },
    {
      path: '/manufacturers',
      name: 'Manufacturers',
      component: ManufacturersComponent
    },
    // {
    //     path: '/developers/:id',
    //     name: 'Developer',
    //     component: DeveloperComponent
    // },

])

export class AppComponent { }