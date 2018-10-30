import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from './transaction';
import { UserService } from '../user.service';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Api-Version': '1.1',
    'Cobrand-Name': 'restServer'
  })
};

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  isCharities: boolean;
  isCommute: boolean;
  isDebt: boolean;
  isDrink: boolean;
  isEducation: boolean;
  isEnergy: boolean;
  isFood: boolean;
  isHousing: boolean;
  isInsurance: boolean;
  isOther: boolean;
  isSubscription: boolean;
  isTv: boolean;
  isVehicles: boolean;
  isWater: boolean;

  isTrxViewing: boolean;

  public transactions: Array<Transaction> = [
    {
      'reason': 'creditCard',
      'amount': '200 USD',
      'category': 'Credit Card Payments',
      'date': '2018-02-16T19:35:45'
    }
    ,
    {
      'reason': 'creditCard',
      'amount': '101 USD',
      'category': 'Automotive/Fuel',
      'date': '2018-02-16T19:35:45'
    }
    ,
    {
      'reason': 'creditCard',
      'amount': '180.89 USD',
      'category': 'Electronics/General Merchandise',
      'date': '2018-02-16T19:35:45'
    }
    ,
    {
      'reason': 'creditCard',
      'amount': '101.07 USD',
      'category': 'Entertainment/Recreation',
      'date': '2018-02-16T19:35:45'
    }
    ,
    {
      'reason': 'creditCard',
      'amount': '20 USD',
      'category': 'Restaurants',
      'date': '2018-02-16T19:35:45'
    }
  ];

  constructor(private http: HttpClient, protected userService: UserService) {
// this.isTrxViewing = false;
   }

  ngOnInit() {
  }

  getTransactions(): Array<Transaction> {
    this.isTrxViewing = !this.isTrxViewing;
   // this.userService.login();
    return this.transactions;
    // return this.http.get<Transaction[]>('https://developer.api.yodlee.com/ysl/transactions?fromDate=2013-01-01', httpOptions);
  }
}
