Plotly.d3.csv('https://raw.githubusercontent.com/nicolerapfogel/abortiondata/master/data.csv', function(err, rows){
    //push csv data to github above
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

var data = [{
            //use existing choropleth map of US via plotly
            type: 'choropleth',
            locationmode: 'USA-states',
            locations: unpack(rows, 'State'),
            z: unpack(rows, 'Restrictions'),
            autocolorscale: true,
            //text: unpack(rows, 'State'),
            zmin: 0,
            zmax: 9,
            //when editing again, try to personalize the colors somehow like this
            /*colorscale: [
              [0, 'rgb(255)'], [1, 'rgb(255,245,240)'], [2, 'rgb(254,224,210)'],
              [3, 'rgb(252,187,161)'], [4, 'rgb(252,146,114)'],
              [5, 'rgb(251,106,74)'], [6, 'rgb(239,59,44)'],
              [7, 'rgb(203,24,29)', [8, 'rgb(0, 255, 0'], [9, 'rgb(0, 0, 255']]
            ],*/
          colorbar: {
            title: 'Number of Laws',
            thickness: 0.4
          },
          //borders
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