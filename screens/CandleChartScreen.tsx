import styled from 'styled-components/native'
import { CandleChart } from '../components'
import Values from '../Values'


const CandleChartScreen = () => (
  <>
    <CandleChart />
    <View pointerEvents='none'>
      <Values />
    </View>
  </>
)

const View = styled.View`
  width: 100%;
  margin-top: 20px;
`

export default CandleChartScreen