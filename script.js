'use strict';
//Wrap all codes in an Immediately Invoked Function Expression (IIFE).
(() => {

  const displaySelectedUser = () => {

    const userAge = document.querySelector('#age').value,
          userName = document.querySelector('#name').value,
          userHeight = document.querySelector('#height').value,
          userWeight = document.querySelector('#weight').value,
          userSex = document.querySelector('#sex').value,
          userCountry = document.querySelector('#country').value,
          message = document.querySelector('#message');

    const computeBMI = (height, weight, country) => {

      let countries = ['Chad', 'Sierra Leone', 'Mali', 'Gambia',
'Uganda', 'Ghana', 'Senegal', 'Somalia',
          'Ivory Coast', 'Isreal'
        ];

      const h = height * 0.3048;
      let bmi = weight / (h * h);

      for (let i = 0; i < countries.length; i++) {
          if (countries[i].toLowerCase() === country.toLowerCase()) {
            bmi = bmi * 0.82;
          }
        }
        
      return bmi.toFixed(1);
    };

    if(userName == '' || userAge == '' || userHeight == '' || userWeight == '' || userSex == '' || userCountry == ''){

      message.innerText = 'Please enter a valid input.'
    }else{

      document.querySelector('.data-age').innerText += ` ${userAge}`;
      document.querySelector('.data-height').innerText += ` ${userHeight}`;
      document.querySelector('.data-weight').innerText += ` ${userWeight}`;
      document.querySelector('.data-sex').innerText += ` ${userSex.toUpperCase()}`;
      document.querySelector('.data-name').innerText += ` ${userName.toUpperCase()}`;
      document.querySelector('.data-country').innerText += ` ${userCountry.toUpperCase()}`;
      
      let bmi = computeBMI(userHeight, userWeight, userCountry);

      document.querySelector('#display').innerText = bmi;

      message.innerText = `Dear ${userName} from ${userCountry}, your Body Mass Index is ${bmi}. Thank you.`

      const myForm = document.querySelector('#my-form');
      myForm.reset();

      const elements = myForm.elements;

      for(var i = 0, len = elements.length; i < len; ++i){
        elements[i].disabled = true;
      }
    }  

  }; 

  const reset = document.querySelector('#reset');
  reset.style.display = 'none';
    
  const powerupTheUI = () => {
    const btn = document.querySelector("#oracle");

    btn.addEventListener('click',() =>{
      displaySelectedUser();

      reset.style.display = 'inline';
      
    });
        
  }

  powerupTheUI();
  
})();

   //javascript:location.reload(true)