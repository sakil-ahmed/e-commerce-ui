import {Text} from "@chakra-ui/layout";
import {HStack, Link} from "@chakra-ui/react";

export const NavMenu = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "#",
    }, {
      id: 2,
      name: "Shop",
      path: "#",
    }, {
      id: 3,
      name: "About",
      path: "#",
    }, {
      id: 4,
      name: "Blog",
      path: "#",
    }, {
      id: 5,
      name: "Contact",
      path: "#",
    }, {
      id: 6,
      name: "Pages",
      path: "#",
    },
  ]
  return (
    <HStack display={{base:'none' , lg:'flex'}}>
      <HStack gap={'20px'}>
        {menu.map(({name, path, id}, i) => {
          return (<Link _hover={{textDecoration: 'none'}} href={path} key={id + name}>
            <Text color={'textColor.50'}>
              {name}
            </Text>
          </Link>)
        })}
      </HStack>
    </HStack>

  )
}