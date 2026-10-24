/* //browser er info pawar jonnoi navigator use kora hoy
document.write("<h1>Navigator Object</h1>");
document.write(navigator.appName + "<br><br>");
document.write(navigator.language + "<br><br>");
document.write(navigator.appVersion + "<br><br>");
document.write(navigator.platform + "<br><br>");
document.write(navigator.userAgent + "<br><br>");
console.log(navigator);
*/
/*
window.addEventListener("online", () => {
  console.log("Connection ফিরে এসেছে!");
});

window.addEventListener("offline", () => {
  console.log("Connection বিচ্ছিন্ন হয়েছে!");
});*/

// console.log(navigator.deviceMemory);

/*//navigator and geolocation
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  },
  (error) => {
    console.log(error.message);
  }
);
*/

//clipboard with navigator
 async function copyText() {
    try {
      await navigator.clipboard.writeText("Hello JavaScript");
      //console.log("Text copied!");
      window.alert("Text copied!");
    } catch (error) {
      console.log("Copy failed:", error.message);
    }
  }

  document.querySelector("#copyBtn").addEventListener("click", copyText);