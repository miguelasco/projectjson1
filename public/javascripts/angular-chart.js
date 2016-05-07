var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainCtrl', ['$scope', '$http',  function($scope, $http) {
  $http.get("/data").success(function (data) {
        formatDataTable(data);
  });
}]);

function formatDataTable(chartdata) {
  var data = [];
  var header = ['Cause of Death', 'Number of Deaths'];
  
  console.table(chartdata);
  
  data.push(header);
  
  for (var i = 0; i < chartdata.length; i++) {
    var temp = [];
    temp.push(chartdata[i]._id);
    temp.push(chartdata[i].value);
    data.push(temp);
  }
  
   console.table(data);
  
  var g_data = google.visualization.arrayToDataTable(data);
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(g_data, getOptions());
}

function getOptions()
{
     var options = {
        title: 'Causes of Deaths in New York in 2011',
        chartArea: {width: '75%'},
        hAxis: {
          title: 'Causes',
          minValue: 0
        },
        vAxis: {
          title: 'Number of Deaths'
        }
      };

    return options;
}