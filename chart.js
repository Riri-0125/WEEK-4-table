Papa.parse('dataset_2191_sleep.csv', {
  download: true,
  header: true,
  skipEmptyLines: true,
 
  complete: function(results) {
 
    console.log("running");
    console.log(results.data);
    
    const tbody = document.querySelector('#datatable tbody');
    
    const labels = [];
    const values = [];
 
    results.data.forEach((row,index) => {
      
      const tr = document.createElement('tr');
 
      tr.innerHTML = `
        <td>${row.body_weight}</td>
        <td>${row.brain_weight}</td>
        <td>${row.max_life_sapn}</td>
        <td>${row.gestation_time}</td>
        <td>${row.predation_index}</td>
        <td>${row.sleep_exposure}</td>
        <td>${row.danger_index}</td>
        <td>${row.total_sleep}</td>
      `;

        tbody.appendChild(tr); 
        labels.push(`Animal ${index + 1}`);
        values.push(Number(row.total_sleep));
    });
  },
 




        
 // Bar chart
    new Chart(
      document.getElementById('sleepChart'),
      {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Total sleep',
            data: values,
          }]
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Total sleep (hours)'
              }
            }
            x: {
                title: {
                display: true,
                text: 'Animal'
          }
        }
      }
    );
  }
});
error: function(err) {
        console.error("FAILED");
        console.error(err);
    }
});
