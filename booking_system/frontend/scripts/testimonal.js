  const testimonialContainer = document.getElementById("testimonial-container");
  const newTestimonialInput = document.getElementById("new-testimonial");
  const submitTestimonialButton = document.getElementById("submit-testimonial");

  submitTestimonialButton.addEventListener("click", () => {
    const newTestimonialText = newTestimonialInput.value;
    if (newTestimonialText.trim() !== "") {
      const testimonialElement = document.createElement("div");
      testimonialElement.classList.add("testimonial");
      testimonialElement.textContent = newTestimonialText;
      testimonialContainer.appendChild(testimonialElement);
      newTestimonialInput.value = ""; // Clear the input field
    }
  });