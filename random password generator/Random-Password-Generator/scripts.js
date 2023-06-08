
    let randomPassword = () => {
        let slide = document.getElementById("slide").value;
        let pass = document.getElementById("password");
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
        let password = "";
        for ( var x = 0; x <= slide; x++ ) {
            password = password + chars.charAt(Math.floor(Math.random() * Math.floor(chars.length - 1)));
            pass.value = password;
        }
    }

let lengthy = document.getElementById("length");
lengthy.innerHTML = "Length: 25";
  
slide.oninput = () => {
    if ( slide.value > 0 ) {
        lengthy.innerHTML = `Length: ${slide.value}`
    } else {
        lengthy.innerHTML = "Length: 1";
    }
}
  
let copyPassword = () => {
    let pass = document.getElementById("password");
    pass.select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}