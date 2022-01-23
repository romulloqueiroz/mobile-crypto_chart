import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ReText } from 'react-native-redash'
import { color as themeColor } from '../../../styles'

const Wrapper = styled.View`
  margin-top: 10px;
  flex: 1;
`

const Container = styled(SafeAreaView)`
  background-color: ${themeColor.white};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  height: 100%;
`

const Table = styled.View`
  flex-direction: row;
  padding: 16px;
`

const Column = styled.View`
  flex: 1;
`

const Separator = styled.View`
  width: 16px;
`

const Text = styled(ReText)`
  color: ${themeColor.topaz};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`

export {
  Wrapper,
  Container,
  Table,
  Column,
  Separator,
  Text
}