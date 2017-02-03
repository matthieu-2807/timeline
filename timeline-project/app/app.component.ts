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
      let options = {};
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

    }
}
