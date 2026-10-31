//dom object
/*function domDemo(){
    // let info = document.cookie;
    // let info = document.domain;
    // let info = document.title;
    // let info = document.URL;
    // let info = document.characterSet;
    // let info = document.referrer;
    // let info = document.readyState;
    // let info = document.links;
    // let info = document.images;
    let info = document.forms;
    document.getElementsByTagName('p')[0].innerHTML= info;
}*/

//document replace
/*
function domDemo2(){
    document.open('text/html', 'replace');
    document.write('hi');
    document.close();

}
*/
//with new window
/*function myFunction(){
    var w=window.open();
    w.document.open();
    w.document.write('Hello Window');
    w.document.close();
}*/

//counting with length
/*function lengthCount(){
    let items = document.getElementsByTagName('p');
    let itemcount =items.length;
    alert('total p tag is ' + itemcount);
}*/

// DOM Working With Form Input with css manupulate
/*function formInput(a, b){
    let st = document.getElementById('num1').value;
    let nd = document.getElementById('num2').value;
    let ptag =document.querySelector('.ptag')
    let z;
    if (z === 0) {
        
        document.getElementsByTagName('p')[1].innerHTML= "enter number";
    }else{
        let z = parseFloat(st) + parseFloat(nd);
        let htmlTag = document.getElementsByTagName('p')[0];
        htmlTag.innerHTML= "result is " + z;
        htmlTag.style.color = "red";
        htmlTag.style.fontSize = "24px";
    }
}*/

//dom with css manupulate
function styleAdd(){
//with using varriable
let stlAdd = document.querySelector('#style');
stlAdd.classList.add('text-primary');
}

function styleRemove (){
    //without using varriable
    document.querySelector('#style').classList.remove('text-primary'); 

}

//button toggle
document.querySelector('#btnToggle');
btnToggle.addEventListener("click", function () {
  title.classList.toggle("style");
});