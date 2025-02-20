function update() {
  const now = new Date();
  const duration = 2 * (now - new Date(startDateInput.value));
  const endDate = new Date();
  endDate.setMilliseconds(now.getMilliseconds() + duration);
  document.getElementById("end_date").innerHTML = endDate.toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    },
  );
}

const startDateInput = document.getElementById("start_date");
startDateInput.value = "2025-01-04";
update();

startDateInput.addEventListener("input", update);
