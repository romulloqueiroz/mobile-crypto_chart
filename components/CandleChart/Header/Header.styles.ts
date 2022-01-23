import styled from 'styled-components/native'
import { color } from '../../../styles'

const Container = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;
`

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${color.jet};
`

export {
  Container,
  Title,
}