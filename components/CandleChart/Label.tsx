import React from 'react'
import Animated, {
  useDerivedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { ReText } from 'react-native-redash'
import { formatUSD, scaleYInvert } from '../../utils/ChartHelpers'
import styled from 'styled-components/native'

interface LabelProps {
  translateY: Animated.SharedValue<number>
  opacity: Animated.SharedValue<number>
}

const Label = ({ translateY, opacity }: LabelProps) => {
  const text = useDerivedValue(() => {
    const price = scaleYInvert(translateY.value)
    return formatUSD(price)
  })

  const horizontal = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }))
  
  return (
    <Container style={horizontal}>
      <ReText {...{ text }} />
    </Container>
  )
}

const Container = styled(Animated.View)`
  width: 100px;
  align-self: flex-end;
  background-color: #FEFFFF;
  border-radius: 4px;
  padding: 4px;
  margin-top: 4px;
  flex-direction: row;
  justify-content: space-between;
`

export default Label