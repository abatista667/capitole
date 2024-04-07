import { Avatar, Button, Paper, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { PodCastResponse } from "@capitole/queries/listPodCasts";
import { useNavigate } from "react-router-dom";
import { routes } from "@capitole/constants/routes";
import { makeNavigableRouteWithParams } from "@capitole/utils/makeNavigableRouteWithParams";

const PodcastCard = ({id, image, title, author} : PodCastResponse) => {
    const { classes } = useStyles();
    const navigate = useNavigate()

    const OnPodcastclick = () =>
        navigate(makeNavigableRouteWithParams(routes.detailPodcast, { podcastId: id }))
    

    return <Button variant="text" className={classes.root} onClick={OnPodcastclick}>
        <div className={classes.avatar}>
            <Avatar sx={{ width: 100, height: 100 }} src={image} />
        </div>
        <Paper className={classes.paper}>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="body2">
                Auhtor: {author}
            </Typography>
        </Paper>
    </Button>
}

export default PodcastCard;