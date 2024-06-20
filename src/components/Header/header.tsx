import { Box, Icon, IconButton, Image, Text } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

import { FaGithubSquare } from "react-icons/fa";

import styles from "./header.module.css"
import logo from "@assets/images/logo.png"

export default function index() {

    return(
        <Box className={styles.header}>
            <Box className={styles.headerContent}>
                <Image src={logo} className={styles.headerLogo} alt="Logo PersonCRUD"/>
                <Text fontSize="5xl" className={styles.headerTitle}>
                    PersonCRUD
                </Text>
                <Box className={styles.headerDivider}/>
            </Box>
            <Box className={styles.headerIcons}>
            <IconButton
                    _hover="none"
                    backgroundColor="#b592fd"
                    colorScheme='gray'
                    aria-label='GitHub Link'
                    icon={<Icon as={FaGithubSquare} boxSize={50}/>}
                />
            </Box>
        </Box>
    )
}