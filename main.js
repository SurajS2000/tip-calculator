const bill=document.getElementById("billAmount");
const people=document.getElementById("noOfPeople");
const percentage=document.querySelectorAll(".btn");
const custom=document.getElementById("custom");
const tipPer=document.getElementById("tipPer");
const total=document.getElementById("total");
const reset=document.getElementById("reset");
const error=document.getElementById("error");
let tipPrec;
let ofPeople;
let amount;
let tip;
let totalAmount;
for (var i=0;i<percentage.length;i++){
    percentage[i].addEventListener("click",function(){
        tipPrec=this.innerHTML.replace("%","");
        calculation();
    })
}
custom.addEventListener("input",function(){
    tipPrec=this.value;
    calculation();
})
people.addEventListener("input",function(){
    if(this.value<=0){
        error.style.display="inline";
        people.style.border="2px solid red"
    }else{
        error.style.display="none";
        people.style.border="none";
        ofPeople=this.value;
        calculation();
    }
})
bill.addEventListener("input",function(){
    amount=this.value;
    calculation();
})
function calculation() {
    if(tipPrec>0&&ofPeople>0&&amount>0){
        totalAmount=(amount*(tipPrec/100)).toFixed(2);
        tip=(totalAmount/ofPeople).toFixed(2);
        tipPer.innerHTML=tip;
        total.innerHTML=totalAmount;
    }else{
        tipPer.innerHTML="0.00";
        total.innerHTML="0.00";
    }
}
reset.addEventListener("click",function(){
    bill.value=null;
    people.value=null;
    custom.value=null;
    tipPer.innerHTML="0.00";
    total.innerHTML="0.00";
})
