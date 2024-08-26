import { IconButton, useDisclosure } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons"
import DefaultModal from "@components/Modals/DefaultModal";

interface buttonInfo {
    isButtonStyle: boolean;
    isOnCard: boolean;
    modalSelect: "createPerson" | "addAddress"
    index: number
}

export default function PlusIcon(props: buttonInfo) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {props.isButtonStyle ?
                (props.isOnCard ?
                    <IconButton
                        backgroundColor="main.100"
                        aria-label='Add Button'
                        icon={<AddIcon color="frost.100" w="1.3rem" h="1.3rem" />}
                        _hover={{ backgroundColor: "main.200" }}
                        onClick={onOpen}
                    /> :
                    <IconButton
                        backgroundColor="frost.100"
                        _active={{ color: "main.200" }}
                        aria-label='Add Button'
                        icon={<AddIcon color="main.100" w="1.3rem" h="1.3rem" />}
                        _hover={{ backgroundColor: "frost.200" }}
                        onClick={onOpen}
                    />
                ) :
                <AddIcon
                    color="main.100"
                    _hover={{ color: "frost.300" }}
                    aria-label="Add Secondary Address"
                    w="1.3rem" h="1.3rem"
                />
            }
            <DefaultModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} index={props.index} type={props.modalSelect} />
        </>
    )
}