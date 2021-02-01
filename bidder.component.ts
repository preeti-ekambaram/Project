import { Component, Input, OnInit } from '@angular/core';
import { BidderService} from '../bidder-service.service';
//import {SaleData} from '../models/saleData.model';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-bidder',
  templateUrl: './bidder.component.html',
  styleUrls: ['./bidder.component.css']
})
export class BidderComponent implements OnInit {
crops:any;
//name:string="barly";
public crop:any;

//public newbidshow:boolean=false;
  constructor(private bidderservice:BidderService) {
    this.bidderservice.getSaleData().subscribe(d=>{
      this.crops=d
      console.log(this.crops)}
      );
      console.log(this.crop)
      
     
    
   }
   newbid(item:any){
     //console.log(item);
    this.crop=item;
    this.bidderservice.CommunicateWithSibling(this.crop);
    localStorage.setItem('crop',JSON.stringify(item));

  }
  ngOnInit(): void {
    
  }

}
