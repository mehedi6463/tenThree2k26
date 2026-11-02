// https://crud.teamrabbil.com/api/v1/ReadProduct for get
// https://crud.teamrabbil.com/api/v1/CreateProduct for post
// https://crud.teamrabbil.com/api/v1/UpdateProduct for put

//Ajax get request
let showData =document.getElementById("data");


function getData(){
    let url ="https://crud.teamrabbil.com/api/v1/ReadProduct";
    let getMethod = { method: "GET"};

    fetch(url, getMethod)
    .then (response => response.json())
    .then (data => {
        showData.innerHTML = `Data <br> ${JSON.stringify(data)}`;
    })
    .catch (error => console.log("Error:", error));

}