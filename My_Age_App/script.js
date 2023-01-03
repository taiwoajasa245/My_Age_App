const yearOfBirth = document.querySelector("#date"); 
const currentYear = document.querySelector("#yearDate"); 
const age = document.querySelector("#age"); 
const demo = document.querySelector('#demo'); 

function myResult(){ 
    // adding 
   const result = Number(currentYear.value) - Number(yearOfBirth.value);
   
   demo.innerHTML = ` You are ${result} Years old.`; 
 
   if(result <= 0){ 
       demo.innerHTML = 'Invalid input..Try Again'; 
   }
   
}

function myYear(){ 
    const submit = Number(currentYear.value) - Number(age.value);
    demo.innerHTML = `Year of birth is ${submit}.`;

    if(submit <= 0){ 
        demo.innerHTML = 'Invalid input..Try Again'; 
    }
}