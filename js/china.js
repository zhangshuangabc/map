$.post("china.json", function(res) {
	var obj = JSON.parse(res); //将json格式转变成js对象
	for(i in obj) {
		var a = obj[i].name;
		delete(obj[i].name);
		obj[i].value = a;
	}
	showMap(obj);
})

function showMap(s_data) {
	Highcharts.setOptions({
		lang: {
			drillUpText: '< 返回 “{series.name}”'
		}
	});
	var map = null;
	$.getJSON('https://data.jianshukeji.com/jsonp?filename=geochina/china.json&callback=?', function(mapdata) {
		var data = s_data;
		map = Highcharts.mapChart('container_map', {
			title: {
				text: '全国XX分布',
				align: 'left',
				style: {
					color: '#fff',
					fontSize: '22px'
				}
			},

			credits: {
				enabled: false
			},
			chart: {
				backgroundColor: 'rgba(0,0,0,0)'
			},
			legend: {
				title: {
					text: '全国各省使用统计(台)',
					style: {
						color: '#fff'
					}
				},
				itemStyle: {
					color: '#fff'
				},
				valueDecimals: 0,
				layout: 'vertical',
				backgroundColor: 'rgba(255,255,255,0)',
				floating: true,
				align: 'left',
				symbolRadius: 0,
				x: 10,
				y: 0,

				symbolPadding: 30,
				itemMarginTop: 3,
				symbolWidth: 30,

				itemHoverStyle: {
					color: '#fff'
				}
			},
			mapNavigation: {
				enabled: true,
				enableButtons: false, //控制放大缩小按钮的显示
				enableMouseWheelZoom: true, //是否缩放
				buttonOptions: {
					verticalAlign: 'bottom'
				}
			},
			colorAxis: {
				dataClasses: [{
						from: 500,
						name: '500以上',
						color: '#5d003d',
					}, {
						from: 300,
						to: 500,
						color: '#c7008e'
					},
					{
						from: 200,
						to: 300,
						color: '#fa0316'
					},
					{
						from: 100,
						to: 200,
						color: '#ea9c04'
					},
					{
						from: 50,
						to: 100,
						color: '#fbff00'
					},
					{
						to: 50,
						name: '50以下',
						color: '#00fd10'
					}
				]
			},
			series: [{
				data: data,
				dataLabels: {
					enabled: true,
					format: '{point.name}'
				},
				mapData: mapdata,
				joinBy: ['name', 'city'],
				name: 'XX分布'
			}]
		});
	});
};