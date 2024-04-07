import { mediumScreen } from "@capitole/constants/mediaQueries";
import { tss } from "tss-react";

export const useStyles = tss
    .create({
        podcastList: {
            display: "flex",
            flexWrap: "wrap",
            gap: 20
        },
        filter:{
            display: "flex",
            justifyContent: "flex-end",
            [mediumScreen]: {
                width: 300,
                marginRight: 0,
                marginLeft: "auto"
            },
        },
        badgeWrapper: {
            width: 25,
            display: "flex",
            alignItems: "center"
        }
    });