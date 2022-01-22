import React from 'react'
import { StyleSheet } from 'react-native'
import Svg, { Line } from 'react-native-svg'
import { color } from '../../styles'

interface LineProps {
  x: number
  y: number
}

const LineComp = ({ x, y }: LineProps) => (
  <Svg style={StyleSheet.absoluteFill}>
    <Line
      x1={0}
      y1={0}
      x2={x}
      y2={y}
      strokeWidth={2}
      stroke={color.gray}
      strokeDasharray='6 6'
    />
  </Svg>
)

export default LineComp