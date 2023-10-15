import {Flex, HStack, Link, VStack} from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout";
import {BsTelephone, BsInstagram, BsYoutube, BsFacebook, BsTwitter} from "react-icons/bs"
import {GoMail} from "react-icons/go"
import NextLink from 'next/link'


export const HeaderTop = () => {

  const socialLinks = [
    {
      name: 'instagram',
      link: '#',
      icon: <BsInstagram/>
    }, {
      name: 'youtube',
      link: '#',
      icon: <BsYoutube/>
    }, {
      name: 'facebook',
      link: '#',
      icon: <BsFacebook/>
    }, {
      name: 'twitter',
      link: '#',
      icon: <BsTwitter/>
    },
  ]

  return (
    <HStack bg={'textColor.100'} display={{base: 'none', lg: 'flex'}} color={'white'} py={'24px'}
            px={'20px'} justifyContent={'space-between'}>
      <HStack gap={'30px'}>
        <HStack>
          <BsTelephone/>
          <Text>+880 1729-925644</Text>
        </HStack>
        <HStack>
          <GoMail/>
          <Text>sakilahmed.dev@gmail.com</Text>
        </HStack>
      </HStack>
      <Text>Follow Us and get a chance to win 80% off</Text>
      <HStack>
        <Text>Follow Us :</Text>
        {socialLinks.map(({name, link, icon}) => {
          return <Link key={name} href={link} as={NextLink}>{icon}</Link>
        })}
      </HStack>

    </HStack>)
}