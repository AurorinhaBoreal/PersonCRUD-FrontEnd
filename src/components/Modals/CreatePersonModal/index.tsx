import personService from 'service/personService'

export default function CreatePersonModal() {

    const createPerson = async () => {
        const createPersonDTO:CreatePersonDTO = {
            firstName: "Carlos",
            lastName: "Andrade",
            birthDate: "1500-03-03",
            cpf: "21243988061",
            photoId: 10
        }
        const data = await personService.createPerson(createPersonDTO)
        console.log(data)
    }
    return (
        <div onClick={createPerson}>Butão</div>
    )
}
