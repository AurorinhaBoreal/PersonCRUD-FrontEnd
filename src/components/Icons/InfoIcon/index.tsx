import { InfoOutlineIcon } from '@chakra-ui/icons'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import DefaultModal from '@components/Modals/DefaultModal'

interface info {
  index: number
  cpf: string
}

export default function InfoIcon(props: info) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <IconButton
          alignSelf="center"
          marginLeft="1vw"
          backgroundColor="main.100" 
          aria-label='Open Person Modal' 
          icon={<InfoOutlineIcon color="frost.100" w="1.5rem" h="1.5rem"/>}
          _hover={{ backgroundColor: "main.200"}} 
          onClick={onOpen}
      />
      <DefaultModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} index={props.index} type={"personInfo"} cpf={props.cpf} />
    </>
  )
}
