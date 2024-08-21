import { Box, Button, Flex, FormControl, FormLabel, Input, ModalBody, ModalFooter, useToast, RadioGroup, Radio } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import addressService from 'service/addressService'
import { receiveInfoAddress } from '@utils/sendInfoAddress'

interface info {
    buttonText: string
    index: number
}

export default function AddAddressBody(props: info) {
    const toast = useToast();
    const [handledCpf, setHandledCpf] = useState(false)
    const identifier = Math.floor(100000000 + Math.random() * 900000000);
    
    const [formData, setFormData] = useState<AddAddressDTO>({
        addressIdentifier: identifier,
        personCpf: "",
        mainAddress: true,
        country: "",
        zipCode: "",
        uf: "",
        city: "",
        neighborhood: "",
        street: "",
        number: "",
        complement: ""
    });

    const handleSubmit = async () => {
        const response = await addressService.createAddress(formData);
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
                addressIdentifier: 0,
                personCpf: "",
                mainAddress: false,
                country: "",
                zipCode: "",
                uf: "",
                city: "",
                neighborhood: "",
                street: "",
                number: "",
                complement: ""
            })
            toast({
                position: "bottom",
                status: "success",
                title: 'Address Created', 
                description: "If you want to see the Address, realod the page!",
                duration: 5000,
                isClosable: true
              })
        }
        console.log(formData)
    }

    const handleRadio = (value: string) => {
        let formattedValue;
        if (value == "1") formattedValue = true
        else formattedValue = false
        setFormData({
            ...formData,
            mainAddress: formattedValue,
        });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        if (!handledCpf) {
            handleCpf()
        }
        setFormData({
            ...formData,
            [name]: value
        });
        
    }

    const handleCpf = async () => {
        const cpf = await receiveInfoAddress()
        setFormData({
            ...formData,
            personCpf: cpf[props.index]
        })
        setHandledCpf(true)
    }
    
    return (
        <>
            <ModalBody>
                <Box>
                    <FormControl>
                        <FormLabel>Street:</FormLabel>
                        <Input placeholder='Estrada Avizinha' name='street' value={formData.street} onChange={handleChange}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Neighborhood:</FormLabel>
                        <Input placeholder='Fernandita' name='neighborhood' value={formData.neighborhood} onChange={handleChange}/>
                    </FormControl>
                    <Flex>
                        <FormControl mt={4}>
                            <FormLabel>Number:</FormLabel>
                            <Input placeholder='1234' name='number' value={formData.number} onChange={handleChange}/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Complement:</FormLabel>
                            <Input placeholder='Casa 23' name='complement' value={formData.complement} onChange={handleChange}/>
                        </FormControl>
                    </Flex>
                    <Flex>
                        <FormControl mt={4}>
                            <FormLabel>City:</FormLabel>
                            <Input placeholder="Taboão da Serra" name='city' value={formData.city} onChange={handleChange}/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>UF:</FormLabel>
                            <Input placeholder='SP' type='string' name='uf' value={formData.uf} minLength={2} maxLength={2} onChange={handleChange}/>
                        </FormControl>
                    </Flex>
                    <Flex>
                        <FormControl mt={4}>
                            <FormLabel>Country:</FormLabel>
                            <Input placeholder='Canadá' type='string' name='country' value={formData.country} onChange={handleChange}/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>ZIP Code:</FormLabel>
                            <Input placeholder='12345687' type='string' name='zipCode' value={formData.zipCode} onChange={handleChange}/>
                        </FormControl>
                    </Flex>
                    <RadioGroup onChange={handleRadio}
                        mt={"1vw"} 
                        gap={"2vw"} 
                        display={"flex"} 
                        justifyContent={"center"}
                        defaultValue='1'
                        colorScheme='purple'
                        >
                        <Radio value="1">Main Address</Radio>
                        <Radio value="2">Secondary Address</Radio>
                    </RadioGroup>
                </Box>
            </ModalBody>
            <ModalFooter justifyContent={"center"}>
                <Button color='white' bg={"main.100"} onClick={handleSubmit}>
                    {props.buttonText}
                </Button>
            </ModalFooter>
        </>
    )
}
