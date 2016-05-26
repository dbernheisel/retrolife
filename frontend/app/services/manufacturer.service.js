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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ManufacturerService = (function () {
    function ManufacturerService(http) {
        this.http = http;
        this.manufacturerUrl = 'http://localhost:3000/api/companies';
    }
    ManufacturerService.prototype.getManufacturers = function () {
        return this.http.get(this.manufacturerUrl + "?filter_role=manufacturer")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ManufacturerService.prototype.getManufacturer = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.manufacturerUrl + "/" + id, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ManufacturerService.prototype.createManufacturer = function (name) {
        var body = JSON.stringify({ manufacturer: { name: name, role: 'Manufacturer' } });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post("" + this.manufacturerUrl, body, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ManufacturerService.prototype.updateManufacturer = function (manufacturer) {
        var body = JSON.stringify({
            manufacturer: {
                name: manufacturer.name,
                founded_on: manufacturer.foundedOn,
                disbanded_on: manufacturer.disbandedOn
            }
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.manufacturerUrl + "/" + manufacturer.id, body, { headers: headers });
    };
    ManufacturerService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.meta.errors || 'Server Error');
    };
    ManufacturerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ManufacturerService);
    return ManufacturerService;
}());
exports.ManufacturerService = ManufacturerService;
//# sourceMappingURL=manufacturer.service.js.map