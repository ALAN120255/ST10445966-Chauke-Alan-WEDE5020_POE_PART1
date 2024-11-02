// Array to store form entries
let formEntries = [];

// Counters for form submissions and case types
let submissionCount = 0;
let caseCounts = {
    domesticViolence: 0,
    sexualHarassment: 0,
    genderBasedViolence: 0,
    childAbuse: 0,
    childNeglect: 0
};

// Add an event listener for form submission
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get personal details from the form
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lastname").value;
    let gender = document.getElementById("gender").value;
    let contactNumber = document.getElementById("tenz").value;
    let email = document.getElementById("email").value;

    // Check if all fields are filled
    if (!firstName || !lastName || !gender || !contactNumber || !email) {
        alert("Please fill in all required fields.");
        return;
    }

    // Check which cases are reported
    let isDomesticViolence = document.querySelector('input[id="checkbox1"]').checked;
    let isSexualHarassment = document.querySelector('input[id="checkbox2"]').checked;
    let isGenderBasedViolence = document.querySelector('input[id="checkbox3"]').checked;
    let isChildAbuse = document.querySelector('input[id="checkbox4"]').checked;
    let isChildNeglect = document.querySelector('input[id="checkbox5"]').checked;

    if (!isDomesticViolence && !isSexualHarassment && !isGenderBasedViolence && !isChildAbuse && !isChildNeglect) {
        document.getElementById("errorMessage").textContent = "Please tick at least one checkbox.";
        return;
    } else {
         // Clear error message if checkboxes are selected
        document.getElementById("errorMessage").textContent = "";
    }

    // Create an object for the form data (personal details + cases reported)
    let formData = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        contactNumber: contactNumber,
        email: email,
        reportedCases: {
            domesticViolence: isDomesticViolence,
            sexualHarassment: isSexualHarassment,
            genderBasedViolence: isGenderBasedViolence
            ,
            childAbuse: isChildAbuse,
            childNeglect: isChildNeglect
        }
    };

    // Add the form data to the array
    formEntries.push(formData);

    // Update the form submission count
    submissionCount++;

    // Update the case counts based on user selection
    if (isDomesticViolence) caseCounts.domesticViolence++;
    if (isSexualHarassment) caseCounts.sexualHarassment++;
    if (isGenderBasedViolence) caseCounts.genderBasedViolence++;
    if (isChildAbuse) caseCounts.childAbuse++;
    if (isChildNeglect) caseCounts.childNeglect++;

    // Display success message and log the updated arrays
    alert("Form submitted successfully!");

    console.log("Total forms submitted: " + submissionCount);
    console.log("Case counts: ", caseCounts);
    console.log("Form entries: ", formEntries);  // Logs all the personal details

    // Optionally, you can clear the form after submission
    document.getElementById("consultationForm").reset();
});
