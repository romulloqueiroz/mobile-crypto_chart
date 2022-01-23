import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import {
  Container,
  Label,
  StyledReText,
} from './Row.styles'

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

export default Row