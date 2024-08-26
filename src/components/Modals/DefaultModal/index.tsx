import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import CreatePersonBody from '../CreatePerson'
import AddAddressBody from '../AddAddress'
import UpdatePerson from '../UpdatePerson'
import PersonInfo from '../PersonInfo'

interface modal {
    isOpen: any
    onOpen: any
    onClose: any
    type: string
    index: number
    cpf: string
}

export default function index(props: modal) {
    const { isOpen, onClose } = props
    let modalTitle = ""
    let modalBody = null
    let buttonText = ""
    switch (props.type) {
        case "createPerson":
            modalTitle = "Create Person"
            buttonText = "Create"
            modalBody = <CreatePersonBody buttonText={buttonText} />
            break;
        case "updatePerson":
            modalTitle = "Update Person"
            buttonText = "Update"
            modalBody = <UpdatePerson buttonText={buttonText} index={props.index}/>
            break;
        case "personInfo":
            modalTitle = "Info Person"
            modalBody = <PersonInfo index={props.index} cpf={props.cpf}/>
            break;
        case "addAddress":
            modalTitle = "Add Address"
            buttonText = "Add"
            modalBody = <AddAddressBody index={props.index} buttonText={buttonText} />;
            break;
        case "updateMainAddress":

            break;
        case "updateSecondaryAddress":

            break;
        default:
            break;
    }

    return (
        <Modal
            size={"xl"}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent borderRadius={20}>
                <ModalHeader textAlign={"center"} borderTopRadius={20} pt={2} pb={2} color={"white"} bg={"main.100"}>{modalTitle}</ModalHeader>
                <ModalCloseButton color={"white"} />
                {modalBody}
            </ModalContent>
        </Modal>
    )
}
