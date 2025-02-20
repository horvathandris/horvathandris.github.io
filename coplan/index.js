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

function getValidDateOrDefault(input, defaultValue) {
    const timestamp = Date.parse(input);
    return isNaN(timestamp) ? defaultValue : input;
}

const DEFAULT_START_DATE = "2025-01-04";

const startDateInput = document.getElementById("start_date");
startDateInput.value = getValidDateOrDefault(
    new URLSearchParams(window.location.search).get("start_date"),
    DEFAULT_START_DATE,
);
update();

startDateInput.addEventListener("input", update);