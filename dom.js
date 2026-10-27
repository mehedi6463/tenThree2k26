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

// DOM Working With Form Input
function formInput(a, b){
    let st = document.getElementById('num1').value;
    let nd = document.getElementById('num2').value;
    let z;
    if (z == NaN) {
        
        document.getElementsByTagName('p')[1].innerHTML= "enter number";
    }else{
        let z = parseFloat(st) + parseFloat(nd);
        document.getElementsByTagName('p')[0].innerHTML= "result is " + z;
    }
}