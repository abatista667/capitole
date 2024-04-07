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
                gap: 80,
            },
        },
        content:{
            flex: 1,
            paddingInline: 20,
            paddingBlock: 10
        },
        description:{
            marginTop: 10
        }
    });