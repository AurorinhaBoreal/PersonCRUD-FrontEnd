import { Box, Icon, IconButton, Image, Text } from "@chakra-ui/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

import styles from "./header.module.css"
import logo from "@assets/images/logo.png"

export default function Index() {

    return(
        <Box className={styles.header}>
            <Box className={styles.headerContent}>
                <Image src={logo} className={styles.headerLogo} alt="Logo PersonCRUD"/>
                <Text fontSize="5xl" className={styles.headerTitle}>
                    PersonCRUD
                </Text>
                <Box className={styles.headerDivider}/>
                <Text fontSize="2xl" className={styles.headerSlogan}>
                    Virtual persons still look like real ones
                </Text>
            </Box>
            <Box className={styles.headerIcons}>
                <IconButton
                        _hover="none"
                        backgroundColor="#b592fd"
                        colorScheme='gray'
                        aria-label='GitHub Link'
                        icon={<Icon as={FaGithubSquare} boxSize={50}/>}
                    />
                <IconButton
                    _hover="none"
                    backgroundColor="#b592fd"
                    colorScheme='gray'
                    aria-label='LinkedIn Link'
                    icon={<Icon as={FaLinkedin} boxSize={50}/>}
                />
            </Box>
        </Box>
    )
}