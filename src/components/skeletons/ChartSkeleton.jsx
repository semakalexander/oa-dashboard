import React, { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { Skeleton } from '@mui/material'
import { random } from '@amcharts/amcharts4/.internal/core/utils/Utils'

const ChartSkeletonContainer = styled('div')({
	height: 334,
	background: '#fff',
	boxSizing: 'border-box',
	padding: 20,
	'&:not(:first-of-type)': {
		marginTop: 16,
	},
})

const TopContainer = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
})

const ChartContainer = styled('div')({ display: 'flex', flexDirection: 'row' })

const ChartBackground = styled('div')({
	position: 'absolute',
	top: 20,
	left: 25,
	right: 10,
	bottom: 0,
	background: 'rgba(0,0,0,0.005)',
})

const Chart = styled('div')({
	position: 'relative',
	display: 'flex',
	alignItems: 'flex-end',
	justifyContent: 'space-between',
	width: '100%',
	padding: '0 10px 0 25px',
})

const YAxisContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	'& > span': { marginTop: 30 },
})

const XAxisContainer = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	marginTop: 20,
	justifyContent: 'space-between',
	padding: '0 10px 0 60px',
})

const ChartSkeleton = () => {
	const yAxisLabels = useMemo(() => [...new Array(5)].map((_, i) => ({ id: i, width: 35, height: 20 })), [])
	const xAxisLabels = useMemo(() => [...new Array(12)].map((_, i) => ({ id: i, width: 32, height: 14 })), [])
	const columns = useMemo(() => [...new Array(12)].map((_, i) => ({ id: i, width: 32, height: random(10, 180) })), [])

	return (
		<ChartSkeletonContainer>
			<TopContainer>
				<Skeleton variant="rectangular" width="170px" height="20px" />
				<Skeleton variant="rectangular" width="230px" height="20px" />
			</TopContainer>

			<ChartContainer>
				<YAxisContainer>
					{yAxisLabels.map(({ id, width, height }) => (
						<Skeleton key={id} variant="rectangular" width={width} height={height} />
					))}
				</YAxisContainer>

				<Chart>
					<ChartBackground />
					{columns.map(({ id, width, height }) => (
						<Skeleton key={id} variant="rectangular" width={width} height={height} />
					))}
				</Chart>
			</ChartContainer>

			<XAxisContainer>
				{xAxisLabels.map(({ id, width, height }) => (
					<Skeleton key={id} variant="rectangular" width={width} height={height} />
				))}
			</XAxisContainer>
		</ChartSkeletonContainer>
	)
}

export default ChartSkeleton
