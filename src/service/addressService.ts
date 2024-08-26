import axios from 'axios'

export default class addressService {
    private static readonly API_URL = import.meta.env.VITE_API_URL;

    public static getSpecific = async () =>{
        try {
          const response = await axios.get<Address[]>(`${this.API_URL}/person`)
          const data = response.data;
          return data;
        } catch(error) {
            (error);
          };
      }

    public static createAddress = async (dataPerson:AddAddressDTO) => {
      try {
        const cpf = dataPerson.personCpf
        await axios.post(`${this.API_URL}/address/create/${cpf}`, dataPerson)
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