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
document.getElementById("contact-form").addEventListener("submit", function (event) {
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

document.addEventListener("DOMContentLoaded", function() {
  let likeButton = document.querySelector('.like');
  let empty = './assets/heart-outline.png'
  let filled = './assets/heart-fill.png'
  let isEmptyImg = true;

  likeButton.addEventListener('click', () =>{
    likeButton.classList.remove('clicked')
    void likeButton.offsetWidth;
    // likeButton.classList.add('clicked');

    if(isEmptyImg){
      likeButton.src = filled;
      likeButton.classList.add('clicked')
      // likeButton.classList.add('pops')
      createScalingFadeEffect(likeButton);
    }else{
      likeButton.src = empty;
      // likeButton.classList.remove('clicked');
    }

    // Call the function to create the scaling and fading effect
    // createScalingFadeEffect(likeButton);

    //toggle the boolean for next click
    isEmptyImg = !isEmptyImg;
  }) 
})

function createScalingFadeEffect(originalImage) {
  // Get the bounding box of the original image (heart icon)
  const imageRect = originalImage.getBoundingClientRect();

  // Create a clone of the image (heart icon)
  const clone = originalImage.cloneNode(true);
  clone.classList.add('clone-heart');

  // Set the initial position and size of the clone to match the original image
  // clone.style.position = 'absolute';
  clone.style.width = `${imageRect.width}px`;
  clone.style.height = `${imageRect.height}px`;
  clone.style.top = `${imageRect.top + window.scrollY}px`;
  clone.style.left = `${imageRect.left + window.scrollX}px`;
  // clone.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
  // clone.style.zIndex = 10;

  // Append the clone to the body
  document.body.appendChild(clone);

  // Add the fade-out and scale-up animation
  setTimeout(() => {
    clone.style.transform = 'scale(2)';  // Scale up
    clone.style.opacity = 0;  // Fade out
  }, 10); // Slight delay to apply the animation after positioning

  // Remove the clone after the animation completes
  clone.addEventListener('transitionend', () => {
    clone.remove();
  });
}


// implementing like animation from YT
document.addEventListener("DOMContentLoaded", function () {
  const contentElements = document.querySelectorAll(".like-content");

  contentElements.forEach((content) => {
    content.addEventListener("click", function () {
      const heartElements = document.querySelectorAll(".heart");
      heartElements.forEach((heart) => {
        heart.classList.toggle("heart-active");
      });
    });
  });
});
