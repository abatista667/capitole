import { largeScreen, mediumScreen } from "@capitole/constants/mediaQueries";
import { tss } from "tss-react";

export const useStyles = tss
    .create({
        root:{
            paddingBlock: 10,
            "& > hr":{
                borderTop: "1px solid #D5D5D5"
            }
        },
    });