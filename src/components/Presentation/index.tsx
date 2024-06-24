import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./index.module.css"
import logo from "@assets/images/logo.png"

export default function Index() {
    
    return(
        <Box className={styles.presentationContainer}>
            <Box className={styles.contentBackground}>
                <Image src={logo} alt="PersonCRUD Logo" className={styles.presentationLogo}/>
                <Box className={styles.contentContaienr}>
                    <Text className={styles.presentationTitle}>
                        Person CRUD
                    </Text>
                    <Text className={styles.presentationSlogan}>
                        Virtual persons still look like real ones
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}