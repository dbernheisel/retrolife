"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var publisher_service_1 = require('./services/publisher.service');
var publishers_component_1 = require('./components/publishers.component');
var developer_service_1 = require('./services/developer.service');
var developers_component_1 = require('./components/developers.component');
var manufacturer_service_1 = require('./services/manufacturer.service');
var manufacturers_component_1 = require('./components/manufacturers.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "retroraider",
            templateUrl: "app/templates/app.template.html",
            styleUrls: ["stylesheets/app.css"],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, developer_service_1.DeveloperService, publisher_service_1.PublisherService, manufacturer_service_1.ManufacturerService]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/publishers', name: 'Publishers', component: publishers_component_1.PublishersComponent },
            // { path: '/publishers/:id', name: 'Publisher', component: PublisherComponenet },
            { path: '/developers', name: 'Developers', component: developers_component_1.DevelopersComponent, useAsDefault: true },
            { path: '/manufacturers', name: 'Manufacturers', component: manufacturers_component_1.ManufacturersComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map