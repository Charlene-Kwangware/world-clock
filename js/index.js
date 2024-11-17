function updateTime() {
  let pretoriaElements = document.querySelector("#pretoria");
  let pretoriaDate = pretoriaElements.querySelector(".date");
  let pretoriaTime = pretoriaElements.querySelector(".time");
  pretoriaMoment = moment.tz("Africa/Johannesburg");

  pretoriaDate.innerHTML = pretoriaMoment.format("Do MMMM YYYY");
  pretoriaTime.innerHTML = pretoriaMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let losAngelesElements = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElements.querySelector(".date");
  let losAngelesTime = losAngelesElements.querySelector(".time");
  losAngelesMoment = moment.tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesMoment.format("Do MMMM YYYY");
  losAngelesTime.innerHTML = losAngelesMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyoElements = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyoElements.querySelector(".time");
  tokyoMoment = moment.tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoMoment.format("Do MMMM YYYY");
  tokyoTime.innerHTML = tokyoMoment.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTime = event.target.value;
  if (cityTime === "current") {
    cityTime = moment.tz.guess();
  }
  let cityTimeElement = cityTime
    .split("/")[1]
    .replace("Harare", "Mufakose")
    .replace("_", " ");

  let cityElement = document.querySelector("#cities");
  let cityTimeZone = moment.tz(cityTime);

  cityElement.innerHTML = `
 <div class="cities" id="">
          <div>
            <h2>${cityTimeElement}</h2>
            <div class="date">${cityTimeZone.format("Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTimeZone.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);
setInterval(updateTime, 1000);
