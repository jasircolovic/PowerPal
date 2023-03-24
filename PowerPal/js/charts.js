let Dani = [1.5, 6.7, 2.4, 6.1, 9.9, 10, 4.1, 4, 6.5, 3.4]
const lineChart = new Chart(document.getElementById('canvas-1'), {
  type: 'line',
  data: {
    labels: ['Ponedeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedelja'],
    datasets: [{
      label: 'Zadnjih 7 dana',
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
        text: 'Pregled potrošnje u posljednjih 7 dana:',
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

// MRSKO MI JE BILO ODVOJITI U POSEBNU SKRIPTU, -Haris

//SUMA DANA
let sum = 0;
for (let i = 0; i < 8; i++){
  sum += Dani[i];
}

//AVERAGE POTROSNJA
document.getElementById("avg").innerHTML = sum + " kW/d";

//AVERAGE POTROSNJA DAILY
let dailyKwh = Dani[6];
let dailyKwhPrice = dailyKwh * 0.28;
document.getElementById('daily').innerHTML = Math.round(dailyKwhPrice * 100.0) / 100.0 + ' BAM';

//ALERTS
let brojac = 0;
let nadprosjecniDani = [];
for (let i = 0; i <= Dani.length; i++){
  if (Dani[i] > 7.5){
    brojac = brojac + 1;
    nadprosjecniDani.push(Dani[i]);
  }
}

if (brojac >= 1){
  const upozorenje = document.createElement('div');
  const recenice = ['Upozorenje! Broj dana na kojim su očitana iznadprosječna potrošnja struje: ' + brojac] + '<br>';
  const recenice1 = ['Očitane vrijednosti su: ' + nadprosjecniDani];
  upozorenje.innerHTML = recenice + recenice1;
  upozorenje.className = 'alert';
  upozorenje.style.fontSize = '1.5vw';
  upozorenje.style.gridArea='alert';
  upozorenje.style.fontWeight = 'bold';
  upozorenje.style.marginBottom= '15%';

  const parentDiv = document.querySelector('.dashboard');
  parentDiv.appendChild(upozorenje);
  

}

