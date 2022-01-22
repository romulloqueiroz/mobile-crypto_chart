import { Dimensions } from 'react-native'
import { interpolate, Extrapolate } from 'react-native-reanimated'
import { round } from 'react-native-redash'

import data from './data.json'
import { Candle } from './Candle'

const CANDLES = data.slice(0, 20) as Candle[]

const { width: SIZE } = Dimensions.get('window')
const STEP = SIZE / CANDLES.length

const formatUSD = (value: number) => {
  'worklet'
  return `$ ${round(value, 2).toLocaleString('en-US', { currency: 'USD' })}`
}

const formatDatetime = (value: string) => {
  'worklet'
const d = new Date(value)
  return d.toLocaleTimeString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getDomain = (rows: Candle[]): [number, number] => {
  'worklet'
  const values = rows.map(({ high, low }) => [high, low]).flat()
  return [Math.min(...values), Math.max(...values)]
}

const DOMAIN = getDomain(CANDLES)

const scaleY = (value: number) => {
  'worklet'
  return interpolate(value, DOMAIN, [SIZE, 0], Extrapolate.CLAMP)
}

const scaleBody = (value: number) => {
  'worklet'
  return interpolate(
    value,
    [0, Math.max(...DOMAIN) - Math.min(...DOMAIN)],
    [0, SIZE],
    Extrapolate.CLAMP
  )
}

const scaleYInvert = (y: number) => {
  'worklet'
  return interpolate(y, [0, SIZE], DOMAIN.reverse(), Extrapolate.CLAMP)
}

export {
  CANDLES,
  SIZE,
  STEP,
  DOMAIN,
  formatUSD,
  formatDatetime,
  scaleY,
  scaleBody,
  scaleYInvert
}