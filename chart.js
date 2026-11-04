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

        results.data.forEach((row, index) => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${row.body_weight}</td>
                <td>${row.brain_weight}</td>
                <td>${row.max_life_span}</td> 
                <td>${row.gestation_time}</td>
                <td>${row.predation_index}</td>
                <td>${row.sleep_exposure_index}</td> 
                <td>${row.danger_index}</td>
                <td>${row.total_sleep}</td>
            `;

            tbody.appendChild(tr);

            // 修复了单引号的问题，必须用反引号 (Tab键上面的那个键)
            labels.push(`Animal ${index + 1}`);
            values.push(Number(row.total_sleep));
        });

        // Bar chart
        new Chart(
            document.getElementById('sleepChart'), // 这里和你 HTML 里的 ID 对应上了
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
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Animal'
                            }
                        }
                    }
                }
            }
        );
    },
    error: function(err) {
        console.error("FAILED");
        console.error(err);
    }
});
