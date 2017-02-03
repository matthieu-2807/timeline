import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DataService {
    
    datas: any[]=[
        {
            'id': '1',
            'date': '2017-01-01',
            'group': 'RH',
            'className': 'ressourceHumaine',
            'content': '3',
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
            'group': 'RH',
            'className': 'ressourceHumaine',
            'content': '1',
            'label': 'Recrutement',
            'editable': 'false'
        },
    ]

    constructor(private http:Http){

    }
    getDataSet(){
        return this.datas;
    }

    delete(id:number){
        // return this.http.delete(`${this.datas}/${id}`);
    }
}