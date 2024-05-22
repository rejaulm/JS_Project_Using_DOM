const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    //create anather text for decision print
    // Create span elements for different BMI categories
const underWeightSpan = document.createElement('div');
const overWeightSpan = document.createElement('div');
const normalWeightSpan = document.createElement('div');

// Set the text and style for each span
underWeightSpan.textContent = `When BMI is ${bmi} Under Weight`;
underWeightSpan.style.color = 'blue'; // Set color for underweight
underWeightSpan.style.fontSize = '28px';

overWeightSpan.textContent = `When BMI is ${bmi} Over Weight`;
overWeightSpan.style.color = 'red'; // Set color for overweight
overWeightSpan.style.fontSize = '28px';

normalWeightSpan.textContent = `When BMI is ${bmi} Normal Weight`;
normalWeightSpan.style.color = 'green'; // Set color for normal weight
normalWeightSpan.style.fontSize = '28px';

    if(bmi<18.86){
        results.append(underWeightSpan);
    }

    if(bmi>24.9){
        results.append(overWeightSpan);
    }

    if(bmi>18.86 && bmi<24.9){
        results.append(normalWeightSpan);
    }
    const newline=document.createElement('div');
      newline.textContent="If you want again Calculate BMI CLICK RESET Button ";
      newline.style.fontSize="15px"
      newline.style.color="#453433"
      results.append(newline);
   // results.innerHTML="If you want again Calculate BMI CLICK RESET Button ";
    
  }
  
})

form.addEventListener('click' ,(e) =>{
  if (e.target.id=="rst"){
  // Reset form inputs
   document.getElementById("frm").reset();
   // Reload the page
  location.reload();
   e.preventDefault();
   
  }
})

