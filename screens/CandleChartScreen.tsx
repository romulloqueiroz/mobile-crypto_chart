import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'
import { CandleChart } from '../components'
import Values from '../Values'
import CandleChartProvider from '../contexts/CandleChartContext'

const CandleChartScreen = () => {
  return (
    <CandleChartProvider>
      <BackgroundImage source={require('../assets/back.png')}>
        <CandleChart />
        <View pointerEvents='none'>
          <Values />
        </View>
      </BackgroundImage>
    </CandleChartProvider>
  )
}

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`

const View = styled.View`
  width: 100%;
  margin-top: 20px;
`

export default CandleChartScreen