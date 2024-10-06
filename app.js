// function requiredField() {
//     // Create a new style element
//     const style = document.createElement('style');
//     document.head.appendChild(style);

//     // Add the placeholder styles dynamically
//     style.sheet.insertRule(`
//     ::placeholder {
//         color: red;
//         opacity: 0.75;
//     }`);
// }

//contact section
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const senderName = document.getElementById("name-form").value;
    const email = document.getElementById("email-form").value;
    const message = document.getElementById("message-form").value;

    try {
      // Construct the Gmail compose link
      const gmailLink =
        "https://mail.google.com/mail/?view=cm&fs=1&to=princesinghps1619@gmail.com" +
        "&su=" +
        encodeURIComponent("Contacting from Portfolio") +
        "&body=" +
        encodeURIComponent(
          `From: ${senderName} (${email}) \n\nMessage: ${message}`
        ) +
        "&tf=1";

      // Open Gmail in a new tab or window
      window.open(gmailLink, "_blank");
      alert("Opening Gmail compose window. Please review and send the email.");
    } catch (err) {
      console.error("Error occurred while trying to open Gmail:", err);
      alert("Oops! Something went wrong.");
    }
  });

//captcha
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}
let url =
  "https://recaptchaenterprise.googleapis.com/v1/projects/my-portfolio-1-437705/assessments?key=6Lc_P1gqAAAAAHcDjR0cR98lTzc42YGAUVL9dG2H";
fetch("./request.json") // Update with the actual file path
  .then((response) => response.json()) // Convert file data to JSON
  .then((jsonData) => {
    fetch("https://your-api-url.com/endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData), // Send the JSON data
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
});


//view count function
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.countapi.xyz/hit/prince-namespace/portfolio_1-viewCount")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("viewCounter").innerText = data.value;
      console.log("Count increased by 1");
    })
    .catch((error) => {
      console.error("Error fetching view count", error);
    });
});

//animation only on view screen
document.addEventListener("DOMContentLoaded", function() {
  let animateElements = document.querySelectorAll('.animate');

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

  animateElements.forEach(element => {
    observer.observe(element);
  });
});



// Counter
var counterContainer = document.querySelector("#viewCounter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});
