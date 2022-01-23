import React from 'react'
import { Line, Rect } from 'react-native-svg'
import { scaleY, scaleBody } from '../../../utils/ChartHelpers'
import { color } from '../../../styles'

const MARGIN = 2

export interface Candle {
  date: string
  day: number
  open: number
  high: number
  low: number
  close: number
}

interface CandleProps {
  candle: Candle
  index: number
  width: number
}

const Candle = ({ candle, index, width }: CandleProps) => {
  const { close, open, high, low } = candle
  const fill = close > open ? color.aquamarine : color.sasquatch
  const x = index * width
  const max = Math.max(open, close)
  const min = Math.min(open, close)
  return (
    <>
      <Line
        x1={x + width / 2}
        y1={scaleY(low)}
        x2={x + width / 2}
        y2={scaleY(high)}
        stroke={fill}
        strokeWidth={1}
      />
      <Rect
        x={x + MARGIN}
        y={scaleY(max)}
        rx={5}
        width={width - MARGIN * 2}
        height={scaleBody(max - min)}
        {...{ fill }}
      />
    </>
  )
}

export default Candle