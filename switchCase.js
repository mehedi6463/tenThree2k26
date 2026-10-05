/* //check grade using switch case
//siomple way to check grade using switch case with DOM
let result = document.getElementById("title");
let marks = 85;
switch (true) {
    case (marks >= 90):
        result.textContent = "Grade A";
        break;

    case (marks >= 70):
        result.textContent = "Grade B";
        break;

    case (marks >= 60):
        result.textContent = "Grade C";
        break;

    case (marks >= 40):
        result.textContent = "Grade D";
        break;

    default:
        result.textContent = "Grade F";
}*/

/* //check grade using switch case with prompt
let mark = parseInt(prompt("Enter your marks:"));
let grade;
document.getElementById("marks").textContent = "Your marks: " + mark;

    switch (true) {
    case (marks >= 90):
        grade = "Grade A";
        break;
    case(mark >= 70):
        grade = "Grade B";
        break;
    case(mark >= 60):
        grade = "Grade C";
        break;
    case(mark >= 40):
        grade = "Grade D";
        break;
    default:
        grade = "Grade F";
};
document.getElementById("grades").textContent = "Your grade: " + grade;
*/

/*let marksInput = document.getElementById("marksInput");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");


submitBtn.addEventListener("click", function () {

    let marks = Number(marksInput.value);

    let grade;

    switch (true) {

        case (marks >= 90):
            grade = "Grade A";
            break;

        case (marks >= 70):
            grade = "Grade B";
            break;

        case (marks >= 60):
            grade = "Grade C";
            break;

        case (marks >= 40):
            grade = "Grade D";
            break;

        default:
            grade = "Grade F";
    }

    result.textContent = `Your Marks: ${marks} — ${grade}`;
});*/

//Fully use input and button (DOM)
let button = document.getElementById("submitData");
let input = document.getElementById("inputData");
let result2 = document.getElementById("markData");
let result = document.getElementById("gradeData");


button.addEventListener("click", function () {
    
    let marks = Number(input.value);
    let grade;

    if(marks >= 1 && marks <= 100) {
        switch (true) {
            case (marks >= 90):
                grade = "Grade A+";
                break;
            case (marks >= 70):
                grade = "Grade B+";
                break;
            case (marks >= 60):
                grade = "Grade C+";
                break;
            case (marks >= 40):
                grade = "Grade D";
                break;
            default:
                grade = "Grade F";
        }
    } else {
        result.textContent = "Please enter a valid mark between 1 and 100.";
        result2.textContent = "Try again";
        return;
    }

    result.textContent = `Your marks: ${marks}`;
    result2.textContent = `Grade: ${grade}`;
});

