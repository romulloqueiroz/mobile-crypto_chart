import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { CandleChart } from './components'
import CandleChartContext from './contexts/CandleChartContext'


const App = () => {
  return (
    <Container>
      
      <CandleChartContext>
        <CandleChart />
      </CandleChartContext>

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