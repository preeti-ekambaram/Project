import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
//import { Bidder } from '../models/bidder';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BidderService {

  sendData =new Subject();
  constructor(private httpclient:HttpClient) { }
  public getSaleData(){
    return this.httpclient.get("http://localhost:61674/api/bidder/GetSaleData");
  }
  public Newbid(fid:Number,bid:any){
    console.log(fid)
    console.log(bid);
     return this.httpclient.post("http://localhost:61674/api/bidder/newbid?fid="+fid,bid);
 }
 public getCurrentMax(cropid:number,bidderid:number){
   return this.httpclient.get("http://localhost:61674/api/bidder/currentMax?cropid="+cropid+"&bidderid="+bidderid);
 }
 public CommunicateWithSibling(data:any){
  // console.log(data);
  //this.localStorage.setItem('cropDetails')=data;
   this.sendData.next(data);
 }
 public getlost(id:number){
   return this.httpclient.get("http://localhost:61674/api/bidder/getlostdata?bidderId="+id);
 }
 public getwon(id:number){
  return this.httpclient.get("http://localhost:61674/api/bidder/getwondata?bidderId="+id);
}
}
