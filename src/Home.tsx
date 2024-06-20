import { useState } from 'react';
import { ChakraProvider, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import "@assets/fonts.css"
import Header from '@components/Header/header';

interface Person {
  firstName: string,
  lastName: string,
  birthDate: string,
  age: number,
  hasMainAddress: boolean,
  cpf: string
}

function App() {
  const [data, setData] = useState<Person[]>([]);

  const getData = async () =>{
    try {
      const response = await axios.get<Person[]>("http://localhost:8080/person")
      setData(response.data);
      console.log(data)
    } catch(error) {
        console.log(error);
      };
  }
  return (
    <ChakraProvider>
        <Header/>
        <center style={{marginTop: "10%"}}>
          <div>
            {data.length > 0 ? (<div>
              The Data: {data.map((person, index) => (
                <div key={index}>
                  <p>Nome: {person.firstName} {person.lastName}</p>
                  <p>Idade: {person.age}</p>
                  <p>Data de Nascimento: {person.birthDate}</p>
                  <p>CPF: {person.cpf}</p>
                </div>
              ))}
            </div>) : (<Spinner/>)} 
          </div>
          <div className="card">
            <button onClick={() => getData()}>
              Aperta para puxar os dados!
            </button>
          </div>
        </center>
    </ChakraProvider>
  )
}

export default App
