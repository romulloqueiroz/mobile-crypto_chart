import { useContext } from 'react'
import { color as themeColor } from '../../../styles'
import { useDerivedValue } from 'react-native-reanimated'
import { CandleChartContext } from '../../../contexts/CandleChartContext'
import { CANDLES, STEP, formatDatetime, formatUSD } from '../../../utils/ChartHelpers'

export const useDerivedValues = () => {
  const { translateX } = useContext(CandleChartContext)
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
  const violet = useDerivedValue(() => themeColor.violet)
  const color = useDerivedValue(() =>
    candle.value.close - candle.value.open > 0 
      ? themeColor.aquamarine 
      : themeColor.sasquatch
  )
  const date = useDerivedValue(() => formatDatetime(candle.value.date))

  return {
    open,
    close,
    low,
    high,
    change,
    violet,
    color,
    date
  }
}