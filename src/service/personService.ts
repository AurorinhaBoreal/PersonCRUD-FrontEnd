import axios from 'axios'

export default class personService {
    
    public static getPerson = async () =>{
        try {
          const response = await axios.get<Person[]>("http://localhost:8080/person")
          console.log(response.data)
          const data = response.data;
          return data;
        } catch(error) {
            console.log(error);
          };
      }

    public static createPerson = async (dataPerson:CreatePersonDTO) => {
      try {
        const response = await axios.post("http://localhost:8080/person/create", dataPerson)
        return response.data;
      } catch (error) {
        console.log(error)
      }
    }
}