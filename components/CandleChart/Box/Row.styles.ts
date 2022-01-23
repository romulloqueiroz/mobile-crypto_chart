import styled from 'styled-components/native'
import { ReText } from 'react-native-redash'
import { color } from '../../../styles'

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

const Label = styled.Text`
  font-size: 20px;
  color: ${color.jet};
  font-weight: bold;
`

const StyledReText = styled(ReText)`
  font-size: 20px;
  font-weight: bold;
`

export {
  Container,
  Label,
  StyledReText,
}