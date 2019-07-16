$(function () {
    $('#bing').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor:'rgba(0,0,0,0)'
        },
        credits:{
        	enabled:false
        },
       
        colors:['#00e101','#efe001','#38b9fd','#6d0777','#e97800','#e31700'],
        title: {
            text: ''
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                	distance:10,
                	connectorPadding:0,
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#fff'
                    }
                }
            }
        },
        series: [{
        	size:'55%',
            type: 'pie',
            name: '浏览器访问量占比',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: false,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['其他',   0.7]
            ]
        }]
    });
});
