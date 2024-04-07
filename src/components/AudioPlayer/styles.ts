import { tss } from "tss-react";

export const useStyles = tss
    .create({
        root: {
            padding: 3,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#2D2D2D",
            borderRadius: 5,
            marginTop: 10,
            color: "white"
        },
        slider:{
            '& .MuiSlider-thumb': {
                height: 20,
                width: 20,
                backgroundColor: 'transparent',
                '&:before': {
                    display: "none"
                },
                '&:after': {
                    display: "none"
                },
                '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                    boxShadow: "none",
                }, 
              },
              '& .MuiSlider-track': {
                color: '#bfbfbf',
                opacity: 1
              },
              '& .MuiSlider-rail': {
                color: 'black',
                opacity: 0.3,
              },
        }
    });