Papa.parse('dataset_2191_sleep.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
 
  complete: function(results) {
 
    console.log("running");
    console.log(results.data);
    const tbody = document.querySelector('#dataTable tbody');
 
    results.data.forEach(row => {
      results.data.forEach(row => {
 
      const tr = document.createElement('tr');
 
      tr.innerHTML = `
        <td>${row.Body_weight}</td>
        <td>${row.Brain_weight}</td>
        <td>${row.Max_life_sapn}</td>
        <td>${row.Gestation_time}</td>
        <td>${row.Predation_index}</td>
        <td>${row.Sleep_exposure}</td>
        <td>${row.index}</td>
        <td>${row.Total_sleep}</td>
      `;

        tbody.appendChild(tr); 
    });
  },
 
  error: function(err) {
    console.error("FAILED");
    console.error(err);
  }
});



        
 
    new Chart(
      document.getElementById('revenueChart'),
      {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Streams for US Monthly Minimum Wage',
            data: values,
            backgroundColor: '#4e79a7'
          }]
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Streams for US Monthly Minimum Wage'
              }
            }
          }
        }
      }
    );
  }
});
function cleanNumber(value) {
  return Number(
    String(value).replace(/[^0-9.-]/g, '')
  );
}
