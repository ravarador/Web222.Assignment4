// array of grades with student name, marks obtained, totalmarks
let grades = [
    {
        "studentName": "Ravni",
        "marksObtained" : 50,
        "totalMarks": 80
    },
    {
        "studentName": "Winona",
        "marksObtained" : 30,
        "totalMarks": 30
    },
    {
        "studentName": "Denise",
        "marksObtained" : 60,
        "totalMarks": 70
    },
    {
        "studentName": "Jexequiel",
        "marksObtained" : 10,
        "totalMarks": 100
    }
];

// added percentage property using foreach with formula (markObtained / totalMarks) * 100
grades.forEach(a => a['percentage'] = (a.marksObtained / a.totalMarks) * 100);

// create a new array of sorted grades (descending sort by percentage)
let sortedGrades = grades.sort((a, b) => (a.percentage > b.percentage) ? -1 : (b.percentage > a.percentage) ? 1 : 0);

// display from highest to lowest percentage
// get equivalent of percentage
// display STUDENTNAME got: GRADE in console
console.log(sortedGrades[0].studentName + " got: " + getGradeEquivalent(sortedGrades[0].percentage));
console.log(sortedGrades[1].studentName + " got: " + getGradeEquivalent(sortedGrades[1].percentage));
console.log(sortedGrades[2].studentName + " got: " + getGradeEquivalent(sortedGrades[2].percentage));
console.log(sortedGrades[3].studentName + " got: " + getGradeEquivalent(sortedGrades[3].percentage));

// display STUDENTNAME got: GRADE in HTML page
var id1 = document.getElementById('id1');
id1.innerHTML += sortedGrades[0].studentName + " got: " + getGradeEquivalent(sortedGrades[0].percentage) + "<br>";

var id2 = document.getElementById('id2');
id2.innerHTML += sortedGrades[1].studentName + " got: " + getGradeEquivalent(sortedGrades[1].percentage) + "<br>";

var id3 = document.getElementById('id3');
id3.innerHTML += sortedGrades[2].studentName + " got: " + getGradeEquivalent(sortedGrades[2].percentage) + "<br>";

var id4 = document.getElementById('id4');
id4.innerHTML += sortedGrades[3].studentName + " got: " + getGradeEquivalent(sortedGrades[3].percentage) + "<br>";

// get percentage value then returns a grade equivalent
// returns error message if percentage is outside 0-100 range
function getGradeEquivalent(percentage) {
    // used var since i don't have prefilled values
    var grade;

    if (percentage <= 100 && percentage >= 0) {
        
        if (percentage >= 50 && percentage < 60) 
            grade = 'D';

        if (percentage >= 60 && percentage < 70)
            grade = 'C';
        
        if (percentage >= 70 && percentage < 80)
            grade = 'B';

        if (percentage >= 80 && percentage < 90)
            grade = 'B+';

        if (percentage >= 90)
            grade = 'A';

        if (percentage < 50)
            grade = 'FAIL';
    }
    else {
        return "Invalid percentage. Must be 0-100."
    }

    return grade;
}