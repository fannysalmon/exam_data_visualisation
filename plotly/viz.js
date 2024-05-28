function sortByCountryPopulation(data) {
    data.sort((a, b) => b.population - a.population);
}

function run_visualization(data) {
    sortByCountryPopulation(data);
    const top30Countries = data.slice(0, 30);
    const countries = top30Countries.map(countryData => countryData.country);
    const populations = top30Countries.map(countryData => countryData.population);

    const barData = [{
        x: countries,
        y: populations,
        type: 'bar',
        orientation: 'v' 
    }];

    
    const layout = {
        title: {
            text: '<b><i>Data distribution of countries population</i></b>',
            font: {
                size: 30
            }
        },
        xaxis: {
            title: {
                text: '<span class="axis-title" style="color: red;"><b>Countries</b></span>', 
                font: {
                    color: 'red'
                }
            },
            tickfont: {
                size: 10
            }
        },
        yaxis: {
            title: {
                text: '<span class="axis-title" style="color: red;"><b>Populations</b></span>', 
                font: {
                    color: 'red'
                }
            },
    
            range: [0, Math.max(...populations) * 1.1] 
        },
        margin: {
            l: 70,
            r: 50, 
            b: 200, 
            t: 50, 
            pad: 4
        }
    };

    Plotly.newPlot('data-viz', barData, layout);
}


fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));
