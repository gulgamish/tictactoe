import React from 'react';
import { Container, Grid, GridItem } from "@chakra-ui/react"
import GameMachine from "../../machines/game"
import { useMachine } from "@xstate/react"
import Button from "../Button"

export default function Board() {
    const [states, send] = useMachine(GameMachine);

    console.log(states.context)

    return (
        <Container maxW="sm">
            <h1>Board</h1>
            <Grid
                templateColumns="1fr 1fr 1fr"
                templateRows="1fr 1fr 1fr"
                width="200px"
                height="200px"
                border="1px solid #2c2c2c"
            >
                <GridItem
                    borderRight="1px solid #2c2c2c"
                    borderBottom="1px solid #2c2c2c"
                >
                    
                </GridItem>
                <GridItem borderRight="1px solid #2c2c2c" borderBottom="1px solid #2c2c2c">

                </GridItem>
                <GridItem borderBottom="1px solid #2c2c2c">

                </GridItem>
                <GridItem borderRight="1px solid #2c2c2c" borderBottom="1px solid #2c2c2c">

                </GridItem>
                <GridItem borderRight="1px solid #2c2c2c" borderBottom="1px solid #2c2c2c">

                </GridItem>
                <GridItem borderBottom="1px solid #2c2c2c">

                </GridItem>
                <GridItem borderRight="1px solid #2c2c2c">

                </GridItem>
                <GridItem borderRight="1px solid #2c2c2c">

                </GridItem>
                <GridItem>

                </GridItem>
            </Grid>
        </Container>
    )
}