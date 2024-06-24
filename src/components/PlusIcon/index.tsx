import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons"

interface buttonInfo {
    isButtonStyle: boolean;
    clickBehavior?: "createPerson" | "addAddress"
}

export default function Index(props:buttonInfo) {

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
                <IconButton
                    backgroundColor="frost.100" 
                    aria-label='Add Button' 
                    icon={<AddIcon color="main.100"/>}
                    _hover={{ backgroundColor: "frost.200"}} 
                    onClick={verifyBehavior}
                /> : 
                <AddIcon 
                    color="main.100"
                    _hover={{ color: "frost.300"}}
                    aria-label="Add Secondary Address"
                />       
            }
        </>
    )
}