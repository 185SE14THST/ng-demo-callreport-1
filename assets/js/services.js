/* Summary:         Service definitions
*
* Descriptions:     This program provides the Service functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-15
*/

project.service('projectApp1', function() {
    this.city = "Miami, FL";

        var chartData = function (mini, maxi, cnt) { // Replace with API data
        var i;
        var row = 1;
        var min = mini;
        var max = maxi;
        var count = cnt;
        var chartRowData = [];
        var chartRowTotals = [ 0, 0, 0, 0, 0 ];
        for (i = 0; i < count; i++ ) {
            var col1 = row++;
            var col2 = Math.floor(Math.random() * (max - min + 1)) + min;
            var col3 = Math.floor(Math.random() * (max - min + 1)) + min;
            var col4 = Math.floor(Math.random() * (max - min + 1)) + min;
            var col5 = Math.floor(Math.random() * (max - min + 1)) + min;
            var col6 = Math.floor(Math.random() * (max - min + 1)) + min;
            chartRowData[i] = ([ col1, col2 /8, col3/6 , col4/4, col5/2, col6 ]);
            chartRowTotals[0] += chartRowData[i][1];
            chartRowTotals[1] += chartRowData[i][2];
            chartRowTotals[2] += chartRowData[i][3];
            chartRowTotals[3] += chartRowData[i][4];
            chartRowTotals[4] += chartRowData[i][5];
            this.chartRowTotals = chartRowTotals;
        }
        // debug: console.log( 'Total minutes: ' + chartRowTotals[0] );
        // debug: console.log( 'Avg. Time minutes: ' + chartRowTotals[1] );
        // debug: console.log( 'Avg. Calls Per Day: ' + chartRowTotals[2] );
        // debug: console.log( 'Overage Minutes: ' + chartRowTotals[3] );
        // debug: console.log( 'Total Costs: ' + chartRowTotals[4] );

        var chartObjects = {
            dashboardData : this.chartRowTotals,
            chartRowData : chartRowData,
        }
        // debug: console.log(chartObjects['chartRowData']);
        //return  chartObjects['chartRowData']; // OK
        return  chartObjects // Experimental
    }

    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Time');
        data.addColumn('number', 'Total Minutes');
        data.addColumn('number', 'Avg. Time');
        data.addColumn('number', 'Avg. Calls Per Day');
        data.addColumn('number', 'Overage Minutes');
        data.addColumn('number', 'Total Costs');

        var xyz = chartData(1, 100, 25);
        metrics = xyz['dashboardData'];
        //$scope.valueOf()
        console.log('drawChart:65: ' + metrics)


        data.addRows( xyz['chartRowData'] );

      var options = {
        chart: {
            title: 'Call Activity By Month ',
            subtitle: 'in dollars (USD)',
            curveType: 'function',
            lineWidth: 1,
        },
        width: '100%',
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, options);
    }
    // Function call
    this.drawChart = function() {
        drawChart();
    }
});
