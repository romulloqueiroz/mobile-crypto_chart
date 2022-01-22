import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { CandleChart } from './components'

const App = () => {
  return (
    <Container>
      <CandleChart />
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