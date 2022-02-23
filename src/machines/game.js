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
            var squareValue = context.board[event.row][event.col];
            var player = context.turn === Player.X ? Player.X : Player.O;
            if (squareValue === 0 && squareValue !== player)
                return true;
            return false;
        },
        isWinX: (context, event) => {

        },
        isWinO: (context, event) => {

        }
    },
    actions: {
        putPiece: (context, event) => {
            context.board[event.row][event.col] = context.turn;
            context.turn = context.turn === Player.X ? Player.X : Player.O;;
        }
    },
});