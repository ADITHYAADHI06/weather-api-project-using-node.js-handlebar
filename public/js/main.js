const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const city_Name = document.getElementById("city_Name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector(".middle_layer");
console.log(data_hide);

const getInfo = async (event) => {
  event.preventDefault();
  let city_Val = city_name.value;
  if (city_Val === "") {
    city_Name.innerText = `Plzz write the name Before you search`;
    data_hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_Val}&units=metric&appid=8be14e82b1a2433e1c3843342cac9d52`;
      const responce = await fetch(url);
      const data = await responce.json();
      const arrData = [data];
      temp_real_val.innerText = arrData[0].main.temp;
      city_Name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
      data_hide.classList.remove("data_hide");

      const tempMood = arrData[0].weather[0].main;

      //condition to check sunny or cloudy
      if (tempMood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }
    } catch {
      city_Name.innerText = `Plzz enter the city name properly`;
      data_hide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);

const day = document.querySelector("#day");
const today_date = document.querySelector("#today_date");

const getCurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let currentTime = new Date();
  let day = weekday[currentTime.getDay()];
  return day;
};

const getCurrentTime = () => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  var now = new Date();
  var month = months[now.getMonth() + 1];
  var date = now.getDate();

  return `${date} ${month}`;
};

day.innerHTML = getCurrentDay();
today_date.innerHTML = getCurrentTime();
