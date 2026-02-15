
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const result = document.getElementById("results")

 document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    result.style.color = 'black'
    //const guide = document.getElementById("weight-guide");
    //const results = guide.querySelectorAll('p');
    //let child;

     BMI = ((weight.value / (height.value**2)) * 10000).toPrecision(3);
     result.innerHTML = `BMI: ${BMI}`;
     const guide = result.appendChild(document.createElement('p'))
     
    if(BMI < 18.6){
        //child = results[0].innerHTML;
        guide.innerHTML = "Under Weight";
    }
    else if(BMI >= 18.6 && BMI < 24.9){
        //child = results[1].innerHTML;
        guide.innerHTML = "Normal Range";
    }
    else if(BMI > 24.9){
        //child = results[2].innerHTML;
        guide.innerHTML = "Overweight";
    }
  });

//  function calculateBMI(){
//     result.style.color = 'black'
//     const guide = document.getElementById("weight-guide");
//     const results = guide.querySelectorAll('p');

//      BMI = ((weight.value / (height.value**2)) * 10000).toPrecision(3);
//     if(BMI < 18.6){
//        result.innerHTML = `BMI: ${BMI}`;
//        results[0].style.color = "red";
//     }
//     else if(BMI >= 18.6 && BMI < 24.9){
//         result.innerHTML = `BMI: ${BMI}`;
//         results[1].style.color = "red";
//     }
//     else if(BMI > 24.9){
//         result.innerHTML = `BMI: ${BMI}`;
//         results[2].style.color = "red";
//     }
//   }