//Blog extension and change

document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const post = event.target.closest(".blog-post");
            post.classList.toggle("expanded");
            event.preventDefault();
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const post = event.target.closest(".blog-post");
            const expandedContent = post.querySelector(".expanded-content");
            const readMoreText = post.querySelector(".read-more");
            
            if (expandedContent.style.display === "none" || expandedContent.style.display === "") {
                expandedContent.style.display = "block";
                readMoreText.textContent = "Read less";
            } else {
                expandedContent.style.display = "none";
                readMoreText.textContent = "Read more";
            }
            
            event.preventDefault();
        });
    });
});
// Hamburger

const hamburger = document.querySelector('.hamburger-menu');
const navigationBar = document.querySelector('.sidebar');
const aside = document.querySelector('.aside');
let closeSidebar = document.getElementById("close-sidebar");

hamburger.addEventListener('click', () => {
    navigationBar.classList.toggle('active');
    aside.classList.toggle('active');
});

closeSidebar.onclick =()=> {
  navigationBar.classList.toggle('active');
  aside.classList.toggle('active');
}






// Ai


const submitBtn = document.getElementById("submitBtn");
const userInput = document.getElementById("userInput");
const resp = document.getElementById("aiResponse");

submitBtn.addEventListener("click", async () => {
    const problem = userInput.value;
  //response.textContent = aiResponse;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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' // Replace with your API key
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo', // The ChatGPT model
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: problem }
      ]
    })
  })
  const responseData = await response.json();

  const aiResponse = responseData.choices[0].message.content;
  resp.textContent=aiResponse

})
//exercise breathing
const breathingAnimation = document.getElementById('breathing-animation');

  setTimeout(() => {
    breathingAnimation.style.animationPlayState = 'paused';
  }, 8000); // 8 seconds total for inhaling and exhaling