import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrl = 'https://developer.api.yodlee.com/ysl/cobrand/login';

  constructor() { }
}
