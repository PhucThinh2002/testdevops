function submitContactForm(name, email) {
  if (name && email) {
    console.log("Contact form submitted by " + name + " (" + email + ")");
  } else {
    console.log("Please fill all fields");
  }
}