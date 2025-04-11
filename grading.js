
let kosiScore = 84;

let studentGrade = () =>{
    if (kosiScore  >= 90 && kosiScore  <= 100) {
      return "A";
    } else if (kosiScore  >= 80 && kosiScore  <= 89) {
      return "B";
    } else if (kosiScore  >= 70 && kosiScore  <= 79) {
      return "C";
    } else if (kosiScore >= 60 && kosiScore  <= 69) {
      return "D";
    } else if (kosiScore >= 0 && kosiScore  < 60) {
      return "F";
    } else {
      return "Invalid Score! (Must be between 0 and 100)";
    }
  }
  console.log(studentGrade());
  