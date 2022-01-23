import Row from './Row'
import { useDerivedValues } from './useDerivedValues'
import {
  Wrapper,
  Container,
  Table,
  Column,
  Separator,
  Text
} from './Box.styles'


const CandleChartBox = () => {
  const {
    open,
    close,
    low,
    high,
    change,
    white,
    color,
    date
  } = useDerivedValues()

  return (
    <Wrapper pointerEvents='none'>
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
    </Wrapper>
  )
}

export default CandleChartBox