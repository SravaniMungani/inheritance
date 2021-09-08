class address{
     constructor(house_no,street,city,state){
         this.house_no=house_no;
         this.street=street;
         this.city=city;
         this.state=state;


     }
}
class bank_cust{
    constructor(a,b,c){
        this.account_no=a;
        this.acc_name=b;
        this.address=c;

    }
}
let c1=new bank_cust(101,"sravs",new address(3_145,"marathahalli","bnglr","KA"));
console.log(c1);
console.log(c1.address.state);
