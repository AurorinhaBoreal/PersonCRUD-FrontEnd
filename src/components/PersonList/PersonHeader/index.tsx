import { Box, Input, Text, IconButton } from "@chakra-ui/react"
import PlusIcon from "@components/Icons/PlusIcon/index"
import styles from "./index.module.css"
import { Search2Icon } from "@chakra-ui/icons"

export default function PersonHeader() {

    return(
        <Box className={styles.pHeaderContainer} bg="main.100">
            <PlusIcon isOnCard={false} isButtonStyle clickBehavior="createPerson"/>
            <Text className={styles.pHeaderText}>
                Person List
            </Text>
            <Box className={styles.pHeaderSearch}>
                <Input w="20vw" aria-label="Search Input" bg="frost.100"/>
                <IconButton 
                    aria-label="Search Button"
                    icon={<Search2Icon color="main.100" w={25} h={25}/>}
                />
            </Box>
        </Box>
    )
}