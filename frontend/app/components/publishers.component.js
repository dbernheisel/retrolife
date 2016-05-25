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
var publisher_service_1 = require('../services/publisher.service');
var PublishersComponent = (function () {
    function PublishersComponent(_router, _publisherService) {
        this._router = _router;
        this._publisherService = _publisherService;
    }
    PublishersComponent.prototype.ngOnInit = function () {
        this.getPublishers();
    };
    PublishersComponent.prototype.getPublishers = function () {
        var _this = this;
        this._publisherService.getPublishers()
            .then(function (publishers) { return _this.publishers = publishers; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    PublishersComponent = __decorate([
        core_1.Component({
            selector: 'publishers',
            templateUrl: 'app/templates/publishers.template.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, publisher_service_1.PublisherService])
    ], PublishersComponent);
    return PublishersComponent;
}());
exports.PublishersComponent = PublishersComponent;
//# sourceMappingURL=publishers.component.js.map