// answer 1

function ans1() {
    let city = prompt("Enter city name:");

if (city === "karachi") {
    document.write("Welcome to city of lights");
} else {
    document.write("welcome to " + city)
    }
}

// answer 2

function ans2() {
    let gender = prompt("Enter gender:")

    if (gender === "male") {
        document.write("Good morning sir")
    } if (gender === "female") {
        document.write("Good morning ma'am.")
    } 

}

// answer 3
function ans3() {
    let color = prompt("Enter the color of the traffic light:")

    if (color === "red") {
        document.write("You must STOP!")
    } 
    if (color === "yellow") {
        document.write("get READY to move!") 
    } 
    if (color === "green") {
        document.write("GO GO GO!!!")
    }
}

// answer 4
function ans4() {
    let fuel = prompt("Enter amount of fuel remaining:")

    if (fuel < 0.25) {
        document.write("Please refuel IMMEDIATELY!!!")
    } else {
        document.write("enough fuel, enjoy!!")
    }
}

// answer 5
function ans5() {
    // answer 5a
    var a = 4
    if (++a === 5) {
        alert("given condition for variable a is true.")
    }
    // answer 5b
    var b = 82
    if (b++ === 83) {
        alert("given condition for variable b is true.")
    }
    // answer 5c
    var c = 12
    if (c++ === 13) {
        alert("condition 1 is true.")
    } if (c === 13) {
        alert("condition 2 is true.")
    } if (++c < 14) {
        alert("condition 3 is true.")
    } if (c === 14) {
        alert("condition 4 is true.")
    }

    // answer 5d
    var materialCost = 20000;
    var labourCost = 2000;
    var totalCost = materialCost + labourCost;
    if (totalCost === labourCost + materialCost) {
        alert("the cost equals");
    }
    // answer 5e
    if (true) {
        alert("True") 
    }
    if (false) {
        alert("False")
    }
    // asnwer 5f
    if ("car" < "cat") {
        alert("car is smaller than cat")
    }
}

// answer 6
function ans6() {
    let marks1 = parseFloat(prompt("Enter marks for subject 1 :"))
    let marks2 = parseFloat(prompt("Enter marks for subject 2 :"))
    let marks3 = parseFloat(prompt("Enter marks for subject 3 :"))
    let totalMarks = prompt("Enter total marks :")
    let marksObtained = marks1 + marks2 + marks3;
    let percentage = (marksObtained/totalMarks)*100

    if (percentage >= 80) {
        let grade = "A*";
        let remarks = "EXCELLENT"
        document.write("Total marks : " + totalMarks + "<br>" + "Marks obtained : " + marksObtained + "<br>" + "Percentage : " + percentage + "<br>" + "Grade : " + grade + "<br>" + "Remarks : " + remarks)
  }  if (percentage >= 70 && percentage < 80) {
        let grade = "A";
        let remarks = "GOOD"
        document.write("Total marks : " + totalMarks + "<br>" + "Marks obtained : " + marksObtained + "<br>" + "Percentage : " + percentage + "<br>" + "Grade : " + grade + "<br>" + "Remarks : " + remarks)
  }  if (percentage >= 60 && percentage < 70) {
        let grade = "B";
        let remarks = "you need to improve"
        document.write("Total marks : " + totalMarks + "<br>" + "Marks obtained : " + marksObtained + "<br>" + "Percentage : " + percentage + "<br>" + "Grade : " + grade + "<br>" + "Remarks : " + remarks)
  }  if (percentage < 60) {
        let grade = "Fail";
        let remarks = "nallay!!!🤡"
        document.write("Total marks : " + totalMarks + "<br>" + "Marks obtained : " + marksObtained + "<br>" + "Percentage : " + percentage + "<br>" + "Grade : " + grade + "<br>" + "Remarks : " + remarks)
  }
    
    
    

}