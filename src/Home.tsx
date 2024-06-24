import { ChakraProvider } from '@chakra-ui/react'
import "@assets/fonts.css"
import Header from '@components/Header/header';
import Footer from '@components/Footer/footer';

function App() {
  
  return (
    <ChakraProvider>
        <Header/>
        <Footer/>
    </ChakraProvider>
  )
}

export default App
