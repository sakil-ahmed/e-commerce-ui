import {Box, HStack, Image} from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout";
import {HeaderTop} from "@/app/AppLayout/Header/HeaderTop";
import {CartIcon, LoveIcon, SearchIcon, UserIcon} from "@/common/icons";
import {NavMenu} from "@/app/AppLayout/Header/NavMenu";

export const Header = () => {
  return (
    <>
      <HeaderTop/>
      <HStack justifyContent={'space-between'} px={'20px'} py={'24px'}>
        <HStack gap={'120px'}>
          <Image src={'/Bandage.svg'}/>
          {/*Nav Menu*/}
          <NavMenu/>
        </HStack>

        <HStack gap={'30px'}>
          <HStack cursor={'pointer'}>
            <UserIcon/>
            <Text color={'primary.500'}>Login / Register</Text>
          </HStack>
          <Box cursor={'pointer'}><SearchIcon/></Box>

          <HStack cursor={'pointer'} gap={'5px'}>
            <CartIcon/>
            <Text fontWeight={'400'} fontSize={'12px'} color={'primary.500'}>1</Text>
          </HStack>
          <HStack cursor={'pointer'} gap={'5px'}>
            <LoveIcon/>
            <Text fontWeight={'400'} fontSize={'12px'} color={'primary.500'}>5</Text>
          </HStack>
        </HStack>
      </HStack>
    </>

  )
}

