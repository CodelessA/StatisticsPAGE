
    const ctx = document.getElementById('silnikChart').getContext('2d');
const silnikChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Spalinowy', 'Hybrydowy', 'Elektryczny'],
    datasets: [{
      data: [30, 15, 5], // przykładowe dane
      backgroundColor: ['#ff4c4c', '#4cafff', '#4cff88']
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#eee'
        }
      }
    }
  }
});

const gen = document.getElementById('gender').getContext('2d');
const gender = new Chart(gen, {
  type: 'pie',
  data: {
    labels: ['Kobieta', 'Mężczyzna', 'Inna'],
    datasets: [{
      data: [30, 15, 5], 
      backgroundColor: ['#ff4c4c', '#4cafff', '#4cff88']
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#eee'
        }
      }
    }
  }
});

const przyszloscCtx = document.getElementById('przyszloscChart').getContext('2d');
const przyszloscChart = new Chart(przyszloscCtx, {
  type: 'pie',
  data: {
    labels: ['Elektryczne', 'Hybrydowe', 'Wodorowe'],
    datasets: [{
      data: [10, 15, 25],
      backgroundColor: ['#4cff88', '#4cafff', '#ff4c4c']
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


const miejsceCtx = document.getElementById('miejsceChart').getContext('2d');
const miejsceChart = new Chart(miejsceCtx, {
  type: 'pie',
  data: {
    labels: ['Wieś', 'Małe miasto', 'Średnie miasto', 'Duże miasto'],
    datasets: [{
      data: [8, 10, 20, 12], // przykładowe dane, dostosuj jeśli masz dokładne
      backgroundColor: ['#4cff88', '#ffb84c', '#4cafff', '#ff4c4c']
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

const wyksztalcenieCtx = document.getElementById('wyksztalcenieChart').getContext('2d');
const wyksztalcenieChart = new Chart(wyksztalcenieCtx, {
  type: 'bar',
  data: {
    labels: ['Podstawowe', 'Zawodowe', 'Średnie', 'Wyższe'],
    datasets: [{
      label: 'Liczba respondentów',
      data: [5, 10, 20, 15], // przykładowe dane, dostosuj
      backgroundColor: ['#ff4c4c', '#ff7f50', '#4cafff', '#4cff88']
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        ticks: { color: '#eee' },
        grid: { color: '#444' }
      },
      y: {
        ticks: { color: '#eee' },
        grid: { color: '#444' }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});


