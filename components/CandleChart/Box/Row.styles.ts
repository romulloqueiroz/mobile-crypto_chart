import styled from 'styled-components/native'
import { ReText } from 'react-native-redash'
import { color } from '../../../styles'

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

export {
  Container,
  Label,
  StyledReText,
}