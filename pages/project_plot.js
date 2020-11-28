// Our labels along the x-axis
var years = [2017, 2018, 2019, 2020];
// For drawing the lines
var num_proj = [4, 1, 0, 1];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    options: {
        scales: {
            yAxes: [{
                ticks: {
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
            data: num_proj,
            label: "Project",
            borderColor: "#3e95cd",
            fill: false
        }]
    }
});