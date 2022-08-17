// const txts = document.getElementsByClassName('text');
// let txtIndex = -1;

// function changeTxt() {
//   txtIndex++;

//   let currentNum = txtIndex % txts.length;
//   let nextNum = (txtIndex + 1) % txts.length;
//   let current = txts[0];
//   let next = txts[1];

//   setTimeout(function () {
//     current.classList.remove('is-active');
//   }, 2000);
//   setTimeout(function () {
//     current.style.display = 'none';
//     next.style.display = 'block';
//   }, 3000);

//   setTimeout(function () {
//     next.classList.add('is-active');
//   }, 3100);
// }

// function showNextTxt() {
//   setTimeout(changeTxt, 5200);
// }

// changeTxt();
// document.addEventListener('DOMContentLoaded', showNextTxt, false);

var text = ["Welcome to the Website"];
var counter = 0;
var elem = $(".text");
setTimeout(change, 3000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}