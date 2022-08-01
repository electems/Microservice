import { c_Account } from "./Model/Account";
export class AccountInfo{
    AccountList: c_Account[] = [];

constructor(AccountList: c_Account[]){
    this.AccountList=AccountList;
}

WithDrawMoney(MyRupee :number){
    let minimumValue =1000;
   for( const money of this.AccountList)
   if(money.balance >= minimumValue) {
    money.balance = money.balance - MyRupee
}
}else(){
  console.log("low balance" ),
 
   
}

CreditMoney(Credit: number){
    for( const CreditMoney of this.AccountList)
    CreditMoney.balance= CreditMoney.balance + Credit 
}
}

