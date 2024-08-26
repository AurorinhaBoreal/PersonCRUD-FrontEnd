import { ModalBody, Flex, Text, Image, Box } from "@chakra-ui/react";
import { getAllAvatar } from '@utils/getAvatarImage';
import { useEffect, useState } from "react";
import personService from "service/personService";
import styles from "./personInfo.module.css"
import RemoveIcon from "@components/Icons/RemoveIcon";
import EditIconCustom from "@components/Icons/EditIcon";

interface info {
    index: number;
    cpf: string;
}
export default function PersonInfo(props: info) {
    const [delayedState, setDelayedState] = useState(false)
    const [data, setData] = useState<Person>();
    const [mainAddress, setMainAddress] = useState<Address | null>()
    const [secondaryAddressInfo, setSecondaryAddressInfo] = useState(false)
    const [secondaryAddresses, setSecondaryAddresses] = useState<Address[]>()
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        getPerson()
        setPersonAvatar()
        getMainAddress()
        getSecondaryAddresses()
        verifySecAddresses()
    }, [delayedState])

    const getPerson = async () => {
        const data = await personService.getSpecificPerson(props.cpf);
        if (data == undefined) {
            throw Error("Data is Undefined")
        } else {
            setData(data)
        }
        setDelayedState(true)
    }

    const getMainAddress = () => {
        data?.addresses.map(address => {
            if (address.mainAddress) {
                setMainAddress(address)
            } else {
                setMainAddress(null)
            }
        })
        setDelayedState(false)
    }

    const getSecondaryAddresses = () => {
        const addresses: Address[] = []
        data?.addresses.map(address => {
            if (!address.mainAddress) {
                addresses.push(address)
            }
        })
        setSecondaryAddresses(addresses)
        
    }

    const verifySecAddresses = () => {
        if (secondaryAddresses != undefined) {
            if (secondaryAddresses?.length > 0) {
                setSecondaryAddressInfo(true)
            } else {
                setSecondaryAddressInfo(false)    
            }
        } else {
            setSecondaryAddressInfo(false)
        }
    }

    const setPersonAvatar = () => {
        const avatars = getAllAvatar()
        if (data != undefined) setAvatar(avatars[data?.photoId-1])

    const formatCpf = (cpf: string | undefined) => {
        if (cpf) {
            return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
    }
    

  return (
    <>
        <ModalBody display={"block"}>
            <Flex className={styles.mainInfo}>
                <Image className={styles.personAvatar} src={avatar}/>
                <Box className={styles.textWrapper}>
                    <Text className={styles.personName}>{data?.firstName} {data?.lastName}, {data?.age}</Text>
                    <Text className={styles.personDetails}>{data?.birthDate} - {formatCpf(data?.cpf)}</Text>
                </Box>
            </Flex>
            <Box className={styles.mainAddressDiv}>
                <Flex className={styles.mainHeader}>
                    <Box/>
                    <Text>
                        Main Address
                    </Text>
                    <Box display={"flex"} gap={"0.5vw"}>
           <EditIconCustom
                            isButtonStyle={false}
                            isOnMain={true}
                            modalSeelct="editAddressMain"
                            cpf={props.cpf}
                            index={props.index}
                        />
                        <RemoveIcon
                            isButtonStyle={false}
                            isOnMain={true}
                        />
                    </Box>
                </Flex>
                <Box className={styles.mainBody}>
                    {mainAddress ? (
                        <>
                            <Flex className={styles.line}>
                                <Text className={styles.infoDesc}>St.</Text>
                                <Text className={styles.info}>{mainAddress?.street}</Text>
                                <Text className={styles.infoDesc}>NBHd.</Text>
                                <Text className={styles.info}>{mainAddress?.neighborhood}</Text>
                                <Text className={styles.infoDesc}>No.</Text>
                                <Text className={styles.info}>{mainAddress?.number}</Text>
                            </Flex>
                            <Flex className={styles.line}>
                                <Text className={styles.infoDesc}>City</Text>
                                <Text className={styles.info}>{mainAddress?.city}</Text>
                                <Text className={styles.infoDesc}>ST.</Text>
                                <Text className={styles.info}>{mainAddress?.uf}</Text>
                            </Flex>
                            <Flex className={styles.line}>
                                <Text className={styles.infoDesc}>Co.</Text>
                                <Text className={styles.info}>{mainAddress?.country}</Text>
                                <Text className={styles.infoDesc}>ZIP Code</Text>
                                <Text className={styles.info}>{mainAddress?.zipCode}</Text>
                            </Flex>
                        </>
                    ) : (
                        <Text className={styles.noAddress}>
                            There is no Main Address Registered! Register one to see it here!
                        </Text>
                    )}
                </Box>
            </Box>
            <Box className={styles.secondaryAddressDiv}>
                <Flex className={styles.secondaryHeader}>
                    <Box/>
                    <Text>
                        Secondary Address
                    </Text>
                    <Box/>
                </Flex>
                <Box className={styles.secondBody}>
                    {secondaryAddressInfo ? (
                        <>
                            {secondaryAddresses?.map(sAddress => {
                                if (secondaryAddresses != undefined) {
                                    return (
                                        <>
                                            <Flex className={styles.line}>
                                                <Text className={styles.infoDesc}>St.</Text>
                                                <Text className={styles.info}>{sAddress?.street}</Text>
                                                <Text className={styles.infoDesc}>NBHd.</Text>
                                                <Text className={styles.info}>{sAddress?.neighborhood}</Text>
                                                <Text className={styles.infoDesc}>No.</Text>
                                                <Text className={styles.info}>{sAddress?.number}</Text>
                                            </Flex>
                                            <Flex className={styles.line}>
                                                <Text className={styles.infoDesc}>City</Text>
                                                <Text className={styles.info}>{sAddress?.city}</Text>
                                                <Text className={styles.infoDesc}>ST.</Text>
                                                <Text className={styles.info}>{sAddress?.uf}</Text>
                                            </Flex>
                                            <Flex className={styles.line}>
                                                <Text className={styles.infoDesc}>Co.</Text>
                                                <Text className={styles.info}>{sAddress?.country}</Text>
                                                <Text className={styles.infoDesc}>ZIP Code</Text>
                                                <Text className={styles.info}>{sAddress?.zipCode}</Text>
                                            </Flex>
                                        </>
                                    )
                                }
                            })}  
                        </>
                    ) : (
                        <Text className={styles.noAddress}>
                            There is no Secondary Addresses Registered! Register one or more to see it here!
                        </Text>
                    )}
                </Box>
            </Box>
        </ModalBody>
    </>
  )
}
