'use client'
import {CacheProvider} from '@chakra-ui/next-js'
import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import {theme} from "@/common/theme/theme";

export default function Provider({children}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}