import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-newassignement-details',
  templateUrl: './newassignement-details.component.html',
  styleUrls: ['./newassignement-details.component.css']
})
export class NewassignementDetailsComponent implements OnInit{

  url="devoirs/";
  id="648c4f9195f2ea02e47debf3"
  devoir:any;
  constructor(private apiservice: ApiService) {
  }
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.apiservice.getEntityDetails(this.url, this.id).subscribe( data =>{
        if(data!=null && data.length!=0){
          this.devoir = data[0]
          console.log(data)
        }
    })
  }

}
