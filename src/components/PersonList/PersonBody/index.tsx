import { useEffect, useState } from 'react'
import personService from 'service/personService'

export default function PersonBody() {
    const [data, setData] = useState<Person[]>()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await personService.getPerson();
        setData(data)
        console.log(data)
    }

  return (
    <div>
        {data?.map((person) => {
            return (
                <>
                    <h1>{person.firstName}</h1>
                    <h2>{person.lastName}</h2>
                </>
            )
        })}
    </div>
  )
}
