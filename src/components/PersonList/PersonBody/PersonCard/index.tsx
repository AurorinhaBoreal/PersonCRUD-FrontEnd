import { Box, Icon, Text } from '@chakra-ui/react'
import { MdLocationPin } from "react-icons/md";
import styles from "./index.module.css"
import PersonAvatar from './PersonAvatar';
import PlusIcon from '@components/Icons/PlusIcon';
import InfoIcon from '@components/Icons/InfoIcon';
import RemoveIcon from '@components/Icons/RemoveIcon';
import EditIconCustom from '@components/Icons/EditIcon';
import { sendInfoAddress } from '@utils/sendInfoAddress';

interface info {
    person: Person
    index: number
}

export default function PersonCard(props: info) {
    const personInfo = props.person
    let showPlusIcon:boolean = false
    let showInfoIcon:boolean = false
    let showAddress: boolean = false
    const mainAddressIndex:number = findMainAddress()

    function findMainAddress(): number {       
        return personInfo.addresses.findIndex(address => address.mainAddress)
    }
    
    // SE ADDRESSES FOR VAZIO -> PLUSICON
    if (personInfo.addresses.length == 0) {
        showPlusIcon = true
    } else
    // SE ADDRESSES APENAS TIVER MAINADDRESS -> INFOBUTTON
    if (personInfo.hasMainAddress && props.person.addresses.length >= 1) {
        showAddress = true
        showInfoIcon = true
        showPlusIcon = true
    } else

    // SE ADDRESSES APENAS TIVER SECONDARY ADDRESSES -> PLUSICON E INFOBUTTON
    if (!personInfo.hasMainAddress) {
        showAddress = false
        showPlusIcon = true
        showInfoIcon = true
    }

    const addressInfo = personInfo.addresses[mainAddressIndex]

    sendInfoAddress(personInfo.cpf);

    const formatCpf = (cpf: string) => {
        if (cpf) {
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
    }

    return (
    <>
        <Box className={styles.cardContainer} marginY="0.5rem" paddingY="0.4rem">
            <Box style={{display: "flex", width: "65%"}}>
                <PersonAvatar 
                    fName={personInfo.firstName}
                    lName={personInfo.lastName}
                    avatarId={personInfo.photoId}
                />
                <Box className={styles.cardInfoPerson}>
                    <Box className={styles.topInfo}>
                        <Text className={styles.nameText}>
                            {personInfo.firstName},
                        </Text>
                        <Text className={styles.ageText}>
                            {personInfo.age}
                        </Text>
                    </Box>
                    <Box className={styles.bottomInfo}>
                        <Text className={styles.surnameText}>
                            {personInfo.lastName}
                        </Text>
                        <Text className={styles.cpfText}>
                                - {formatCpf(personInfo.cpf)}
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box style={{display: "flex", alignItems: "center", marginRight: "15vw", width: "50%"}}>
                <Icon className={styles.pinIcon} as={MdLocationPin} h="6rem" w="6rem" color="main.100"/>
                <Box className={styles.cardInfoAddress}>
                    {showAddress ?  
                        (<>
                            <Box className={styles.topInfo}>
                                {addressInfo.street}, {addressInfo.neighborhood}, {addressInfo.number}
                            </Box>
                            <Box className={styles.bottomInfo}>
                                {addressInfo.city}, {addressInfo.uf} - {addressInfo.zipCode} ({addressInfo.country})
                            </Box>
                        </>) : <></>}
                </Box>
                <Box ml={"1vw"}>
                    {showPlusIcon ? (
                        <PlusIcon isButtonStyle isOnCard modalSelect='addAddress' index={props.index} cpf={props.person.cpf}/>
                        ) : <></>}
                </Box>
                <Box>
                    {showInfoIcon ? 
                    (<InfoIcon index={props.index} cpf={props.person.cpf}/>) : <></>}
                </Box>
            </Box>
            <Box className={styles.interactiveIcons}>
                <RemoveIcon isButtonStyle isOnMain/>
                <EditIconCustom isButtonStyle index={props.index} modalSeelct='updatePerson' cpf={props.person.cpf}/>
            </Box>
        </Box>
    </>
  )
}
