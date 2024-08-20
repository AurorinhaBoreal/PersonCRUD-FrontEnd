import { Box, Text, Button, Flex, Image, FormControl, FormLabel, Input, ModalBody, ModalFooter, useToast } from '@chakra-ui/react'
import avatarDefault from "../../../../assets/avatar-icon.png"
import InputMask from 'react-input-mask'
import styles from "./createPerson.module.css"
import personService from 'service/personService'
import { ChangeEvent, useState } from 'react'
import { getAllAvatar } from '@utils/getAvatarImage'

interface info {
    buttonText: string
}

export default function CreatePersonBody(props: info) {
    const [avatar, setAvatar] = useState(avatarDefault)
    const toast = useToast();

    const [formData, setFormData] = useState<CreatePersonDTO>({
        firstName: "",
        lastName: "",
        birthDate: "",
        cpf: "",
        photoId: 0,
      });

    const handleSubmit = async () => {
        const response = await personService.createPerson(formData);
        if (response) { 
            toast({
                position: "bottom",
                status: "error",
                title: 'Error', 
                description: response,
                duration: 5000,
                isClosable: false
              })
          } else {
            setFormData({
              firstName: "",
              lastName: "",
              birthDate: "",
              cpf: "",
              photoId: 0
            })
            toast({
                position: "bottom",
                status: "success",
                title: 'Person Created', 
                description: "If you want to see the Person, realod the page!",
                duration: 5000,
                isClosable: true
              })
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        if (name == "cpf") {
            const formattedCPF: string = value.replace(/\D/g, '');
            console.log(formattedCPF)
            setFormData({
                ...formData,
                cpf: formattedCPF,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    const handleAvatar = (selectedIndex: number) => {
        setFormData({
            ...formData,
            photoId: selectedIndex
        })
    }

    const avatars = getAllAvatar();

    const setAvatarImage = (selected: number) => {
        let selectedAvatar = avatars[selected]
        setAvatar(selectedAvatar)
        handleAvatar(selected+1)
    }

    return (
        <>
            <ModalBody>
                <Flex className={styles.avatarWrapper}>
                    <Image className={styles.avatarImg} src={avatar}/>
                    <Text className={styles.avatarTitle}>Your Avatar</Text>
                    <Flex className={styles.optionsWrapper}>
                        {avatars.map((avatar, index) => (
                            <Image key={index} className={styles.avatarImgs} src={avatar} onClick={() => setAvatarImage(index)}/>
                        ))}
                    </Flex>
                </Flex>
                <Box>
                    <FormControl>
                        <FormLabel>First Name:</FormLabel>
                        <Input placeholder='First name' name='firstName' value={formData.firstName} onChange={handleChange}/>
                    </FormControl>
                </Box>
                <FormControl mt={4}>
                    <FormLabel>Last Name:</FormLabel>
                    <Input placeholder='Last name' name='lastName' value={formData.lastName} onChange={handleChange}/>
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>CPF:</FormLabel>
                    <Input className={styles.inputs} placeholder='123.456.789-00' as={InputMask} mask={"999.999.999-99"} maskChar={null} name='cpf' value={formData.cpf} onChange={handleChange}/>
                </FormControl>
                    <FormControl mt={4}>
                    <FormLabel>Birth Date:</FormLabel>
                    <Input placeholder='12/05/1997' type='date' name='birthDate' value={formData.birthDate} onChange={handleChange}/>
                </FormControl>
            </ModalBody>
            <ModalFooter justifyContent={"center"}>
                <Button color='white' bg={"main.100"} onClick={handleSubmit}>
                    {props.buttonText}
                </Button>
            </ModalFooter>
        </>
    )
}
