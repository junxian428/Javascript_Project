function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "wengyin777@gmail.com",
	Password : "w2000y07177",
	To : 'holeyiho@gmail.com',
	From : "wengyin777@gmail.com",
	Subject : "Internet Application Assignment",
	Body : "Hello, 25 April is the deadline of the assignment. Plesae submit!",
	}).then(
		message => alert("mail sent successfully")
	);
}

