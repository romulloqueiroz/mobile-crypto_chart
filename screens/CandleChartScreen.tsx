import { useContext } from 'react'
import styled from 'styled-components/native'
import { CandleChart } from '../components'
import Values from '../Values'
import { CandleChartContext } from '../contexts/CandleChartContext'


const CandleChartScreen = () => {
  const { translateX } = useContext(CandleChartContext)

  return (
    <>
      <CandleChart />
      <View pointerEvents='none'>
        <Values {...{ translateX }} />
      </View>
    </>
  )
}

const View = styled.View``

export default CandleChartScreen