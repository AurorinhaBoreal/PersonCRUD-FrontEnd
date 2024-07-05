import { InfoOutlineIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'


export default function InfoIcon() {
  return (
    <IconButton
        alignSelf="center"
        marginLeft="1vw"
        backgroundColor="main.100" 
        aria-label='Open Person Modal' 
        icon={<InfoOutlineIcon color="frost.100" w="1.5rem" h="1.5rem"/>}
        _hover={{ backgroundColor: "main.200"}} 
        // onClick={verifyBehavior}
    />
  )
}
