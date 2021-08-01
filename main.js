document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.querySelector("#signIn");
	const registerForm = document.querySelector("#signUp");
	document.querySelector("#signInForm").addEventListener("click", e => {
		e.preventDefault();
		registerForm.style.display = "none";
		document.querySelector(".welcome").style.display = "none";
		loginForm.style.display = "block";
		hideInput();
	});
	document.querySelector("#signUpForm").addEventListener("click", e => {
		e.preventDefault();
		document.querySelector("#login_email").value = '';
		document.querySelector("#login_pass").value = '';
		loginForm.style.display = "none";
		document.querySelector(".welcome").style.display = "none";
		registerForm.style.display = "block";
	});
});
var hideInput = function() {
	document.querySelector("#signup_name").value = '';
	document.querySelector("#signup_email").value = '';
	document.querySelector("#signup_pass").value = '';
	document.querySelector("#confirm_signup_pass").value = '';
	document.querySelector("#message").innerHTML = '';
}

function signup() {
	var email = document.querySelector("#signup_email").value;
	var pass = document.querySelector("#confirm_signup_pass").value;
	var name = document.querySelector("#signup_name").value;
	var count = 0;
	for(var i = 0; i < localStorage.length; i++) {
		if(localStorage.key(i) == JSON.stringify(email)) {
			count = 1;
			break;
		} else {
			count = 0;
		}
	}
	if(count == 1) {
		alert("You are already a member");
		hideInput();
	} else {
		if(name == '' || email == '' || pass == '') {
			alert("Please,Enter all details!")
			return;
		}
		localStorage.setItem(JSON.stringify(email), JSON.stringify(pass));
    alert("You are Registered!");
    document.querySelector("#signUp").style.display = "none";
		document.querySelector(".welcome").style.display = "none";
		document.querySelector("#signIn").style.display = "block";
		hideInput();
		checkInput();
   
	}
}

function login() {
	var email_login = document.querySelector("#login_email").value;
	var pass_login = document.querySelector("#login_pass").value;
	if(email_login == '' || pass_login == '') {
		alert("Please Enter all details");
		return;
	}
	if(localStorage.getItem(JSON.stringify(email_login)) == JSON.stringify(pass_login)) {
		homePage(email_login);
	} else {
		alert("Email or password incorrect");
	}
}

function homePage(email) {
	document.querySelector(".welcome").innerHTML = "Welcome " + email + " !";
	document.querySelector("#signIn").style.display = "none";
	document.querySelector(".welcome").style.display = "block";
	var a = document.createElement("a");
	var linkText = document.createTextNode("Logout");
	a.appendChild(linkText);
	a.title = "Logout";
	a.href = "#";
	a.className = "logoutLink";
	a.href = "index.html";
	document.body.appendChild(a);
}

function logout() {
	alert("Shankar");
	document.querySelector("#login_email").value = '';
	document.querySelector("#login_pass").value = '';
	document.querySelector(".welcome").style.display = "none";
	document.querySelector("#signIn").style.display = "block";
	login();
}
var check = function() {
	if(document.getElementById('signup_pass').value == document.getElementById('confirm_signup_pass').value) {
		document.getElementById('message').style.display = 'none';
	} else {
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Not Matching';
	}
}
