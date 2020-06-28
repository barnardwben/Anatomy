document.getElementById("one").onclick = showIm;
document.getElementById("one").onmouseout = hideIm;

const d1 = document.getElementById("one");
function showIm() {
  d1.style.backgroundImage = "url('imgs/skull.jpg')";
  d1.style.backgroundRepeat = "none"
  d1.style.padding = "300px";
  d1.style.margin = "20px 0 0 -350px"
  d1.style.transition = ".3s all ease-in-out";
  d1.style.border = "1px solid black"
  d1.style.zIndex = "10";
}

function hideIm() {
  d1.style.backgroundImage = "none";
  d1.style.padding = "35px";
  d1.style.transition = ".3s all ease-in-out";
  d1.style.border = "none"
  d1.style.margin = "30px 0 0 80px";
  d1.style.zIndex = "0"
}

document.getElementById("two").onclick = showIm2;
document.getElementById("two").onmouseout = hideIm2;

const d2 = document.getElementById("two");
function showIm2() {
  d2.style.backgroundImage = "url('imgs/sternum.jpg')";
  d2.style.backgroundRepeat = "no-repeat"
  d2.style.padding = "200px 200px 100px 200px";
  d2.style.transition = ".3s all ease-in-out";
  d2.style.border = "1px solid black"
  d2.style.zIndex = "10"
  // d2.style.objectFit = "cover"
}

function hideIm2() {
  d2.style.backgroundImage = "none";
  d2.style.padding = "50px";
  d2.style.transition = ".3s all ease-in-out";
  d2.style.border = "none"
  d2.style.zIndex = "0"
}

document.getElementById("three").onclick = showIm3;
document.getElementById("three").onmouseout = hideIm3;

const d3 = document.getElementById("three");
function showIm3() {
  d3.style.backgroundImage = "url('imgs/uparm.jpg')";
  d3.style.backgroundRepeat = "no-repeat"
  d3.style.padding = "150px 50px 190px 200px";
  d3.style.margin = "140px 0 0 -200px"
  d3.style.transition = ".3s all ease-in-out";
  d3.style.zIndex = "1"
  d3.style.border = "1px solid black"
  d3.style.zIndex = "10"
  // d2.style.objectFit = "cover"
}

function hideIm3() {
  d3.style.backgroundImage = "none";
  d3.style.padding = "60px 8px";
  d3.style.margin = "140px 0 0 40px"
  d3.style.transition = ".3s all ease-in-out";
  d3.style.border = "none"
  d3.style.zIndex = "0"
}

document.getElementById("four").onclick = showIm4;
document.getElementById("four").onmouseout = hideIm4;

const d4 = document.getElementById("four");
function showIm4() {
  d4.style.backgroundImage = "url('imgs/forearm.jpg')";
  d4.style.backgroundRepeat = "no-repeat"
  d4.style.padding = "300px 200px 100px 300px";
  d4.style.margin = "258px 0 0 -420px"
  d4.style.transition = ".3s all ease-in-out";
  d4.style.border = "1px solid black"
  d4.style.zIndex = "10"
  // d2.style.objectFit = "cover"
}

function hideIm4() {
  d4.style.backgroundImage = "none";
  d4.style.padding = "60px 8px";
  d4.style.margin = "268px 0 0 35px"
  d4.style.transition = ".3s all ease-in-out";
  d4.style.border = "none";
  d4.style.zIndex = "0";

}


document.getElementById("five").onclick = showIm5;
document.getElementById("five").onmouseout = hideIm5;

const d5 = document.getElementById("five");
function showIm5() {
  d5.style.backgroundImage = "url('imgs/pelvis.jpg')";
  d5.style.backgroundRepeat = "no-repeat"
  d5.style.padding = "300px 170px 100px 300px";
  d5.style.margin = "200px 0 0 0"
  d5.style.transition = ".3s all ease-in-out";
  d5.style.border = "1px solid black";
  d5.style.zIndex = "10"
  // d2.style.objectFit = "cover"
}

