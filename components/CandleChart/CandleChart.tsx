import styled from 'styled-components/native'
import { StyleSheet, View } from 'react-native'
import { SIZE, STEP } from '../../utils/ChartHelpers'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { clamp } from 'react-native-redash'
import Line from './Line'
import Label from './Label'
import Chart from './Chart'

const CandleChart = () => {
  const opacity = useSharedValue(0)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const horizontal = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }))
  const vertical = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }))
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({ x, y }) => {
      opacity.value = 1;
      translateY.value = clamp(y, 0, SIZE);
      translateX.value = x - (x % STEP) + STEP / 2;
    },
    onEnd: () => {
      opacity.value = 0;
    },
  })

  return (
    <View>
      <Chart />
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
    </View>
  )
}

const AnimatedView = styled(Animated.View)`
  ${StyleSheet.absoluteFill};
`

export default CandleChart