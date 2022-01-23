import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import CandleChartScreen from './screens/CandleChartScreen'


const App = () => (
  <Container>
    <CandleChartScreen />
    <StatusBar style='auto' />
  </Container>
)

const Container = styled.View`
  flex: 1;
`

export default App