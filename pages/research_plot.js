// Our labels along the x-axis
var years = [2019, 2020];
// For drawing the lines
var publication = [1, 1];
var poster = [1, 0];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    mirror: false,
                    stepSize: 1,
                    max: 5,
                    min: 0
                }
            }]
        }
    },
    data: {
        labels: years,
        datasets: [{
                data: publication,
                label: "Publication",
                borderWidth: 1.5,
                borderColor: "#3e95cd",
                backgroundColor: "rgba(60, 149, 205, 0.5)",
                fill: false
            },
            {
                data: poster,
                label: "Poster",
                borderWidth: 1.5,
                borderColor: "#8e5ea2",
                backgroundColor: "rgba(142, 94, 162, 0.5)",
                fill: false
            }
        ]
    }
});