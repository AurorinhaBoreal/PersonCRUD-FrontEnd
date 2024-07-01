import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons"

interface buttonInfo {
    isButtonStyle: boolean;
    isOnCard: boolean;
    clickBehavior?: "createPerson" | "addAddress"
}

export default function PlusIcon(props:buttonInfo) {

    function verifyBehavior() {
        if (props.clickBehavior == "createPerson")
            console.log("Batata")
        else {
            console.log("Feijão!")
        }
    }

    return(
        <>
            {props.isButtonStyle ? 
                (props.isOnCard ?
                    <IconButton
                        backgroundColor="main.100" 
                        aria-label='Add Button' 
                        icon={<AddIcon color="frost.100" w="1.3rem" h="1.3rem"/>}
                        _hover={{ backgroundColor: "main.200"}} 
                        onClick={verifyBehavior}
                    /> :
                    <IconButton
                        backgroundColor="frost.100"
                        _active={{ color: "main.200"}}
                        aria-label='Add Button' 
                        icon={<AddIcon color="main.100" w="1.3rem" h="1.3rem"/>}
                        _hover={{ backgroundColor: "frost.200"}} 
                        onClick={verifyBehavior}
                    />
                ) : 
                <AddIcon 
                    color="main.100"
                    _hover={{ color: "frost.300"}}
                    aria-label="Add Secondary Address"
                    w="1.3rem" h="1.3rem"
                />       
            }
        </>
    )
}