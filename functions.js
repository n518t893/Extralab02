function validate() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass1.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (pass2.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (pass1 !== pass2) {
        alert("The passwords do not match!");
    } else {
        alert("Everything is good!")
    }
}

function togglePassword(inputId) {
    var input = document.getElementById(inputId);
    var icon = document.getElementById(`${inputId}-icon`);

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
}

function update() {
    // Get RGB values for border
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;

    // Get border width
    var border_width = document.getElementById("border_width").value;

    // Get RGB values for background
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    // Set CSS properties
    var para = document.getElementById("paragraph");
    para.style.borderColor = `rgb(${border_R}, ${border_G}, ${border_B})`;
    para.style.borderWidth = `${border_width}px`;
    para.style.backgroundColor = `rgb(${bg_R}, ${bg_G}, ${bg_B})`;
}