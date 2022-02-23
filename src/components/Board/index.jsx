import React, { useEffect } from 'react';
import { Container, Grid, GridItem, Text, Flex, Box } from "@chakra-ui/react"
import GameMachine from "../../machines/game"
import { useMachine } from "@xstate/react"
import { Player } from '../../constants';
import Button from "../Button"

const PlayerX = () => <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
        <Text fontSize="30px" fontWeight="500" color="blue.400">X</Text>
    </Flex>
const PlayerO = () => <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
        <Text fontSize="30px" fontWeight="500" color="green.400">O</Text>
    </Flex>

const PlayerPiece = ({ player }) => {
    switch (player) {
        case Player.X:
            return <PlayerX />
        case Player.O:
            return <PlayerO />
        default:
            return null
    }
}

export default function Board() {
    const [states, send] = useMachine(GameMachine);

    console.log(states.context)

    useEffect(() => {
        send({  type: "START_GAME" })
    }, [])

    const onFieldClick = (e) => {
        var row = e.currentTarget.getAttribute("data-row-index");
        var col = e.currentTarget.getAttribute("data-column-index");
        send({ type: "PUT_PIECE", payload: { row, col } })
    }

    return (
        <Grid gap="10px">
            <h1>Board</h1>
            <Flex justifyContent="center">
                <Grid
                    templateColumns="1fr 1fr 1fr"
                    templateRows="1fr 1fr 1fr"
                    width="200px"
                    height="200px"
                    border="1px solid #2c2c2c"
                    justifyContent="center"
                >
                    <GridItem
                        borderRight="1px solid #2c2c2c"
                        borderBottom="1px solid #2c2c2c"
                        cursor="pointer"
                        data-row-index={0}
                        data-column-index={0}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[0][0]} />
                    </GridItem>
                    <GridItem
                        borderRight="1px solid #2c2c2c"
                        borderBottom="1px solid #2c2c2c"
                        cursor="pointer"
                        data-row-index={0}
                        data-column-index={1}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[0][1]} />
                    </GridItem>
                    <GridItem
                        borderBottom="1px solid #2c2c2c"
                        cursor="pointer"
                        data-row-index={0}
                        data-column-index={2}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[0][2]} />
                    </GridItem>
                    <GridItem
                        borderRight="1px solid #2c2c2c"
                        borderBottom="1px solid #2c2c2c"
                        cursor="pointer"
                        data-row-index={1}
                        data-column-index={0}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[1][0]} />
                    </GridItem>
                    <GridItem
                        borderRight="1px solid #2c2c2c"
                        borderBottom="1px solid #2c2c2c"
                        cursor="pointer"
                        data-row-index={1}
                        data-column-index={1}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[1][1]} />
                    </GridItem>
                    <GridItem
                        borderBottom="1px solid #2c2c2c"
                        cursor="pointer"
                        data-row-index={1}
                        data-column-index={2}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[1][2]} />
                    </GridItem>
                    <GridItem
                        borderRight="1px solid #2c2c2c"
                        cursor="pointer"
                        data-row-index={2}
                        data-column-index={0}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[2][0]} />
                    </GridItem>
                    <GridItem
                        borderRight="1px solid #2c2c2c"
                        cursor="pointer"
                        data-row-index={2}
                        data-column-index={1}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[2][1]} />
                    </GridItem>
                    <GridItem
                        cursor="pointer"
                        data-row-index={2}
                        data-column-index={2}
                        onClick={onFieldClick}
                    >
                        <PlayerPiece player={states.context.board[2][2]} />
                    </GridItem>
                </Grid>
            </Flex>
            {states.matches("playing") && (
                <Flex justifyContent="space-evenly">
                    <Flex alignItems="center" gap="5px">
                        <Box width="10px" height="10px" backgroundColor={states.context.turn === Player.O ? "green.400" : "green.100"} borderRadius="50%" />
                        <Text>Player O</Text>
                    </Flex>
                    <Flex alignItems="center" gap="5px">
                        <Box width="10px" height="10px" backgroundColor={states.context.turn === Player.X ? "blue.400" : "blue.100"} borderRadius="50%" />
                        <Text>Player X</Text>
                    </Flex>
                </Flex>
            )}
        </Grid>
    )
}