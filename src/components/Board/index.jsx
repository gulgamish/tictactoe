import React from 'react';
import { Container, Grid, GridItem } from "@chakra-ui/react"

export default function Board() {

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
                <GridItem borderRight="1px solid #2c2c2c" borderBottom="1px solid #2c2c2c">

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