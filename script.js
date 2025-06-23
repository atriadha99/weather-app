document.getElementById('getWeather').addEventListener('click', function () {
  const city = document.getElementById('city').value.trim();
  if (!city) {
    alert("Masukkan nama kota terlebih dahulu.");
    return;
  }

  const apiKey = '5080ca5d53678cbfdbeeca10936254b8'; // ← API Key kamu
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=id`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Kota tidak ditemukan.");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('location').textContent = data.name;
      document.getElementById('temperature').textContent = `${data.main.temp} °C`;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById('weather').classList.remove('hidden');
    })
    .catch(error => {
      alert(error.message);
      console.error("Error fetching weather:", error);
    });
});

// Toggle Dark Mode
document.getElementById('toggleDarkMode').addEventListener('click', function () {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  this.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});
