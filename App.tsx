import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import Chart from './components/Chart'

const App = () => {
  return (
    <Container>
      <Chart />
      <StatusBar style='auto' />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default App