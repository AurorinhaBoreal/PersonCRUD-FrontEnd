import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme';
import Header from '@components/Header/index';
import Footer from '@components/Footer/index';
import Presentation from '@components/Presentation/index'
import PersonList from '@components/PersonList';

function App() {
  
  return (
    <ChakraProvider theme={theme}>
        <Header/>
        <Presentation/>
        <PersonList/>
        <Footer/>
    </ChakraProvider>
  )
}

export default App
