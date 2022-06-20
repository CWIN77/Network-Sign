import styled from 'styled-components' 
import NetworkOnoff from './networkSign'

const Container = styled.div`
  width:100%;
  min-height:100%;
` 

function App() {
  return (
    <Container>
      <NetworkOnoff/>
    </Container>
  )
}

export default App
