var std_1 = {
    name: "Student1",
    rollNo: 1,
    result: "A"
}
var std_2 = {
    name: "Student2",
    rollNo: 2,
    result: "B"
}
var std_3 = {
    name: "Student3",
    rollNo: 3,
    result: "C"
}
var std_4 = {
    name: "Student4",
    rollNo: 4,
    result: "D"
}
var std_5 = {
    name: "Student5",
    rollNo: 5,
    result: "E"
}
var std_6 = {
    name: "Student6",
    rollNo: 6,
    result: "F"
}
var std_7 = {
    name: "Student7",
    rollNo: 7,
    result: "A"
}
var std_8 = {
    name: "Student8",
    rollNo: 8,
    result: "B"
}
var std_9 = {
    name: "Student9",
    rollNo: 9,
    result: "C"
}
var std_10 = {
    name: "Student10",
    rollNo: 10,
    result: "D"
}

var allStudents = [std_1, std_2, std_3, std_4, std_5, std_6, std_7, std_8, std_9, std_10]

var table = document.getElementById("studentsTable")

table.innerHTML = `<th><tr><td>Name</td><td>Roll_No</td><td>Grade</td></tr></th>
<tr><td>${allStudents[0].name}</td><td>${allStudents[0].rollNo}</td><td>${allStudents[0].result}</td></tr>
<tr><td>${allStudents[1].name}</td><td>${allStudents[1].rollNo}</td><td>${allStudents[1].result}</td></tr>
<tr><td>${allStudents[2].name}</td><td>${allStudents[2].rollNo}</td><td>${allStudents[2].result}</td></tr>
<tr><td>${allStudents[3].name}</td><td>${allStudents[3].rollNo}</td><td>${allStudents[3].result}</td></tr>
<tr><td>${allStudents[4].name}</td><td>${allStudents[4].rollNo}</td><td>${allStudents[4].result}</td></tr>
<tr><td>${allStudents[5].name}</td><td>${allStudents[5].rollNo}</td><td>${allStudents[5].result}</td></tr>
<tr><td>${allStudents[6].name}</td><td>${allStudents[6].rollNo}</td><td>${allStudents[6].result}</td></tr>
<tr><td>${allStudents[7].name}</td><td>${allStudents[7].rollNo}</td><td>${allStudents[7].result}</td></tr>
<tr><td>${allStudents[8].name}</td><td>${allStudents[8].rollNo}</td><td>${allStudents[8].result}</td></tr>
<tr><td>${allStudents[9].name}</td><td>${allStudents[9].rollNo}</td><td>${allStudents[9].result}</td></tr>`


function search() {
    var userInput = document.getElementById("searchinp").value

    var data = document.getElementById("studentsTable")

    var tr = data.getElementsByTagName("TR")

    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("TD")[1];

        if (td) {
            var val = td.innerHTML;

            if (val.indexOf(userInput) > -1) {
                tr[i].style.display = "";
                tr[i].style.color = "blue";


            } else {
                tr[i].style.display = "none";
            }


        }
    }
}
