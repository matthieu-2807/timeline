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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var data_service_1 = require('./services/data.service');
require('../node_modules/vis/dist/vis.js');
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.datas = this.dataService.getDataSet();
        var groups = vis.DataSet([
            { "content": "RH", "id": "1", className: 'ressourceHumaine headgroup' },
            { "content": "Disponible", "id": "101", className: 'ressourceHumaine subgroupVis' },
            { "content": "Candidat", "id": "102", className: 'ressourceHumaine subgroupVis' },
            { "content": "Départ", "id": "103", className: 'ressourceHumaine subgroupVis' },
            { "content": "Entrée possible", "id": "104", className: 'ressourceHumaine subgroupVis' },
            { "content": "Commercial", "id": "200", className: 'commercial headgroup' },
            { "content": "Appel d'offre", "id": "201", className: 'commercial subgroupVis' },
            { "content": "Qualification", "id": "202", className: 'commercial subgroupVis' }
        ]);
        var options = { groupOrder: function (a, b) {
                return a.value - b.value;
            },
            groupOrderSwap: function (a, b, groups) {
                var v = a.value;
                a.value = b.value;
                b.value = v;
            },
            groupTemplate: function (group) {
                var container = document.createElement('div');
                var label = document.createElement('span');
                label.innerHTML = group.content + ' ';
                container.insertAdjacentElement('afterBegin', label);
                var hide = document.createElement('button');
                hide.innerHTML = 'hide';
                hide.style.fontSize = 'small';
                hide.addEventListener('click', function () {
                    groups.update({ id: group.id, visible: false });
                });
                container.insertAdjacentElement('beforeEnd', hide);
                return container;
            },
            orientation: 'both',
            editable: true,
            groupEditable: true,
            start: new Date(2015, 6, 1),
            end: new Date(2015, 10, 1)
        };
        var data = new vis.DataSet(options);
        data.add(this.datas);
        data.on('*', function (event, properties, senderId) {
            console.log('event', event, properties);
        });
        data.update({ id: 2, group: 1 });
        console.log(data.get);
        data.remove(4);
        // get all ids
        var ids = data.getIds();
        console.log('ids', ids);
        // get a specific item
        var item1 = data.get(1);
        console.log('item1', item1);
        // retrieve a filtered subset of the data
        var items1s = data.get({
            filter: function (item) {
                return item.group == 1;
            }
        });
        console.log('filtered items', items1s);
        // retrieve formatted items
        var items = data.get({
            fields: ['id', 'date'],
            type: {
                date: 'ISODate'
            }
        });
        console.log('formatted items', items);
        var view = new vis.DataView(data, {
            filter: function (item) {
                return (item.group == 'RH');
            },
            fields: ['id', 'label', 'date']
        });
        var container = document.getElementById('visualization');
        var timeline = new vis.Timeline(container);
        timeline.setOptions(options);
        timeline.setGroups(groups);
        timeline.setItems(items);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/site.html',
        }),
        __param(0, core_1.Inject(data_service_1.DataService)), 
        __metadata('design:paramtypes', [Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map