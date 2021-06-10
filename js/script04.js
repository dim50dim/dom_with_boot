'use strict';

let but1 = document.querySelector('.butt1');

but1.addEventListener('click', () => {
    alert('man, how are doing');
});

////////////////////2222222222222
let but2 = document.querySelector('.butt2');
 let input2 = document.querySelector('.inp2');
  but2.onclick = () => {
    input2.setAttribute('value', 'even thougth we can do it');
  };
  console.log(input2);

  //////////////////////33333333333333333
  let but3 = document.querySelector('.butt3');
   let input3  = document.querySelector('.inp3').getAttribute('value');

   but3.addEventListener('click', () => {
       alert(input3);
   });
   ////////////////4444444444444444444444

   let but4 = document.querySelector('.butt4');
     

     but4.onclick = () => {
     let input4 = +document.querySelector('.inp4').value;

         alert(input4 * input4);
     };

     /////////////////////55555555555555
     let but5 = document.querySelector('.butt5');
       let input51 = document.querySelector('.inp51');
        let input52 = document.querySelector('.inp52');

      but5.addEventListener('click', function () {
         input51.setAttribute('value', 'do whatever you can,that is only one way to go');
         input52.setAttribute('value','100500');
      });  

      ////////////////6666666666666666
      let but6 = document.querySelector('.butt6');
        let input6 = document.querySelector('.inp6');

      but6.onclick = () => {
          input6.style.color = 'red';
      };
      ////////////////////7777777777777777

     let but7 = document.querySelector('.butt7');
       let input7 = document.querySelector('.inp7');
       console.log(input7);

    but7.addEventListener('click', () => {
            input7.setAttribute('value', 'dude, have you seen that, that was attribute');
            input7.style.color = 'green';
    }); 

    ////////////
  let but8 = document.querySelector('.butt8');
     let container = document.querySelector('.container');
  but8.onclick = () => {
      container.classList.toggle('hide');  
  };