"use client"
import {Box, Button, HStack, Image} from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout";
import {HeaderTop} from "@/app/AppLayout/Header/HeaderTop";
import {CartIcon, LoveIcon, MobileMenuIcon, SearchIcon, UserIcon} from "@/common/icons";
import {NavMenu} from "@/app/AppLayout/Header/NavMenu";
import {useDisclosure} from "@chakra-ui/hooks";
import {Search} from "@/app/AppLayout/Header/components/Search";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <HeaderTop/>
      <HStack justifyContent={'space-between'} px={'20px'} py={'24px'}>
        <HStack gap={{base: "50px", lg: '120px'}}>
          <Image src={'/Bandage.svg'}/>
          {/*Nav Menu*/}
          <NavMenu/>
        </HStack>

        <HStack gap={'30px'} display={{base: "none", lg: "flex"}}>
          <HStack cursor={'pointer'}>
            <UserIcon/>
            <Text color={'primary.500'}>Login / Register</Text>
          </HStack>
          <Box onClick={onOpen} cursor={'pointer'}><SearchIcon/></Box>

          <HStack cursor={'pointer'} gap={'5px'}>
            <CartIcon/>
            <Text fontWeight={'400'} fontSize={'12px'} color={'primary.500'}>1</Text>
          </HStack>
          <HStack cursor={'pointer'} gap={'5px'}>
            <LoveIcon/>
            <Text fontWeight={'400'} fontSize={'12px'} color={'primary.500'}>5</Text>
          </HStack>
        </HStack>
        {/* Mobile Menu Cta */}
        <HStack gap={'25px'} display={{base: "flex", lg: "none"}}>
          <Button onClick={onOpen} variant={'unstyled'} ><SearchIcon color={'#252B42'}/></Button>
          <Button variant={'unstyled'} ><CartIcon color={'#252B42'}/></Button>
          <Button variant={'unstyled'} > <MobileMenuIcon/></Button>
        </HStack>
      </HStack>
    {/*  Extra Components */}
      <Search isOpen={isOpen} onClose={onClose}/>
    </>

  )
}

