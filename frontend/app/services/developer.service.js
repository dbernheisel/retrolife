System.register(['angular2/http', 'angular2/core', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1;
    var DeveloperService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            DeveloperService = (function () {
                function DeveloperService(http) {
                    this.http = http;
                    this._developerUrl = 'http://localhost:3000/api/developers';
                }
                DeveloperService.prototype.getDevelopers = function () {
                    return this.http.get(this._developerUrl + ".json")
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DeveloperService.prototype.getDeveloper = function (id) {
                    return this.http.get(this._developerUrl + "/" + id + ".json")
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DeveloperService.prototype.createDeveloper = function (name) {
                    var body = JSON.stringify({ developer: { name: name } });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._developerUrl + ".json", body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DeveloperService.prototype.updateDeveloper = function (developer) {
                    var body = JSON.stringify({ developer: { name: developer.name, founded_on: developer.foundedOn, disbanded_on: developer.disbandedOn } });
                    return this.http.put(this._developerUrl + "/" + developer.id + ".json", body);
                };
                DeveloperService.prototype.handleError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().meta.errors || 'Server Error');
                };
                DeveloperService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DeveloperService);
                return DeveloperService;
            }());
            exports_1("DeveloperService", DeveloperService);
        }
    }
});
//# sourceMappingURL=developer.service.js.map