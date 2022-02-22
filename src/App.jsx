import React from "react"
import Board from "./components/Board"
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {
    return (
        <ChakraProvider>
            <Board />
        </ChakraProvider>
    )
}