import { Icon, Avatar } from '@chakra-ui/react'
import { getAvatarImage } from '@utils/getAvatarImage';
import { FaRegUserCircle } from "react-icons/fa";

interface avatar {
  fName:string,
  lName:string,
  avatarId:number
}

export default function PersonAvatar(props:avatar) {

  let personAvatar = getAvatarImage(props.avatarId)
  return (
    <>
        <Avatar 
          name={props.fName+" "+props.lName}
          color="frost.100"
          icon={<Icon
            as={FaRegUserCircle}
            color="main.100"
            backgroundColor="frost.100"
            borderRadius={100}
            w="5.8rem" h="5.8rem"
            />} 
          size={"xl"}
          bg="main.100"
          src={personAvatar}
        />
    </>
  )
}
