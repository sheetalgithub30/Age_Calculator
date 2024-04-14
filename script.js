const calculate = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

const currentDate = new Date();

calculate.addEventListener("click",()=>{
      const birthday = input.value;

      if (birthday === "") {
         alert("Please enter a valid date");
      } 
      else {
      const birthdayDate = new Date(birthday);
      let age = currentDate.getFullYear() - birthdayDate.getFullYear();
      const month = currentDate.getMonth() - birthdayDate.getMonth();
    
      if (month < 0 ||(month === 0 && currentDate.getDate() < birthdayDate.getDate())) age--;
    
      p.innerText = `Your age is ${age}year old`;
      }
    
    
})