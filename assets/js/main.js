const totalCostEl = document.getElementById('totalCost');
const distanceEl = document.getElementById('distance');
const efficiencyEl = document.getElementById('efficiency');
const costEl = document.getElementById('cost');
const submitBtnEl = document.getElementById('submitBtn');

submitBtnEl.addEventListener('click',(e)=>{
   const result =parseInt((distanceEl.value/efficiencyEl.value)*costEl.value);
   if(result){
    totalCostEl.textContent=`FUEL COST IS : ₹${result}`
   }else{
    totalCostEl.textContent=`FUEL COST IS : Pleaes Enter Values`
   }
});
