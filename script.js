const billTotalInput=document.getElementById("billTotalInput")
const tipInput=document.getElementById("tipInput")
const numberOfPeople=document.getElementById("numberOfPeople")
const perPersonTotal=document.getElementById("perPersonTotal")

let number=Number(numberOfPeople.innerText)


const calculateBill = () => {
    let bill=Number(billTotalInput.value)
    let percentageTip=Number(tipInput.value)/100
    let tipAmount=bill*percentageTip
    let totalAmount= bill+tipAmount
    let newTotal=totalAmount/number
    perPersonTotal.innerText=`$${newTotal.toFixed(2)}`
}

const increasePeople = () => {
    number+=1
    numberOfPeople.innerText=number  
    calculateBill()
}
  
const decreasePeople = () => {
    if(number>1){
      number-=1
      numberOfPeople.innerText=number  
      calculateBill()
    }
}