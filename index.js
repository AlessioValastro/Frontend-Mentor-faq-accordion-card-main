const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((faq) => {
      faq.classList.remove("active");
    });
    faq.classList.toggle("active");
  });
});
