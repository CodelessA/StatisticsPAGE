
    const wiekCtx = document.getElementById('wiekChart').getContext('2d');
const wiekChart = new Chart(wiekCtx, {
  type: 'bar',
  data: {
    labels: ['18-25', '26-35', '36-45', '46-55', '56+'],
    datasets: [{
      label: 'Liczba respondentów',
      data: [20, 15, 10, 5, 0], // przykładowe dane
      backgroundColor: ['#4cff88', '#4cafff', '#ffb84c', '#ff7f50', '#444']
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

const dochodCtx = document.getElementById('dochodChart').getContext('2d');
const dochodChart = new Chart(dochodCtx, {
  type: 'bar',
  data: {
    labels: ['< 2000 zł', '2000-4000 zł', '4000-6000 zł', '> 6000 zł'],
    datasets: [{
      label: 'Liczba respondentów',
      data: [8, 15, 17, 10], // przykładowe dane, bogata rozkładówka :)
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


const dochodSilnikCtx = document.getElementById('dochodSilnikChart').getContext('2d');
const dochodSilnikChart = new Chart(dochodSilnikCtx, {
  type: 'bar',
  data: {
    labels: ['< 2000 zł', '2000-4000 zł', '4000-6000 zł', '> 6000 zł'],
    datasets: [
      {
        label: 'Spalinowy',
        data: [6, 10, 12, 5], // przykładowe dane
        backgroundColor: '#ff4c4c'
      },
      {
        label: 'Hybrydowy',
        data: [1, 3, 4, 3],
        backgroundColor: '#4cafff'
      },
      {
        label: 'Elektryczny',
        data: [1, 2, 1, 2],
        backgroundColor: '#4cff88'
      }
    ]
  },
  options: {
    scales: {
      x: {
        ticks: { color: '#eee' },
        grid: { color: '#444' },
        stacked: false
      },
      y: {
        ticks: { color: '#eee' },
        grid: { color: '#444' }
      }
    },
    plugins: {
      legend: {
        labels: { color: '#eee' }
      }
    }
  }
});


const wyksztalcenieTechnologiaCtx = document.getElementById('wyksztalcenieTechnologiaChart').getContext('2d');
const wyksztalcenieTechnologiaChart = new Chart(wyksztalcenieTechnologiaCtx, {
  type: 'bar',
  data: {
    labels: ['Podstawowe', 'Zawodowe', 'Średnie', 'Wyższe'],
    datasets: [
      {
        label: 'Elektryczne',
        data: [1, 2, 5, 7], // przykładowe dane — dostosuj wedle rzeczywistości
        backgroundColor: '#4cff88'
      },
      {
        label: 'Hybrydowe',
        data: [2, 3, 6, 5],
        backgroundColor: '#4cafff'
      },
      {
        label: 'Wodorowe',
        data: [0, 1, 4, 6],
        backgroundColor: '#ff4c4c'
      }
    ]
  },
  options: {
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
      legend: {
        labels: { color: '#eee' }
      }
    }
  }
});


const infoZrodlaCtx = document.getElementById('infoZrodlaChart').getContext('2d');
const infoZrodlaChart = new Chart(infoZrodlaCtx, {
  type: 'bar',
  data: {
    labels: ['Reklamy', 'Opinie znajomych', 'Opinie ekspertów', 'Internet'],
    datasets: [
      {
        label: 'Podstawowe',
        data: [3, 4, 1, 2], // przykładowe liczby wskazań
        backgroundColor: '#ff4c4c'
      },
      {
        label: 'Zawodowe',
        data: [4, 5, 2, 3],
        backgroundColor: '#ff7f50'
      },
      {
        label: 'Średnie',
        data: [5, 6, 5, 7],
        backgroundColor: '#4cafff'
      },
      {
        label: 'Wyższe',
        data: [2, 3, 6, 8],
        backgroundColor: '#4cff88'
      }
    ]
  },
  options: {
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
      legend: {
        labels: { color: '#eee' }
      }
    }
  }
});

const czynnikiCtx = document.getElementById('czynnikiChart').getContext('2d');
const czynnikiChart = new Chart(czynnikiCtx, {
  type: 'bar',
  data: {
    labels: ['Cena', 'Koszty eksploatacji', 'Ekologia', 'Marka i design', 'Zasięg', 'Wydajność silnika'],
    datasets: [{
      label: 'Liczba wskazań',
      data: [35, 30, 10, 12, 18, 20], // przykładowe dane, Ty podstaw swoje
      backgroundColor: ['#4cff88', '#4cafff', '#ff4c4c', '#ff7f50', '#ffa64c', '#4c88ff']
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

