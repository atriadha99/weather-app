document.getElementById('getWeather').addEventListener('click', function () {
  const city = document.getElementById('city').value.trim();
  if (!city) {
    alert("Masukkan nama kota terlebih dahulu.");
    return;
  }

  const apiKey = '5080ca5d53678cbfdbeeca10936254b8'; // ← API Key kamu
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Kota tidak ditemukan.");
      }
      return response.json();
    })
    .then(data => {
      // Menampilkan data cuaca ke HTML
      document.getElementById('location').textContent = data.name;
      document.getElementById('temperature').textContent = `${data.main.temp} °C`;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      // Tampilkan hasil cuaca
      document.getElementById('weather').classList.remove('hidden');
    })
    .catch(error => {
      alert(error.message);
      console.error("Error fetching weather:", error);
    });
});
