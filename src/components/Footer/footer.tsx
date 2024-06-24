import { Box, Text } from "@chakra-ui/react"
import styles from "./footer.module.css"

export default function Index() {

    return(
        <Box className={styles.footer}>
            <Text>
                2024 Made by Aurora Kruschewsky
            </Text>
            <Text className={styles.waterMark}>
                :3
            </Text>
        </Box>
    )
}