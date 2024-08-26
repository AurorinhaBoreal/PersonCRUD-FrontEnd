import { useEffect, useState } from 'react'
import personService from 'service/personService'
import PersonCard from './PersonCard'

export default function PersonBody() {
    const [data, setData] = useState<Person[]>()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await personService.getPerson();
        console.log(data)
        setData(data)
    }
    
  return (
    <div>
        {data?.map((person, index) => {
            return (
                <>
                    <PersonCard index={index} person={person}/>
                </>
            )
        })}
    </div>
  )
}
