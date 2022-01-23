import React from 'react'
import styled from 'styled-components/native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { ReText } from 'react-native-redash'
import { color } from '../../../styles'


interface RowProps {
  label: string
  color: Animated.SharedValue<string>
  value: Animated.SharedValue<string>
}

const Row = ({ label, value, color }: RowProps) => {
  const style = useAnimatedStyle(() => ({ color: color.value }))
  return (
    <Container>
      <Label>{label}</Label>
      <StyledReText text={value} style={[style, { fontVariant: ['tabular-nums'] }]} />
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Label = styled.Text`
  font-size: 20px;
  color: ${color.jet};
`

const StyledReText = styled(ReText)`
  font-size: 20px;
`

export default Row