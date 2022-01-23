import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'
import { CandleChart, CandleChartBox } from '../components'
import CandleChartProvider from '../contexts/CandleChartContext'

const CandleChartScreen = () => (
  <CandleChartProvider>
    <BackgroundImage source={require('../assets/back.png')}>
      <CandleChart />
      <CandleChartBox />
    </BackgroundImage>
  </CandleChartProvider>
)

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`

export default CandleChartScreen