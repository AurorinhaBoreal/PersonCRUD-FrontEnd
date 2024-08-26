import axios from 'axios'

export default class personService {
    
    public static getPerson = async () =>{
      try {
        const response = await axios.get<Person[]>("http://localhost:8080/person")
        const data = response.data;
        return data;
      } catch(error) {
        (error);
      };
    }

    public static getSpecificPerson = async (cpf: string) => {
      try {
        const response = await axios.get<Person>(`http://localhost:8080/person/${cpf}`)
        const data = response.data;
        return data;
      } catch(error) {
        (error);
      };
    }

    public static createPerson = async (dataPerson:CreatePersonDTO) => {
      try {
        await axios.post("http://localhost:8080/person/create", dataPerson)
        return null;
      } catch (error) {
        if (axios.isAxiosError<Record<string, unknown>>(error)) {
            if (typeof error.response?.data === 'string') {
                const errorMessage = error.response.data
                return errorMessage
            } else {
                return "Verify your Information and Connection with API"
            }
          }
      }
      return "Unexpected Error Ocurred"
    }

    public static updatePerson = async (formData: UpdatePersonDTO, cpf: string) => {
      if (cpf == undefined) {
        throw Error("Cpf não foi definido")
      }
      try {
        await axios.patch<Person>(`http://localhost:8080/person/update/${cpf}`, formData)
        return null;
      } catch (error) {
        if (axios.isAxiosError<Record<string, unknown>>(error)) {
          if (typeof error.response?.data === 'string') {
              const errorMessage = error.response.data
              return errorMessage
          } else {
              return "Verify your Information and Connection with API"
          }
        }
      }
    }
}