const btnEl = document.getElementById("btn");

const resultEl = document.getElementById("bmi-result");

const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI()
{
    const heightValue = document.getElementById("height").value / 100; //converting height to meters

    const weightValue = document.getElementById("weight").value;
    
    const bmiValue = weightValue / (heightValue * heightValue);

    resultEl.value = bmiValue; // updating the result value 

    if(bmiValue < 18.5)
    {
        weightConditionEl.innerText = "Under weight";
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9)
    {
        weightConditionEl.innerText = "Normal weight";
    }
    else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Over weight";
    }
    else if(bmiValue >= 30)
    {
        weightConditionEl.innerText = "Obesity";
    }
}


btnEl.addEventListener("click",calculateBMI); //fn will be called on clicking of button
