import { Component, Inject } from '@angular/core';
import { DataService } from './services/data.service';


declare var vis: any;
import '../node_modules/vis/dist/vis.js';

@Component({
  selector: 'my-app',
  templateUrl: 'app/site.html',
})
export class AppComponent  { 
    datas: any[];

    constructor(@Inject(DataService) private dataService:any){
      this.datas = this.dataService.getDataSet();

      let groups = vis.DataSet([
          {"content": "RH", "id": "1", className:'ressourceHumaine headgroup'},
          {"content": "Disponible", "id": "101", className:'ressourceHumaine subgroupVis'},
          {"content": "Candidat", "id": "102", className:'ressourceHumaine subgroupVis'},
          {"content": "Départ", "id": "103", className:'ressourceHumaine subgroupVis'},
          {"content": "Entrée possible", "id": "104", className:'ressourceHumaine subgroupVis'},
          {"content": "Commercial", "id": "200", className:'commercial headgroup'},
          {"content": "Appel d'offre", "id": "201", className:'commercial subgroupVis'},
          {"content": "Qualification", "id": "202", className:'commercial subgroupVis'}
      ]);

      let options = {groupOrder: function (a:any, b:any) {
          return a.value - b.value;
        },
        groupOrderSwap: function (a:any, b:any, groups:any) {
          var v = a.value;
          a.value = b.value;
          b.value = v;
        },
        groupTemplate: function(group:any){
          var container = document.createElement('div');
          var label = document.createElement('span');
          label.innerHTML = group.content + ' ';
          container.insertAdjacentElement('afterBegin',label);
          var hide = document.createElement('button');
          hide.innerHTML = 'hide';
          hide.style.fontSize = 'small';
          hide.addEventListener('click',function(){
            groups.update({id: group.id, visible: false});
          });
          container.insertAdjacentElement('beforeEnd',hide);
          return container;
        },
        orientation: 'both',
        editable: true,
        groupEditable: true,
        start: new Date(2015, 6, 1),
        end: new Date(2015, 10, 1)
      };


      let data = new vis.DataSet(options);

      data.add(this.datas);

      data.on('*', function(event:any, properties:any[], senderId:any){
        console.log('event', event, properties);
      });

      data.update({id:2, group:1});

      console.log(data.get)
      data.remove(4);

      // get all ids
      let ids = data.getIds();
      console.log('ids', ids);

      // get a specific item
      let item1 = data.get(1);
      console.log('item1', item1);

      // retrieve a filtered subset of the data
      let items1s = data.get({
        filter: function (item:any) {
          return item.group == 1;
        }
      });
      console.log('filtered items', items1s);

      // retrieve formatted items
      let items = data.get({
        fields: ['id', 'date'],
        type: {
          date: 'ISODate'
        }
      });
      console.log('formatted items', items);

      let view = new vis.DataView(data, {
        filter: function (item:any) {
          return (item.group == 'RH');
        },
        fields: ['id', 'label', 'date']
      })

      var container = document.getElementById('visualization');

      var timeline = new vis.Timeline(container);
      timeline.setOptions(options);
      timeline.setGroups(groups);
      timeline.setItems(items);
    }
}
