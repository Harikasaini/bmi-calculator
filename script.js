function CalculateBMI(){
    let feet=document.getElementById('feet').value
    let inch=document.getElementById('inch').value
    let weight=document.getElementById('kg').value

    feet=parseInt(feet)
    inch=parseInt(inch)
    weight=parseInt(weight)
    
    let height=(feet*12+inch)/39.37007874;
    let bmi=weight/(height*height)
    let status;
    if(bmi<18.5){
        status="underweight"
    }
    else if( bmi>=18.5 && bmi<24.9){
        status="normalweight"

    }
    else if( bmi>=25 && bmi<30){
        status="overweight"

    }
    else if( bmi>=30 && bmi<35){
        status="Obese"

    }
    document.getElementById('result').innerHTML="Your BMI is:"+bmi +""+"You are:"+status;

}