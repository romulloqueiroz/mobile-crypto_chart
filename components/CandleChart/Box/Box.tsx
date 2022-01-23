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
    violet,
    color,
    date
  } = useDerivedValues()

  return (
    <Wrapper pointerEvents='none'>
      <Container>
        <Table>
          <Column>
            <Row label='Open' value={open} color={violet} />
            <Row label='Close' value={close} color={violet} />
          </Column>
          <Separator />
          <Column>
            <Row label='High' value={high} color={violet} />
            <Row label='Low' value={low} color={violet} />
          </Column>
          <Column>
            <Row label='Change' value={change} color={color} />
          </Column>
        </Table>
        <Text text={date} />
      </Container>
    </Wrapper>
  )
}

export default CandleChartBox