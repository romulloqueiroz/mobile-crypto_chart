import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'
import { CandleChart, CandleChartBox, CandleChartHeader } from '../components'
import CandleChartProvider from '../contexts/CandleChartContext'

const CandleChartScreen = () => (
  <CandleChartProvider>
    <BackgroundImage source={require('../assets/back.png')}>
      <CandleChartHeader />
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