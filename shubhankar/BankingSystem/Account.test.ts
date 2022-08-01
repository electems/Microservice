import {c_Account} from './Model/Account'
import {AccountInfo} from './AccountFile'
 const  AccountData: c_Account[] = [
    { "name": "ramu", "balance": 250000},
    {"name": "Mahesh", "balance":7000},
    {"name":"Raju", "balance":5000}
  ];

describe('Return the Money ', () => {
    test('should return data', () => {
    const Employeework= new AccountInfo(AccountData);
    Employeework.WithDrawMoney(5000);
    expect(AccountData[0].balance).toBe(245000)
 
    });
})
describe('Return the Money ', () => {
    test('should return data', () => {
    const Employeework1= new AccountInfo(AccountData);
    Employeework1.CreditMoney(50000);
    expect(AccountData[0].balance).toBe(295000)
    expect(AccountData[1].balance).toBe(52000)
    expect(AccountData[2].balance).toBe(50000)
    });
})