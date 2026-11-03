// https://crud.teamrabbil.com/api/v1/ReadProduct for get
// https://crud.teamrabbil.com/api/v1/CreateProduct for post
// https://crud.teamrabbil.com/api/v1/UpdateProduct for put

/*
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
*/
//Ajax post request
/*
function postData(){
    let url ="https://crud.teamrabbil.com/api/v1/CreateProduct";
    let bodyData = {

        Img: "images/product-1.jpg",
        ProductCode: "367",
        ProductName: "Phone",
        Qty: "300",
        TotalPrice: "30000",
    };
    let postMethod = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(bodyData)
    };
    fetch(url, postMethod)
    .then (response => response.json())
    .then (data => {
        document.getElementById("data").innerHTML = `Data... ${data.data}`;
    })
    .catch (error => { 
        document.getElementById("data").innerHTML = `Error... ${error}`; });
}

*/