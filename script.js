const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      ,
      "21:00",
    ],
    datasets: [
      {
        label: "Текущий день",
        data: [50521,100521,100521,150251,200521,200521,250521,300521,300521,400521,500521],
        borderWidth: 1,
      },
      {
        label: "Вчера",
        data: [20521,35512,45641,50241,100521,300521,400521,480521],
        borderWidth: 1,
      },
      {
        label: "Этот день недели",
        data: [50521,100521,100521,150251,225521,200521,250521,300521,300521,380241,400521],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        padding: {
          top: 50,
          bottom: 30,
        },
      },
      align: 'end',
    },
  },
});
