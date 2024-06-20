import { useState } from 'react';
import axios from 'axios'
import './Home.css'

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
    <>
      <h1>React + Java</h1>
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
        </div>) : (<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif"/>)} 
      </div>
      <div className="card">
        <button onClick={() => getData()}>
          Aperta para puxar os dados!
        </button>
      </div>
    </>
  )
}

export default App
