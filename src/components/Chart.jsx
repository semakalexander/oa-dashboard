import { useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

const ChartContainer = styled('div')({
	height: 334,
	background: '#fff',
	padding: 10,
	boxSizing: 'border-box',
	'&:not(:first-of-type)': {
		marginTop: 16,
	},
})

const StyledChart = styled('div')({
	height: '100%',
})

const Chart = ({ id, lineData, barData, lineName, barName }) => {
	const theme = useTheme()

	useEffect(() => {
		const chart = am4core.create(id, am4charts.XYChart)
		chart.paddingLeft = 0
		chart.paddingRight = 0
		chart.data = [...lineData.map(el => ({ x: el.x, lineY: el.y, barY: barData.find(v => v.x === el.x).y }))]

		const title = chart.titles.create()
		title.text = `${barName} & ${lineName}`
		title.fontSize = 16
		title.fill = theme.palette.text.main
		title.fontFamily = theme.fontFamily
		title.align = 'left'
		title.marginBottom = 30
		title.marginLeft = 12

		const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
		categoryAxis.dataFields.category = 'x'
		categoryAxis.renderer.labels.template.fontSize = 12
		categoryAxis.renderer.labels.template.fill = theme.palette.text.main
		categoryAxis.renderer.labels.template.fontFamily = theme.fontFamily
		categoryAxis.renderer.labels.template.textAlign = 'middle'
		categoryAxis.renderer.minGridDistance = 30

		const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
		valueAxis.renderer.labels.template.align = 'left'
		valueAxis.renderer.labels.template.fontSize = 12
		valueAxis.renderer.labels.template.fill = theme.palette.text.main
		valueAxis.renderer.labels.template.fontFamily = theme.fontFamily
		valueAxis.renderer.labels.template.adapter.add('text', function (text) {
			if (!text) return

			return '$' + text.replace(/,\d{3}$/, 'K')
		})

		const barSeries = chart.series.push(new am4charts.ColumnSeries())
		barSeries.name = barName
		barSeries.dataFields.valueY = 'barY'
		barSeries.dataFields.categoryX = 'x'
		barSeries.columns.template.fill = theme.palette.badge.neutral
		barSeries.columns.template.strokeWidth = 0
		barSeries.columns.template.column.cornerRadiusTopLeft = 6
		barSeries.columns.template.column.cornerRadiusTopRight = 6
		barSeries.columns.template.width = am4core.percent(60)

		const lineSeries = chart.series.push(new am4charts.LineSeries())
		lineSeries.name = lineName
		lineSeries.dataFields.valueY = 'lineY'
		lineSeries.dataFields.categoryX = 'x'
		lineSeries.smoothing = 'monotoneX'
		lineSeries.stroke = theme.palette.background.main
		lineSeries.fill = theme.palette.background.main

		const bullet = lineSeries.bullets.push(new am4charts.Bullet())
		const square = bullet.createChild(am4core.Circle)
		square.width = 5
		square.height = 5
		square.horizontalCenter = 'middle'
		square.verticalCenter = 'middle'

		chart.legend = new am4charts.Legend()
		chart.legend.position = 'absolute'
		chart.legend.contentAlign = 'right'
		chart.legend.x = 0
		chart.legend.y = -60
		chart.legend.labels.template.fontSize = 14
		chart.legend.labels.template.fill = theme.palette.text.main
		chart.legend.labels.template.fontFamily = theme.fontFamily

		chart.cursor = new am4charts.XYCursor()

		return () => {
			chart.dispose()
		}
	}, [id, lineData, barData, barName, lineName, theme])

	return (
		<ChartContainer>
			<StyledChart id={id}></StyledChart>
		</ChartContainer>
	)
}

export default Chart
