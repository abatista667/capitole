import { largeScreen, mediumScreen } from "@capitole/constants/mediaQueries";
import { tss } from "tss-react";

export const useStyles = tss
    .create({
        root:{
            width: "100%",
            [mediumScreen]: {
                width: "30%",
                minWidth: 230
            },
        },
        paper:{
            width: "100%",
            paddingInline: 15,
            paddingBlock: 20,
            boxSizing: "border-box"
        },
        image: {
            margin: "auto",
            display: "block",
            maxWidth: "100%",
            width: 200,
            borderRadius: 5,
            cursor: "pointer"
        },
        title: {
            cursor: "pointer"
        }
    });