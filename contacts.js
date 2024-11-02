let contactEntries = [];
let count = 0;

document.querySelector('#submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    let contactNumber = document.getElementById("contactNumbers").value;
    let homeNumber = document.getElementById("homeNumbers").value;
    let email = document.getElementById("email").value;

    let isValid = true;

    // Clear previous error messages
    document.getElementById("contactNumbersError").textContent = "";
    document.getElementById("emailError").textContent = "";

    if (!contactNumber || !homeNumber || !email) {
        alert("Please fill in the required fields");
        return;
    }

    if (!validateContactNumber(contactNumber)) {
        document.getElementById("contactNumbersError").textContent = "Please enter a valid 10-digit contact number.";
        isValid = false;
    }

    if (!validateHomeNumber(homeNumber)) {
        document.getElementById("homeNumbersErrors").textContent = "Please enter a valid 10-digit contact number.";
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (!isValid) return;

    // Add form data if validation passes
    let formData = {
        contactNumber: contactNumber,
        homeNumber: homeNumber,
        email: email
    };
    contactEntries.push(formData);
    count++;

    console.log("Total forms submitted: " + count);
    console.log("Form entries: ", contactEntries);

    // Reset the form fields
    document.getElementById("userContactDetails").reset();

    alert("Form submitted successfully!");
});

function validateContactNumber(contactNumber) {
    const contactNumberPattern = /^\d{10}$/;
    return contactNumberPattern.test(contactNumber);
}

function validateHomeNumber(homeNumber) {
    const contactNumberPattern = /^\d{10}$/; 
    return contactNumberPattern.test(homeNumber);
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
