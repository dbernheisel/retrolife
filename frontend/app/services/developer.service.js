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
var DeveloperService = (function () {
    function DeveloperService(http) {
        this.http = http;
        this.developerUrl = 'http://localhost:3000/api/companies';
    }
    DeveloperService.prototype.getDevelopers = function () {
        return this.http.get(this.developerUrl + "?filter_role=developer")
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DeveloperService.prototype.getDeveloper = function (id) {
        return this.http.get(this.developerUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DeveloperService.prototype.createDeveloper = function (name) {
        var body = JSON.stringify({ developer: { name: name, role: 'Developer' } });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post("" + this.developerUrl, body, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    DeveloperService.prototype.updateDeveloper = function (developer) {
        var body = JSON.stringify({
            developer: {
                name: developer.name,
                founded_on: developer.foundedOn,
                disbanded_on: developer.disbandedOn
            }
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.developerUrl + "/" + developer.id, body, { headers: headers });
    };
    DeveloperService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.meta.errors || 'Server Error');
    };
    DeveloperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DeveloperService);
    return DeveloperService;
}());
exports.DeveloperService = DeveloperService;
//# sourceMappingURL=developer.service.js.map