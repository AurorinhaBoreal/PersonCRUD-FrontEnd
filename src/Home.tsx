import { ChakraProvider } from '@chakra-ui/react'
import Header from '@components/Header/index';
import Footer from '@components/Footer/index';
import Presentation from '@components/Presentation/index'

function App() {
  
  return (
    <ChakraProvider>
        <Header/>
        <Presentation/>
        <Footer/>
    </ChakraProvider>
  )
}

export default App
