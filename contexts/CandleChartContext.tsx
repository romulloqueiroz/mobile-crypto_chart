import { createContext } from 'react'
import {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { clamp } from 'react-native-redash'
import { SIZE, STEP } from '../utils/ChartHelpers'


export const CandleChartContext = createContext<any>(null)

const CandleChartProvider: React.FC = ({ children }) => {
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
    onEnd: () => { opacity.value = 0 },
  })

  return (
    <CandleChartContext.Provider
      value={{
        opacity,
        translateX,
        translateY,
        horizontal,
        vertical,
        onGestureEvent,
      }}
    >
      {children}
    </CandleChartContext.Provider>
  )
}

export default CandleChartProvider