import { useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

const ChartContainer = styled('div')({
	height: 334,
	background: '#fff',
	padding: 10,
	boxSizing: 'border-box',
	boxShadow: '0px 2px 12px -6px rgba(0,0,0,0.25)',
	border: '1px solid rgba(0, 0, 0, 0.1)',
	borderRadius: '8px',
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
		chart.paddingRight = 10
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
		chart.legend.labels.template.maxWidth = 50
		chart.legend.labels.template.truncate = true
		chart.legend.itemContainers.template.tooltipText = '{category}'

		chart.cursor = new am4charts.XYCursor()

		chart.responsive.enabled = true

		chart.responsive.rules.push({
			relevant: target => target.pixelWidth < 480,
			state: (target, stateId) => {
				if (target instanceof am4charts.Chart) {
					const state = target.states.create(stateId)
					state.properties.paddingTop = 0
					state.properties.paddingRight = 0
					state.properties.paddingBottom = 0
					state.properties.paddingLeft = 0

					return state
				}

				if (target instanceof am4charts.Legend) {
					const state = target.states.create(stateId)
					state.properties.paddingTop = 0
					state.properties.paddingRight = 0
					state.properties.paddingBottom = 0
					state.properties.paddingLeft = 0
					state.properties.marginLeft = 0
					state.properties.fontSize = 10
					state.properties.dy = 25
					state.properties.contentAlign = 'left'

					return state
				}

				if (target instanceof am4charts.AxisRendererY) {
					const state = target.states.create(stateId)
					state.properties.inside = true
					state.properties.maxLabelPosition = 0.99

					return state
				}

				if (target instanceof am4charts.AxisLabel && target.parent instanceof am4charts.AxisRendererY) {
					const state = target.states.create(stateId)
					state.properties.fontSize = 10
					state.properties.dy = -15
					state.properties.paddingTop = 3
					state.properties.paddingRight = 5
					state.properties.paddingBottom = 3
					state.properties.paddingLeft = 5

					target.setStateOnChildren = true
					var bgstate = target.background.states.create(stateId)
					bgstate.properties.fill = am4core.color('#fff')
					bgstate.properties.fillOpacity = 0.7

					return state
				}

				if (target instanceof am4charts.AxisLabel && target.parent instanceof am4charts.AxisRendererX) {
					const state = target.states.create(stateId)
					state.properties.fontSize = 10
				}

				return null
			},
		})

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
