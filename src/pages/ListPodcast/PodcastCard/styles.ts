import { largeScreen, mediumScreen } from "@capitole/constants/mediaQueries";
import { tss } from "tss-react";

export const useStyles = tss
    .create({
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "100%",
            minHeight: 300,
            [mediumScreen]: {
                width: "40%",
            },
            [largeScreen]: {
                width: "23%",
            }
        },
        paper:{
            width: "100%",
            padding: 10,
            marginTop: 100,
            paddingTop: 70,
            boxSizing: "border-box"
        },
        avatar: {
            position: "absolute",
            top: 50,
        }
    });