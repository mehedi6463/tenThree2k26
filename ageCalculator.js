
 //age calculator
const birthDateInput = document.getElementById('birthDate');
const presentDateInput = document.getElementById('presentDate');
const calculateBtn = document.getElementById('calculateBtn');
const resultElement = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const birthDate =new Date(birthDateInput.value);
    const presentDate = new Date(presentDateInput.value);

    let years= presentDate.getFullYear() - birthDate.getFullYear();
    let month= presentDate.getMonth() - birthDate.getMonth();
    let day= presentDate.getDate() - birthDate.getDate();

    //borrowing days and months if necessary
    if(day < 0){
        month--;
        
        let previousMonthDays = new Date(
        presentDate.getFullYear(),
        presentDate.getMonth(),
        0
    ).getDate();

    day += previousMonthDays;
    }

    //borrowing months and years if necessary
    if(month < 0 || (month === 0 && day < 0)) {
        years--;
        month += 12;
    }

    // resultElement.textContent = `Age: ${years} years, ${month} months, ${day} days`;
    alert(`Age: ${years} years, ${month} months, ${day} days`);
});
