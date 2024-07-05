import { EditIcon } from "@chakra-ui/icons";
import { Icon, IconButton } from "@chakra-ui/react";


interface buttonInfo {
    isButtonStyle: boolean;
    isOnMain: boolean;
    clickBehavior?: "deletePerson" | "deleteAddress"
}

export default function EditIconCustom(props:buttonInfo) {
  return (
    <>
        {props.isButtonStyle ? 
            <IconButton
                backgroundColor="main.100" 
                aria-label='Add Button' 
                icon={<EditIcon color="frost.100" w="1.6rem" h="1.6rem"/>}
                _hover={{ backgroundColor: "main.200"}} 
                // onClick={clickBehavior?}
            /> :
            (props.isOnMain ?
                <EditIcon
                    color="frost.300"
                    _hover={{ color: "main.100"}}
                    aria-label="Edit Main Address"
                /> : 
                <Icon 
                    color="main.100"
                    _hover={{ color: "frost.300"}}
                    aria-label="Edit Secondary Address"
            />)}
    </>
  )
}