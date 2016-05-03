System.register(['angular2/core', 'angular2/router', '../services/manufacturer.service'], function(exports_1, context_1) {
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
    var core_1, router_1, manufacturer_service_1;
    var ManufacturersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (manufacturer_service_1_1) {
                manufacturer_service_1 = manufacturer_service_1_1;
            }],
        execute: function() {
            ManufacturersComponent = (function () {
                function ManufacturersComponent(_router, _manufacturerService) {
                    this._router = _router;
                    this._manufacturerService = _manufacturerService;
                }
                ManufacturersComponent.prototype.ngOnInit = function () {
                    this.getManufacturers();
                };
                ManufacturersComponent.prototype.getManufacturers = function () {
                    var _this = this;
                    this._manufacturerService.getManufacturers().subscribe(function (manufacturers) { return _this.manufacturers = manufacturers; }, function (error) { return _this.errorMessage = error; });
                };
                ManufacturersComponent = __decorate([
                    core_1.Component({
                        selector: 'manufacturers',
                        templateUrl: 'app/templates/manufacturers.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, manufacturer_service_1.ManufacturerService])
                ], ManufacturersComponent);
                return ManufacturersComponent;
            }());
            exports_1("ManufacturersComponent", ManufacturersComponent);
        }
    }
});
//# sourceMappingURL=manufacturers.component.js.map