let checkbox = document.querySelector('#checkbox');
let root = document.documentElement;
let isDarkModeOn = false;
checkbox.addEventListener('click',function(){
    if(isDarkModeOn === false) {
        root.style.setProperty('--mainColor' , '#1A1A1A');
        root.style.setProperty('--varblack','white');
        isDarkModeOn = true;
    }
    else {
        root.style.setProperty('--mainColor','white');
        
        root.style.setProperty('--varblack','black');
        isDarkModeOn = false;
    }
})
function send() {
        var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("messagebox").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", sending(), true);
  xhttp.send();
}
function sending() {
    var message = document.getElementById("msg").value;
    if(message!='') {
        messagebox.innerHTML += `<div class = "sendedmsg">${message}</div>`
        msg.value = '';
    }
    
}