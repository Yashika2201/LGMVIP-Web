window.addEventListener("load", () => {
  const myForm = document.querySelector(".myForm");

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = myForm.elements["firstName"].value;
    const lastName = myForm.elements["lastName"].value;
    const email = myForm.elements["email"].value;
    const age = myForm.elements["age"].value;
    const phone = myForm.elements["phone"].value;
    const profileImg = myForm.elements["profileImg"].value.split("\\");
    console.log(profileImg);
    const file = profileImg[profileImg.length-1]


    var mySkills = "";
    const skills = document.querySelectorAll(".skills");
    skills.forEach((element) => {
      if (element.checked) {
        mySkills += element.value + " ";
      }
    });

    var radios = document.getElementsByClassName("gender");

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        radios = radios[i].value;
        break;
      }
    }

    const myTable = document.querySelector(".myTable");

    const tableRow = document.createElement("tr");
    const firstTd = document.createElement("td");
    const secondTd = document.createElement("td");
    secondTd.classList.add("info");

    const name = document.createElement("p");
    name.innerText = "Name: " + firstName + " "  + lastName;
    const emailtag = document.createElement("p");
    emailtag.innerText = "Email: " + email;
    const ageTag = document.createElement("p");
    ageTag.innerText = "Age: " + age;
    const GenderTag = document.createElement("p");
    GenderTag.innerText = "Gender: " + radios;
    const Skills = document.createElement("p");
    Skills.innerText = "Skills: " + mySkills;
    const imgTag = document.createElement("img");
    imgTag.height = 150
    imgTag.width = 150
    imgTag.src = "/Internship/registration_form/img/" + file;

    secondTd.appendChild(name);
    secondTd.appendChild(emailtag);
    secondTd.appendChild(ageTag);
    secondTd.appendChild(GenderTag);
    secondTd.appendChild(Skills);
    firstTd.appendChild(imgTag);


    tableRow.appendChild(firstTd);
    tableRow.appendChild(secondTd);

    myTable.appendChild(tableRow);

  });
});
function resetForm(){  
  document.querySelector(".myForm").reset();  
}   
