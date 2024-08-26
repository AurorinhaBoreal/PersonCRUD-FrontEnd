import { Icon, IconButton } from "@chakra-ui/react";
import { CiCircleRemove } from "react-icons/ci";


interface buttonInfo {
    isButtonStyle: boolean;
    isOnMain: boolean;
    clickBehavior?: "deletePerson" | "deleteAddress"
}

export default function RemoveIcon(props:buttonInfo) {
  return (
    <>
        {props.isButtonStyle ? 
            <IconButton
                backgroundColor="main.100" 
                aria-label='Add Button' 
                icon={<Icon as={CiCircleRemove} color="frost.100" w="1.8rem" h="1.8rem"/>}
                _hover={{ backgroundColor: "main.200"}} 
                // onClick={clickBehavior?}
            /> :
            (props.isOnMain ?
                <Icon
                    size={"xl"}
                    as={CiCircleRemove}
                    color="main.300"
                    _hover={{ color: "frost.200"}}
                    w="1.3rem" h="1.3rem"
                    aria-label="Remove Main Address"
                /> : 
                <Icon 
                size={"xl"}
                as={CiCircleRemove}
                color="main.100"
                _hover={{ color: "frost.300"}}
                w="1.3rem" h="1.3rem"
                aria-label="Remove Secondary Address"
            />)}
    </>
  )
}