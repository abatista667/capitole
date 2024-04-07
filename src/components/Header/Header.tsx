import {  CircularProgress, Link, Typography } from "@mui/material"
import { useStyles } from "./styles"
import { useHeaderContext } from "./HeaderContext";
import Separator from "../Separator";
import { routes } from "@capitole/constants/routes";

interface HeaderProps {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    const { classes } = useStyles();
    const { headerIsLoading } = useHeaderContext()


    return <>
        <header className={classes.root}>
            <Link  className={classes.link} href={routes.listPodcast}>
                <Typography variant="h1" color="primary">{title}</Typography>
            </Link>
            {headerIsLoading ? <CircularProgress /> : null}
        </header>
        <Separator />
    </>
}

export default Header