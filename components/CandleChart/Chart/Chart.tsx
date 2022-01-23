import { useContext } from 'react'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { SIZE } from '../../../utils/ChartHelpers'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Line from './Line'
import Label from './Label'
import List from './CandleList'
import { CandleChartContext } from '../../../contexts/CandleChartContext'

const CandleChart = () => {
  const {
    opacity,
    translateY,
    horizontal,
    vertical,
    onGestureEvent,
  } = useContext(CandleChartContext)

  return (
    <CandleChartContainer>
      <List />
      <PanGestureHandler minDist={0} {...{ onGestureEvent }}>
        <AnimatedView>
          <AnimatedView style={horizontal}>
            <Line x={SIZE} y={0} />
          </AnimatedView>
          <AnimatedView style={vertical}>
            <Line x={0} y={SIZE} />
          </AnimatedView>
          <Label {...{ translateY, opacity }} />
        </AnimatedView>
      </PanGestureHandler>
    </CandleChartContainer>
  )
}

const CandleChartContainer = styled.View`
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  flex: 1;
  overflow: hidden;
`

const AnimatedView = styled(Animated.View)`
  ${StyleSheet.absoluteFill};
`

export default CandleChart