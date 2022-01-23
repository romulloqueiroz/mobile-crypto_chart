import React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { useDerivedValue } from 'react-native-reanimated'
import { ReText } from 'react-native-redash'
import Row from './Row'
import { CANDLES, STEP, formatDatetime, formatUSD } from './utils/ChartHelpers'
import { color as themeColor } from './styles'


interface ValuesProps {
  translateX: Animated.SharedValue<number>
}

const Values = ({ translateX }: ValuesProps) => {
  const candle = useDerivedValue(() => CANDLES[Math.floor(translateX.value / STEP)])
  const open = useDerivedValue(() => `${formatUSD(candle.value.open)}`)
  const close = useDerivedValue(() => `${formatUSD(candle.value.close)}`)
  const low = useDerivedValue(() => `${formatUSD(candle.value.low)}`)
  const high = useDerivedValue(() => `${formatUSD(candle.value.high)}`)
  const diff = useDerivedValue(() =>`${((candle.value.close - candle.value.open) * 100) / candle.value.open}`)
  const change = useDerivedValue(() => `${
    candle.value.close - candle.value.open < 0
      ? diff.value.substring(0, 5)
      : diff.value.substring(0, 4)
  }%`)
  const white = useDerivedValue(() => themeColor.white)
  const color = useDerivedValue(() =>
    candle.value.close - candle.value.open > 0 
      ? themeColor.aquamarine 
      : themeColor.sasquatch
  )
  const date = useDerivedValue(() => formatDatetime(candle.value.date))

  return (
    <Container>

      <Table>
        <Column>
          <Row label='Open' value={open} color={white} />
          <Row label='Close' value={close} color={white} />
        </Column>
        <Separator />
        <Column>
          <Row label='High' value={high} color={white} />
          <Row label='Low' value={low} color={white} />
          <Row label='Change' value={change} color={color} />
        </Column>
      </Table>

      <Text text={date} />
    </Container>
  )
}

const Container = styled(SafeAreaView)`
  background-color: ${themeColor.black};
`

const Table = styled.View`
  flex-direction: row;
  padding: 16px;
`

const Column = styled.View`
  flex: 1;
`

const Separator = styled.View`
  width: 16px;
`

const Text = styled(ReText)`
  color: ${themeColor.white};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`

export default Values