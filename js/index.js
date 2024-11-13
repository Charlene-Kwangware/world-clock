function updateTime() {
  let pretoriaElements = document.querySelector("#pretoria");
  let pretoriaDate = pretoriaElements.querySelector(".date");
  let pretoriaTime = pretoriaElements.querySelector(".time");
  pretoriaMoment = moment.tz("Africa/Johannesburg");

  pretoriaDate.innerHTML = moment().format("Do MMMM YYYY");
  pretoriaTime.innerHTML = pretoriaMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let losAngelesElements = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElements.querySelector(".date");
  let losAngelesTime = losAngelesElements.querySelector(".time");
  losAngelesMoment = moment.tz("America/Los_Angeles");

  losAngelesDate.innerHTML = moment().format("Do MMMM YYYY");
  losAngelesTime.innerHTML = losAngelesMoment.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyoElements = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyoElements.querySelector(".time");
  tokyoMoment = moment.tz("America/Los_Angeles");

  tokyoDate.innerHTML = moment().format("Do MMMM YYYY");
  tokyoTime.innerHTML = tokyoMoment.format("h:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1000);
