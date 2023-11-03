const key = "761d2bfbc4cf5ed7d0f16c2a9070f14c"

const innerDados = (dados) => {
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".weather").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-cloud").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    innerDados(dados)
}

const onClick = () => {
    const city = document.querySelector('.input-city').value

    searchCity(city);
}
