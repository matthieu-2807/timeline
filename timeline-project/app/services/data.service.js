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
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.datas = [
            {
                'id': '1',
                'date': '2017-01-01',
                'group': 'RH',
                'className': 'ressourceHumaine',
                'content': '1',
                'label': 'Evènement RH',
                'editable': 'false'
            },
            {
                'id': '2',
                'date': '2017-01-03',
                'group': 'RH',
                'className': 'ressourceHumaine',
                'content': '1',
                'label': 'After Work',
                'editable': 'false'
            },
            {
                'id': '3',
                'date': '2017-01-12',
                'group': 'RH',
                'className': 'ressourceHumaine',
                'content': '1',
                'label': 'Galette des rois',
                'editable': 'false'
            },
            {
                'id': '4',
                'date': '2017-01-18',
                'group': 'RH',
                'className': 'ressourceHumaine',
                'content': '1',
                'label': 'Entretient Client',
                'editable': 'false'
            },
            {
                'id': '5',
                'date': '2017-01-25',
                'group': 'commercial',
                'className': 'ressourceHumaine',
                'content': '1',
                'label': 'Recrutement',
                'editable': 'false'
            },
        ];
    }
    DataService.prototype.getDataSet = function () {
        return this.datas;
    };
    DataService.prototype.delete = function (id) {
        // return this.http.delete(`${this.datas}/${id}`);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map