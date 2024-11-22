document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Array of slide objects, each containing a title, description, image URL, and text
const slides = [
  {
    title: 'Feedback Slide 1',
    description: "This was the first feedback I ever got for my website which was from Veerle which helped me expand it and suit me a lot more than what it used to be before. She told me to make it more playful and creative since it really lacked creativity and it seemed way too non-human as if, however thanks to her points I made it what it is you see right now",
    image: 'images/feedback.png', // 
    text: 'First feedback.'
  },
  {
    title: 'Feedback Slide 2',
    description: 'This checkpoint was made by Veerle as well where she gave me a suggestion on as to how I should structure the information and feedback I have gained from the teachers about the portfolio and everything else. Its basically crucial to be understanding and well written since its one of the main ways they can grade us properly.',
    image: 'images/feedback1.png',
    text: 'Second feedback.'
  },
  {
    title: 'Feedback Slide 3',
    description: '',
    image: 'placeholder-image3.jpg',
    text: 'Description for image 3.'
  }
];

let currentSlide = 0;

// Function to display the current slide's content
function showSlide(index) {
  const container = document.getElementById('container');
  container.style.opacity = 0; // Fade out

  setTimeout(() => {
    const slide = slides[index];
    container.innerHTML = `
      <h2 class="section-title">${slide.title}</h2>
      <p>${slide.description}</p>
      <img src="${slide.image}" alt="Slide Image ${index + 1}">
      <p>${slide.text}</p>
    `;
    container.style.opacity = 1; // Fade in
  }, 300);
}

// Functions to navigate slides
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize with the first slide
showSlide(currentSlide);

