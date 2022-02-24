import { createMachine, assign } from "xstate"
import { Player } from "../constants"
import isWin from "../helpers/isWin";

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
                        target: "winX",
                        cond: "isWinX",
                    },
                    {
                        target: "winO",
                        cond: "isWinO",
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
                RESET: {
                    target: "playing",
                    actions: "reset"
                }
            }
        },
        winO: {
            on: {
                RESET: {
                    target: "playing",
                    actions: "reset"
                }
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
        isWinX: (context, _) => isWin(context.board, Player.X),
        isWinO: (context, _) => isWin(context.board, Player.O)
    },
    actions: {
        putPiece: (context, event) => {
            var coords = event.payload;
            context.board[coords.row][coords.col] = context.turn;
            context.turn = context.turn === Player.X ? Player.O : Player.X;
        },
        reset: assign(() => {
            return {
                board: [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ],
                turn: Player.X
            }
        })
    },
});