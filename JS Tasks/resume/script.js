document.getElementById("mainHeading").innerHTML =
    "<center><u><h1>CURRICULUM VITAE</h1></u></center>";

// name & address
let obj = {
    name: "Mahima Raol",
    addone: "sdghdrghnbdxcgv",
    addtwo: "sdgvxdsfxbzdc,",
    addthree: "New Delhi - 110011.",
    mobile: 9999999999,
    email: "myemail@gmail.com",
};
document.getElementById("address").innerHTML =
    "<span><u><b>" +
    obj.name +
    "</b></u></span><br>" +
    "<span>" +
    obj.addone +
    "</span><br>" +
    "<span>" +
    obj.addtwo +
    "</span><br>" +
    "<span>" +
    obj.addthree +
    "</span><br>" +
    "<span>Mobile : " +
    obj.mobile +
    "</span><br>" +
    "<span>E-mail : " +
    obj.email +
    "</span>";

// Objective
document.getElementById("subheading1").innerHTML = "<u>CAREER OBJECTIVE</u> :-";
document.getElementById("para").innerHTML = "To work sincerely and put all afforts to learn as well as to contribute to the company  in order to enhance technical, conceptual & interpersonal skill and also work in an organization which provides ample opportunity to grow and continue.";

// Qualifications
document.getElementById("subheading2").innerHTML = "<u>ACADEMIC QUALIFICATIONS</u> :-";
let objtwo = {
    graduation: "Graduation (B.TECH) Passed from Gujarat Technological University in 2018",
    twelve: "10+2 Passed from Gujarat Board in 2014",
    ten: "10<sup>th</sup> Passed from Gujarat Board in 2012"
};
document.getElementById("list1").innerHTML =
    "<li>" +
    objtwo.graduation +
    "</li>" +
    "<li>" +
    objtwo.twelve +
    "</li>" +
    "<li>" +
    objtwo.ten +
    "</li>";

// Insight
document.getElementById("subheading3").innerHTML = "<u>PERSONAL INSIGHTS</u> :-";
let objthree = {
    value: "Value the time & working person.",
    ability: "Ability to take responsibility, high integrity and determined",
    skill: "Superior inter personal skill."
};
document.getElementById("list2").innerHTML =
    "<li>" +
    objthree.value +
    "</li>" +
    "<li>" +
    objthree.ability +
    "</li>" +
    "<li>" +
    objthree.skill +
    "</li>";

// Languages known
document.getElementById("subheading3").innerHTML = "<u>PERSONAL INSIGHTS</u> :-";

document.getElementById("subheading4").innerHTML = "<u>LANGUAGES KNOWN</u> :-";
let objfour = {
    lang: "Gujarati, Hindi & English"
};
document.getElementById("list3").innerHTML =
    "<li>" +
    objfour.lang +
    "</li>";