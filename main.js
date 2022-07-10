// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

const apiKey = "f61d4091bd18b304c8990b954517f2fb";
const input = document.querySelector("#input");
const form = document.querySelector(".form");
const submit = document.querySelector("#submit")
const showBox = document.querySelector(".show-box ul");
const msg = document.querySelector(".msg");

submit.addEventListener("click", get);

function get(event){
    event.preventDefault();
    let city = input.value; 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch (url)
        .then((Response) => Response.json())
        .then((data) => {
            const {main,weather , sys, name } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.icon`;
            const li = document.createElement("li");
            li.classList.add("list");
            const total =`
            <div class="city">
                <p class="city">${name}</p>
                <p class="country"> ${sys["country"]}</p>
            </div>
            <p class="degree">${Math.round(main["temp"])} </p>
            <figure>
                <img class="city-icon" src="${icon}" alt="">
            <figcaption>${weather[0]["description"]} </figcaption>
            </figure>`;
            li.innerHTML = total;
            showBox.appendChild(li);
            msg.innerHTML ="";

        })
        .catch(() => {
            msg.innerHTML = "the city not found!"
        })
    input.value ="";    
}