function hideIm5() {
  d5.style.backgroundImage = "none";
  d5.style.padding = "40px";
  d5.style.margin = "268px 0 0 75px"
  d5.style.transition = ".3s all ease-in-out";
  d5.style.border = "none";
  d5.style.zIndex = "0";
}


document.getElementById("six").onclick = showIm6;
document.getElementById("six").onmouseout = hideIm6;

const d6 = document.getElementById("six");
function showIm6() {
  d6.style.backgroundImage = "url('imgs/antfemur.jpg')";
  d6.style.backgroundRepeat = "no-repeat"
  d6.style.padding = "400px 10px 100px 300px";
  d6.style.margin = "100px 0 0 0"
  d6.style.transition = ".3s all ease-in-out";
  d6.style.transform = "rotate(0deg)"
  d6.style.border = "1px solid black"
  d6.style.zIndex = "10"
  // d2.style.objectFit = "cover"
}

function hideIm6() {
  d6.style.backgroundImage = "none";
  d6.style.padding = "80px 10px";
  d6.style.margin = "320px 0 0 70px"
  d6.style.transition = ".3s all ease-in-out";
  d6.style.transform = "rotate(-5deg)"
  d6.style.border = "none";
  d6.style.zIndex = "0";
}


document.getElementById("seven").onclick = showIm7;
document.getElementById("seven").onmouseout = hideIm7;

const d7 = document.getElementById("seven");
function showIm7() {
  d7.style.backgroundImage = "url('imgs/antleg.jpg')";
  d7.style.backgroundRepeat = "no-repeat";
  d7.style.padding = "450px 80px 0px 300px";
  d7.style.margin = "200px 0 0 -250px";
  d7.style.transition = ".3s all ease-in-out";
  d7.style.transform = "rotate(0deg)";
  d7.style.border = "1px solid black";
  d7.style.zIndex = "10";
  // d2.style.objectFit = "cover"
}

function hideIm7() {
  d7.style.backgroundImage = "none";
  d7.style.padding = "80px 10px";
  d7.style.margin = "480px 0 0 75px"
  d7.style.transition = ".3s all ease-in-out";
  d7.style.border = "none";
  d7.style.zIndex = "0";
}
document.getElementById("eight").onclick = showIm8;
document.getElementById("eight").onmouseout = hideIm8;

const d8 = document.getElementById("eight");
function showIm8() {
  d8.style.backgroundImage = "url('imgs/postskl.jpg')";
  d8.style.backgroundRepeat = "no-repeat";
  d8.style.padding = "490px 20px 0px 500px";
  d8.style.margin = "30px 0 0 300px";
  d8.style.transition = ".3s all ease-in-out";
  d8.style.transform = "rotate(0deg)";
  d8.style.border = "1px solid black";
  d8.style.zIndex = "10";
  // d2.style.objectFit = "cover"
}

function hideIm8() {
  d8.style.backgroundImage = "none";
  d8.style.padding = "40px 40px";
  d8.style.margin = "30px 0 0 300px"
  d8.style.transition = ".3s all ease-in-out";
  d8.style.border = "none";
  d8.style.zIndex = "0";
}

document.getElementById("nine").onclick = showIm9;
document.getElementById("nine").onmouseout = hideIm9;

const d9 = document.getElementById("nine");
function showIm9() {
  d9.style.backgroundImage = "url('imgs/posteriorspine.jpg')";
  d9.style.backgroundRepeat = "no-repeat";
  d9.style.padding = "430px 20px 0px 560px";
  d9.style.margin = "30px 0 0 300px";
  d9.style.transition = ".3s all ease-in-out";
  d9.style.transform = "rotate(0deg)";
  d9.style.border = "1px solid black";
  d9.style.zIndex = "10";
  // d2.style.objectFit = "cover"
}

function hideIm9() {
  d9.style.backgroundImage = "none";
  d9.style.padding = "80px 8px";
  d9.style.margin = "120px 0 0 328px"
  d9.style.transition = ".3s all ease-in-out";
  d9.style.border = "none";
  d9.style.zIndex = "0";
}


