import axios from 'axios'

export default class addressService {
    
    public static getSpecific = async () =>{
        try {
          const response = await axios.get<Address[]>("http://localhost:8080/person")
          const data = response.data;
          return data;
        } catch(error) {
            (error);
          };
      }

    public static createAddress = async (dataPerson:AddAddressDTO) => {
      try {
        const cpf = dataPerson.personCpf
        await axios.post(`http://localhost:8080/address/create/${cpf}`, dataPerson)
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
}