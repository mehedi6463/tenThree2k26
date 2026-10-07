
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

    if(month < 0 || (month === 0 && day < 0)) {
        years--;
        month += 12;
    }

    // resultElement.textContent = `Age: ${years} years, ${month} months, ${day} days`;
    window.alert(`Age: ${years} years, ${month} months, ${day} days`);
});