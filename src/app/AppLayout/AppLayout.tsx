import {Header} from "@/app/AppLayout/Header/Header";
import React from "react";
import {Box} from "@chakra-ui/react";
import {Footer} from "@/app/AppLayout/Footer/Footer";

export const AppLayout = ({children}: {
  children: React.ReactNode
}) => {
  return (
    <Box>
      <Header/>
      {children}
      <Footer/>
    </Box>
  )
}