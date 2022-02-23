import { createMachine } from "xstate"
import { Player } from "../constants"

export default createMachine({
    initial: "idle",
    context: {
        board: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        turn: Player.X
    },
    states: {
        idle: {
            on: {
                START_GAME: "playing"
            }
        },
        playing: {
            on: {
                PUT_PIECE: [
                    {
                        cond: "isWinX",
                        target: "winX"
                    },
                    {
                        cond: "isWinO",
                        target: "winO"
                    },
                    {
                        target: "playing",
                        actions: "putPiece",
                        cond: "isValidMove"
                    }
                ],
            }
        },
        winX: {
            on: {
                RESET: "idle"
            }
        },
        winO: {
            on: {
                RESET: "idle"
            }
        }
    }
}, {
    guards: {
        isValidMove: (context, event) => {
            var coords = event.payload;
            var squareValue = context.board[coords.row][coords.col];
            if (squareValue === 0)
                return true;
            return false;
        },
        isWinX: (context, event) => {
            var board = context.board;
            
            return false;

        },
        isWinO: (context, event) => {
            return false;
        }
    },
    actions: {
        putPiece: (context, event) => {
            var coords = event.payload;
            context.board[coords.row][coords.col] = context.turn;
            context.turn = context.turn === Player.X ? Player.O : Player.X;
        }
    },
});