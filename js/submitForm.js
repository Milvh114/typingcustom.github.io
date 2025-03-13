let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = new FormData(form);
  let msg = document.querySelector("#msg");
  let submitBtn = document.querySelector("#submit");

  // Disable submit button and show a loading state
  submitBtn.value = "Submitting...";
  submitBtn.disabled = true;

  fetch(
    "https://script.google.com/macros/s/AKfycbzqxuQBw44BvnaafJtTg02sRDKHoEzdOHyqKaHzyu3NjF98WC00UoNE1YahizKgyzj3Lw/exec",
    {
      method: "POST",
      body: data,
      mode: "no-cors",
    }
  ).then((res) =>
    res.text().then((data) => {
      // Display the success message and make it visible
      msg.innerHTML = "Form sent successfully!";
      msg.classList.remove("hidden");
      msg.classList.add("visible");

      // Reset the submit button
      submitBtn.value = "Submit";
      submitBtn.disabled = false;

      // Optionally hide the message after a few seconds
      setTimeout(() => {
        msg.classList.remove("visible");
        msg.classList.add("hidden");
      }, 3000); // Message will disappear after 3 seconds
    })
  );
});
