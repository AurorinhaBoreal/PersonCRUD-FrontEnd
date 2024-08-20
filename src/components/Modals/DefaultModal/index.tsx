import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import CreatePersonBody from '../CreatePerson/Body'

interface modal {
    isOpen: any
    onOpen: any
    onClose: any
    type: string
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
