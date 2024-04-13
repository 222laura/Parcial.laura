document.addEventListener('DOMContentLoaded', function () {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then((response) => response.json())
      .then((data) => {
        const digimonList = document.getElementById('digimon-list');
        data.forEach((digimon) => {
          const listItem = document.createElement('li');
          listItem.classList.add('digimon-item');
          listItem.innerHTML = `
                  <h2>${digimon.name}</h2>
                  <img src="${digimon.img}" alt="${digimon.name}">
                  <p>Level: ${digimon.level}</p>
              `;
          digimonList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });