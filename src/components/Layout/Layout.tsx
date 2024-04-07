import { PropsWithChildren } from "react";
import { useStyles } from "./styles";
import Header from "../Header";

const Layout = ({ children }: PropsWithChildren) => {
    const { classes } = useStyles();

    return <div className={classes.root}>
            <Header title="Podcaster" />
        {children}
    </div>
}

export default Layout;