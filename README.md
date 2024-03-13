## CashCraft

<img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/><img alt="Spring" src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"/>

## Full stack application to split bills among friends

frontend : https://cashcraft.vercel.app/

Backend : https://cashcraftback.onrender.com  
 (Wait for 5 minutes after opened a Link because free Server 😅)  
 
 ![](cash.png)
 
### Get started

A bill spliting application, uses a greedy algorithm to give the min number of transactions to resolve the expenses, also reduces the complexity.

Application consists of a Frontend and a Backend, Backend made using springboot with fully scalable code database used is Railway Mysql  Frontend is made using reactJS.


### Features

* User Sigin and Signup functionality   
  Takes user name and email as parameters, stores hashed password. 

* Create Group, can add multiple users
  Takes group name,budget,type and members, can select from all users in the database.
  
* Create Expenses, select multiple users to split equally   
  Takes expense name,amount,paidby and splitbtw as parameters.

* Generates minimum number of transactions and reduce the complexity of expenses.
  This uses a greedy algorithm at every step, settle all amounts of one person and recur for remaining n-1 persons. 
  
* Full functioning backend, database used AWS RDS
  Backend made using spring boot, with a sql database.
  
### Algorithm

![](cashFlow.png)

* Compute the net amount for every person. The net amount for person ‘i’ can be computed by subtracting sum of all debts from sum of all credits.
* Find the two persons that are maximum creditor and maximum debtor. Let the maximum amount to be credited maximum creditor be maxCredit and maximum amount to be debited from maximum debtor be maxDebit. Let the maximum debtor be Pd and maximum creditor be Pc.
* Find the minimum of maxDebit and maxCredit. Let minimum of two be x. Debit ‘x’ from Pd and credit this amount to Pc
* If x is equal to maxCredit, then remove Pc from set of persons and recur for remaining (n-1) persons.
* If x is equal to maxDebit, then remove Pd from set of persons and recur for remaining (n-1) persons.

### Backend Design

![](classdia.png)

### Required request body
- ### UserLogin
```
{
    "username":	string,
    "password": string,
}
```
- ### User Register
```
{
    "userFirstName":	string,
    "userLastName":	string,
    "userName": string,
    "userPassword":	string,
    "userMatchingPassword": string
}
```
- ### Group
```
{
    "grpName":	string,
    "grpType":	string,
    "grpBudget": Long,
    "grpUser":	List<User>,
}
```
- ### Expense
```
{
    "expName":	string,
    "expAmt":	Long,
    "expPaidBy": Long,
    "usrSplitBtw":	List<User>,
    "expGrp": Group
}
```

## Examples

- ### User
**Endpoint:**      
```user/register```  
**Request Boddy:**       
 ```
{
    "userFirstName":"mihir",
    "userLastName":"hadavni",
    "userName":"mihir2107",
    "userPassword":"admin",
    "userMatchingPassword":"admin"
}
 ```       
**Response:**       
  ```
{
    "jwtToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaWhpcjIxMDciLCJleHAiOjE3MTAzNjk4MDMsInVzZXIiOnsiaWQiOjEsInVzZXJGaXJzdE5hbWUiOiJtaWhpciIsInVzZXJMYXN0TmFtZSI6ImhhZGF2YW5pIiwidXNlclBhc3N3b3JkIjoiJDJhJDExJENQd0JhbGI3c2dFd2ttQlNJWjYxdmVoU0pYbVBqQlhQcElWTDgzYmZVVzNqdnd5Q3Fnb1IuIiwiZW5hYmxlZCI6ZmFsc2UsInJvbGUiOiJVU0VSIiwiZXhwZW5zZXMiOltdLCJwYXNzd29yZCI6IiQyYSQxMSRDUHdCYWxiN3NnRXdrbUJTSVo2MXZlaFNKWG1QakJYUHBJVkw4M2JmVVczanZ3eUNxZ29SLiIsImF1dGhvcml0aWVzIjpudWxsLCJ1c2VybmFtZSI6Im1paGlyMjEwNyIsImNyZWRlbnRpYWxzTm9uRXhwaXJlZCI6ZmFsc2UsImFjY291bnROb25FeHBpcmVkIjpmYWxzZSwiYWNjb3VudE5vbkxvY2tlZCI6ZmFsc2V9LCJpYXQiOjE3MTAzNTE4MDN9.cGFQDc18z8fkejYOidZ6VJGR50Bf7SimS1NFCkXIFQhiLdLDdu1u4IXwuRBezVQ5pH7lDXBjqpY-AV9Vt2Xpmw"
}
  ```
- ### Group
**Endpoint:**      
```group/create```      
**Request Body:**   
```
{
    "grpName" : "manali",
    "grpType" :"trip",
    "grpBudget"  : 8000,
    "grpUser" : [{
        "id" : 1
    }
    ]

}

```

- ### Expense
**Endpoint:**      
```expense/create```      
**Request Body:**     
 ```
 {
    "expName":"ticket",
    "expAmt":8000,
    "expPaidBy":1,
    "usrSplitBtw":[{"id":2}, {"id" : 3}],
    "expGrp":
    {
        "id": 1,
        "groupName": "manali",
        "groupBudget": 80000,
        "groupType": "trip"
    }
}
 ```           
**Response:**
  ```
  {
    "id": 1,
    "expName": "Manali",
    "expAmt": 8000,
    "expPaidBy": 1,
    "expGrp": {
        "id": 1,
        "groupName": "Manali",
        "groupBudget": 80000,
        "groupType": "trip"
    }
}
  ```

- ### FinalSplit
**Endpoint:**      
```FinalSplit/{groupId}```  
**Reponse:**       
```
[
    {
        "finalPayTo": 1,
        "finalPayBy": 2,
        "finalAmt": 7000,
        "finalSplitGrp": {
            "id": 1,
            "groupName": "Manali",
            "groupBudget": 80000,
            "groupType": "trip"
        }
    }
]
```
### DashBoard

![](dash.png)


