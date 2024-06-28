import { Box, Icon, IconButton, Image, Text } from "@chakra-ui/react"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import styles from "./index.module.css"
import logo from "@assets/images/logo.png"

export default function Header() {
    const linkedIn:string = "https://www.linkedin.com/in/aurora-kruschewsky"
    const gitHub:string = "https://github.com/AurorinhaBoreal?tab=overview&from=2024-06-01&to=2024-06-24"

    return(
        <Box className={styles.header}>
            <Box className={styles.headerContent}>
                <Image src={logo} className={styles.headerLogo} alt="Logo PersonCRUD"/>
                <Text fontSize="5xl" className={styles.headerTitle}>
                    Person CRUD
                </Text>
                <Box className={styles.headerDivider}/>
                <Text fontSize="2xl" className={styles.headerSlogan}>
                    Virtual persons still look like real ones
                </Text>
            </Box>
            <Box className={styles.headerIcons}>
                <IconButton
                    onClick={() => window.open(gitHub, "_blank")}
                    _hover="none"
                    backgroundColor="#b592fd"
                    colorScheme='gray'
                    aria-label='GitHub Link'
                    icon={<Icon as={FaGithubSquare} boxSize={50}/>}
                />
                <IconButton
                    onClick={() => window.open(linkedIn, "_blank")}
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