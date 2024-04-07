import { Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useHeaderContext } from "../Header/HeaderContext";
import { useSelectedPodcast } from "@capitole/hooks/useSelectedPodcast";
import { useStyles } from "./styles";
import Separator from "../Separator";
import { useNavigate, useParams } from "react-router-dom";
import { makeNavigableRouteWithParams } from "@capitole/utils/makeNavigableRouteWithParams";
import { routes } from "@capitole/constants/routes";

const PodCastInfo = () => {
    const { classes } = useStyles()
    const { selectedPodcast, isLoading } = useSelectedPodcast();
    const { podcastId } = useParams<{ podcastId: string }>()
    const navigate = useNavigate();

    const { image, title, author, description } = selectedPodcast ?? {};
    const { setHeaderLoading } = useHeaderContext();

    useEffect(() => setHeaderLoading(isLoading), [setHeaderLoading, isLoading])

    const goTopodCast = () => navigate(makeNavigableRouteWithParams(routes.detailPodcast, { podcastId }))

    if (isLoading) return null;

    return <section className={classes.root}>
        <Paper className={classes.paper}>
            <img onClick={goTopodCast} src={image} className={classes.image} />
            <Separator />
            <Typography className={classes.title} fontWeight={500}><span onClick={goTopodCast}>{title}</span></Typography>
            <Typography fontStyle="italic">By {author}</Typography>
            <Separator />
            <Typography fontWeight={500} variant="body1">Description:</Typography>
            <Typography fontStyle="italic" variant="body2">{description}</Typography>
        </Paper>
    </section>
}
export default PodCastInfo;