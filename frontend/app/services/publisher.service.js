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
var PublisherService = (function () {
    function PublisherService(http) {
        this.http = http;
        this.publisherUrl = 'http://localhost:3000/api/companies';
    }
    PublisherService.prototype.getPublishers = function () {
        return this.http.get(this.publisherUrl + "?filter_role=publisher")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PublisherService.prototype.getPublisher = function (id) {
        return this.http.get(this.publisherUrl + "/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PublisherService.prototype.createPublisher = function (name) {
        var body = JSON.stringify({ company: { name: name, role: 'Publisher' } });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.publisherUrl, body, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PublisherService.prototype.updatePublisher = function (publisher) {
        var body = JSON.stringify({
            publisher: {
                name: publisher.name,
                founded_on: publisher.foundedOn,
                disbanded_on: publisher.disbandedOn
            }
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.publisherUrl + "/" + publisher.id, body, { headers: headers });
    };
    PublisherService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.meta.errors || 'Server Error');
    };
    PublisherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PublisherService);
    return PublisherService;
}());
exports.PublisherService = PublisherService;
//# sourceMappingURL=publisher.service.js.map