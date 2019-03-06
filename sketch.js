Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv', function(err, rows){
    let df = pd_read_csv('data/data.csv')
    let laws;

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    /*function preload(){
        //table = loadTable("data/data.json", "header");
    }

    function setup(){
        createCanvas(800, 800);
        background(255);
        loadData;
    }

    function loadData(){
      //confuding
        for(i=0; i<json.length; i++){
            var laws = json.laws[i];
            laws[i] = new Law('State', 'Abortion Restrictiveness')
        }
    }*/

var data = [{
            type: 'choropleth',
            locationmode: 'USA-states',
            locations: unpack(rows, 'code'),
            z: unpack(rows, 'Anti-Abortion Laws'),
            text: unpack(rows, 'state'),
            zmin: 0,
            zmax: 17000,
            colorscale: [
              [0, 'rgb(255)'], [0.1, 'rgb(255,245,240)'], [0.2, 'rgb(254,224,210)'],
              [0.3, 'rgb(252,187,161)'], [0.4, 'rgb(252,146,114)'],
              [0.5, 'rgb(251,106,74)'], [0.6, 'rgb(239,59,44)'],
              [0.7, 'rgb(203,24,29)'], [0.8, 'rgb()'], [0.9, 'rgb()'], [1.0, 'rgb()']
            ],
          colorbar: {
            title: 'Number of Laws',
            thickness: 0.2
          },
          marker: {
            line:{
              color: 'rgb(255,255,255)',
              width: 2
            }
          }
        }];

console.log(data.locations);
var layout = {
        title: 'Laws that Restrict Abortion Access by State',
        geo:{
          scope: 'usa',
          showlakes: true,
          lakecolor: 'rgb(255,255,255)'
        }
    };
    Plotly.plot(myDiv, data, layout, {showLink: false});
});