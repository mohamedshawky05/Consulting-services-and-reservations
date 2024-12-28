document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const service = document.querySelector("#service").value;
  const date = document.querySelector("#date").value;

  fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, service, date }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("تم الحجز بنجاح!");
    })
    .catch((err) => {
      console.error(err);
      alert("حدث خطأ أثناء الحجز.");
    });
});