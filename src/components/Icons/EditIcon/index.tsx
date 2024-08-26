import { EditIcon } from "@chakra-ui/icons";
import { Icon, IconButton, useDisclosure } from "@chakra-ui/react";
import DefaultModal from "@components/Modals/DefaultModal";


interface info {
    isButtonStyle: boolean;
    isOnMain?: boolean;
    index: number;
    cpf: string
    modalSeelct: "updatePerson" | "editAddressMain" | "editAddressSecondary"
}

export default function EditIconCustom(props:info) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  return (
    <>
        {props.isButtonStyle ? 
            <IconButton
                backgroundColor="main.100" 
                aria-label='Add Button' 
                icon={<EditIcon color="frost.100" w="1.6rem" h="1.6rem"/>}
                _hover={{ backgroundColor: "main.200"}} 
                onClick={onOpen}
            /> :
            (props.isOnMain ?
                <EditIcon
                    color="main.300"
                    _hover={{ color: "frost.200"}}
                    w="1.3rem" h="1.3rem"
                    aria-label="Edit Main Address"
                    onClick={onOpen}
                /> : 
                <Icon 
                    color="main.100"
                    _hover={{ color: "frost.300"}}
                    w="1.3rem" h="1.3rem"
                    aria-label="Edit Secondary Address"
                    onClick={onOpen}
            />)}
        <DefaultModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} index={props.index} type={props.modalSeelct} cpf={props.cpf}/>
    </>
  )
}