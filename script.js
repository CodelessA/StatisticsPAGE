
    const ctx = document.getElementById('silnikChart').getContext('2d');
    const silnikChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Spalinowy', 'Hybrydowy'],
        datasets: [{
          data: [10, 2], // Tu dane z Twojego obrazka: 10 spalinowych, 2 hybrydowe
          backgroundColor: ['#ff4c4c', '#4cafff'],
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: { color: '#eee' }
          }
        }
      }
    });
