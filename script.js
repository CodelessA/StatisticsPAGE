
    //WIEK RESPONDENTÓW//////////////////////////////////////////////////////////
    const wiekCtx = document.getElementById('wiekChart').getContext('2d');
const wiekChart = new Chart(wiekCtx, {
  type: 'bar',
  data: {
    labels: ['18-25', '26-35', '36-45', '46-55', '56+'],
    datasets: [{
      label: 'Liczba respondentów',
      data: [24, 3, 2, 11, 2], 
      backgroundColor: ['#4cff88', '#4cafff', '#ffb84c', '#ff7f50', ' #531f93 ']
      
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

    //Typ silnika wybierany przez respondentów//////////////////////////////
    const ctx = document.getElementById('silnikChart').getContext('2d');
const silnikChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Spalinowy', 'Hybrydowy', 'Elektryczny', 'Wodorowy'],
    datasets: [{
      data: [11, 14, 5, 20], 
      backgroundColor: ['#ff4c4c', '#4cafff', '#4cff88', ' #531f93 '],
      offset: [40, 0, 0]
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
      data: [20, 30, 0], 
      backgroundColor: ['#ff4c4c', '#4cafff', '#4cff88'],
      offset: [40, 0, 0]
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
    labels: ['Elektryczne', 'Hybrydowe', 'Spalinowe'],
    datasets: [{
      data: [4, 0, 25],
      backgroundColor: ['#4cff88', '#4cafff', '#ff4c4c'],
      offset: [0, 0, 40]
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
      data: [8, 6, 14, 22], // przykładowe dane, dostosuj jeśli masz dokładne
      backgroundColor: ['#4cff88', '#ffb84c', '#4cafff', '#ff4c4c'],
      offset: [0, 0, 40, 0]
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
      data: [2, 0, 26, 22], 
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
    labels: ['do 3700 zł', '3700-5000 zł', '5000-9000 zł', 'powyżej 9000 zł'],
datasets: [{
  label: 'Liczba respondentów',
  data: [14, 13, 8, 15],
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
    labels: ['do 3700 zł', '3700-5000 zł', '5000-9000 zł', 'powyżej 9000 zł'],
    datasets: [
      {
        label: 'Spalinowy',
        data: [4, 3, 2, 2],  // ← wpisz prawdziwe wartości jak podasz dane
        backgroundColor: '#ff4c4c'
      },
      {
        label: 'Hybrydowy',
        data: [5, 4, 2, 3],  // ← wpisz prawdziwe wartości
        backgroundColor: '#4cafff'
      },
      {
        label: 'Elektryczny',
        data: [2, 1, 1, 1],  // ← wpisz prawdziwe wartości
        backgroundColor: '#4cff88'
      },
      {
        label: 'Wodorowy',
        data: [3, 5, 3, 9],  // ← wpisz prawdziwe wartości
        backgroundColor: '#ffaa4c'
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
    labels: ['Źródła informacji'],
    datasets: [
      {
        label: 'Opinie ekspertów',
        data: [40],
        backgroundColor: '#4cff88'
      },
      {
        label: 'Opinie znajomych',
        data: [20],
        backgroundColor: '#4cafff'
      },
      {
        label: 'Internet',
        data: [17],
        backgroundColor: '#ffaa4c'
      },
      {
        label: 'Reklamy',
        data: [4],
        backgroundColor: '#ff4c4c'
      }
    ]
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
        data: [3, 4, 1, 2], 
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
      data: [35, 30, 10, 12, 18, 20], 
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


const wiekSilnikCtx = document.getElementById('wiekSilnikChart').getContext('2d');
const wiekSilnikChart = new Chart(wiekSilnikCtx, {
  type: 'bar',
  data: {
    labels: ['18-25', '26-35', '36-45', '46-55'],
    datasets: [
      {
        label: 'Spalinowy',
        data: [8, 7, 6, 4], 
        backgroundColor: '#ff4c4c'
      },
      {
        label: 'Hybrydowy',
        data: [7, 5, 3, 1],
        backgroundColor: '#4cafff'
      },
      {
        label: 'Elektryczny',
        data: [5, 3, 1, 0],
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

