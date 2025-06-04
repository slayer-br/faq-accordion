let questions = document.querySelectorAll(".faq-question");

questions.forEach((questionBtn) => {
  questionBtn.addEventListener("click", () => {
    const currentItem = questionBtn.closest(".faq-item");
    const currentAnswer = currentItem.querySelector(".faq-answer");
    const currentIcon = questionBtn.querySelector(".toggle-icon");
    const isOpen = currentItem.classList.contains("open");

    // Close all FAQs before open current
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".faq-answer").classList.remove("active");
      item.querySelector(".toggle-icon").src = "./assets/images/icon-plus.svg";
      item.querySelector(".faq-question").setAttribute("aria-expanded", false);
    });

    // Open current FAQ if not opened
    if (!isOpen) {
      currentItem.classList.add("open");
      currentAnswer.classList.add("active");
      currentIcon.src = "./assets/images/icon-minus.svg";
      questionBtn.setAttribute("aria-expanded", true);
    }
  });
});
