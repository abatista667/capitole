import { mediumScreen } from "@capitole/constants/mediaQueries";
import { tss } from "tss-react";

export const useStyles = tss
    .create({
        root: {
            display: "flex",
            flexDirection: "column",
            gap: 20,
            [mediumScreen]: {
                flexDirection: "row",
            },
        },
        episodes: {
            flex: 1
        },
        heading: {
            paddingBlock: 10,
            paddingInline: 8
        },
        tbody: {
            paddingBlock: 10,
            paddingInline: 8,
            marginTop: 10
        },
        row: {
            display: "flex",
            gap: 10,
            paddingBlock: 10,
            paddingInline: 8,
            cursor: "pointer",
            "&:nth-of-type(odd)":{
                background: "#EEEEEE"
            }
        },
        rowTitle: {
            flex: 1
        }
    });