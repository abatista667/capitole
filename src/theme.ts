import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: 'h1' },
            style: {
                fontSize: '1.5rem',
                fontWeight: 500
            },
          },
          {
            props: { variant: 'h6' },
            style: {
                fontSize: '1rem',
            },
          },
          {
            props: { variant: 'body2' },
            style: {
                fontSize: '0.8rem',
            },
          },
        ],
      }
    }
});
