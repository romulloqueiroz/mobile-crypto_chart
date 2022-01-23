import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import CandleChartProvider from './contexts/CandleChartContext'
import CandleChartScreen from './screens/CandleChartScreen'


const App = () => {
  return (
    <Container>

      <CandleChartProvider>
        <CandleChartScreen />
      </CandleChartProvider>

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