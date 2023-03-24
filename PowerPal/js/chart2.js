let Dani = [1.5, 1.7, 2.4, 7.1, 8.6, 8.2, 7, 3.8, 1.4]
const lineChart = new Chart(document.getElementById('canvas-1'), {
  type: 'line',
  data: {
    labels: ['0:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00','21:00','0:00'],
    datasets: [{
      label: '',
      backgoundColor: 'rgba(255, 255, 255, 1)',
      borderColor: 'darkgreen',
      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
      pointBorderColor: 'grey',
      data: Dani
    }]
  },
  options: {
    layout: {
      padding: {
        top: -10,
      },
    },
    plugins: { 
      title: {
        color: 'black',
        display: true,
        text: 'Dnevni pregled potrošnje:',
        font: {
          size: 24,
          weight: 'bold',
          family: 'Sofia Sans'
        }
      },
      legend: {
         display: false
        }, 
       },
         
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
          
        },
        ticks: {
          color: 'black'
        },
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: 'black'
        },
      }
    }
  }
}
);


const ctx = document.getElementById("canvas-2").getContext("2d");
const barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli"],
    datasets: [
      {
        label: "Monthly Kilowatts per Day Usage",
        backgroundColor: "rgba(0, 157, 0, 0.53)",
        borderColor: "rgba(220, 220, 220, 0.8)",
        hoverBackgroundColor: "rgba(0, 127, 0, 0.79)",
        data: [31.2, 41.2, 23.2, 11.6, 19.1, 22.4, 54.1],
        hoverBorderColor: "rgba(220, 220, 220, 1)",    
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        position: "bottom",
        text: "Prosječna mjesečna potrošnja",
        font: {
          size: 25,
          color: "black",
        },
      },
      legend: {
        display: false,
      },
      datalabels: {
        color: 'white',
        anchor: 'end',
        align: 'start',
        offset: -10,
        font: {
          size: 14,
        },
        formatter: function(value) {
          return Math.round(value * 10) / 10;
        }
      }
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        }
      }
    },
    
  },
});
const doughnutChart = new Chart(document.getElementById('canvas-3'), {
  type: 'doughnut',
  data: {
    labels: ['Veš mašina', 'Frižider', 'Bojler', 'Klima', 'Ostalo'],
    datasets: [{
      data: [9.3, 8.2, 7.7, 3.7, 3.3],
      backgroundColor: ['#ff1a1a', '#36A2EB', '#FFCE56', '#ff6600', '#ff66ff'],
      hoverBackgroundColor: ['#ff1a1a', '#36A2EB', '#FFCE56', '#ff6600', '#ff66ff']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        position: 'bottom',
        text: 'Mjesečna potrošnja kućnih aparata (kW per month)',
        font: {
          size: 25,
          weight: 'bold',
        }
      }
    }
  }
});