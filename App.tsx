import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'

 const App = () => {
  return (
    <Container>
      <Text>APP!</Text>
      <StatusBar style='auto' />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
7
export default App