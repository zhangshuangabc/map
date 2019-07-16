	$.post("top1.json", function(res) {
		var obj = JSON.parse(res);
		var city = [];
		var colors = ['#ff0318', '#e89507', '#03ff08', '#cb0495', '#640348', '#f9031a', '#f9031a', '#f0ff01', '#e89507', '#f0ff01'];
		for(i in obj) {
			b = parseInt(obj[i].num);
			delete(obj[i].num);
			city.push(obj[i].city);
			delete(obj[i].city);
			obj[i].color = colors[i];
			obj[i].y = b;
		}
		showchart('container', city, obj);
		showchart('container1', city, obj);
	})

	function showchart(id, s_city, s_data) {

		var chart = Highcharts.chart(id, {
			chart: {
				backgroundColor: 'rgba(0,0,0,0)',
				style: {
					color: '#fff'
				},
				type: 'bar'
			},
			legend: {
				enabled: false
			},
			credits: {
				enabled: false //去除水印
			},
			title: {
				text: '区域会员分析TOP10',
				align: 'left',
				style: {
					color: '#fff',
					fontSize: '16px'
				}
			},
			subtitle: {
				text: ''
			},
			plotOptions: {
				bar: {
					//      	  	shadow:false,
					dataLabels: {
						enabled: true,
						color: '#fff'
						//          		allowOverlap: true
					}
				},
				series: {
					// pointPadding:0,
					groupPadding: 0
					// pointWidth:20
				}

			},
			xAxis: {
				tickLength: 1, //刻度线的长度
				labels: {
					style: {
						color: '#fff'
					}
				},
				//          categories: ['上海', '江苏', '广东', '浙江', '辽宁', '北京','河北', '山东', '吉林', '福建']
				categories: s_city
			},
			yAxis: {
				lineWidth: 1, //坐标轴线的显示
				gridLineDashStyle: 'ShortDash', //网格线的样式
				labels: {
					x: 0,
					style: {
						color: '#fff'
					}
				},
				title: {
					text: ''
				}

			},
			series: [{
				name: '销售',
				data: s_data
			}],
			responsive: {
				rules: [{
					condition: {
						maxWidth: 200
					},
					// Make the labels less space demanding on mobile
					chartOptions: {
						xAxis: {
							labels: {
								formatter: function() {
									return this.value.replace('月', '')
								}
							}
						},
						yAxis: {
							labels: {
								align: 'left',
								x: 0,
								y: -2
							},
							title: {
								text: ''
							}
						}
					}
				}]
			}
		});
	}