import Layout from "@capitole/components/Layout/Layout"
import PodCastInfo from "@capitole/components/PodCastInfo"
import { Paper, Typography } from "@mui/material"
import { useStyles } from "./styles"
import { useListEpisodes } from "@capitole/queries/listEpisodes"
import { useNavigate, useParams } from "react-router-dom"
import { formatDate } from "@capitole/utils/formatDate"
import { makeNavigableRouteWithParams } from "@capitole/utils/makeNavigableRouteWithParams"
import { routes } from "@capitole/constants/routes"
import { useEffect } from "react"
import { useHeaderContext } from "@capitole/components/Header/HeaderContext"
import { useSelectedPodcast } from "@capitole/hooks/useSelectedPodcast"

const DetailPodcast = () => {
    const { classes } = useStyles();
    const { podcastId } = useParams<{ podcastId: string }>()
    const { data, isLoading: episodesLoading  } = useListEpisodes(podcastId);
    const { isLoading: podcastLoading } = useSelectedPodcast();
    const isLoading = episodesLoading || podcastLoading
    const navigate = useNavigate();

    const { setHeaderLoading } = useHeaderContext();

    useEffect(() => setHeaderLoading(isLoading), [setHeaderLoading, isLoading])

    const goToEpisode = (episodeId: string) => navigate(makeNavigableRouteWithParams(routes.episode, {
        podcastId,
        episodeId
    }))

    return <Layout>
        <div className={classes.root}>
            <PodCastInfo />
            {!isLoading ? <div className={classes.episodes}>
                <Paper className={classes.heading}>
                    <Typography variant="h1" component="div">
                        Episodes: {data.length}
                    </Typography>
                </Paper>
                <Paper className={classes.tbody}>
                    {data?.map(item => {
                        return <div 
                            key={item.id} 
                            className={classes.row} 
                            onClick={() => goToEpisode(item.id)}>
                            <div className={classes.rowTitle}>
                                <Typography variant="body2" color="primary">
                                    {item.title}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2">
                                    {formatDate(item.date)}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body2">
                                    {item.duration}
                                </Typography>
                            </div>
                        </div>
                    })}
                </Paper>
            </div>: null}
        </div>
    </Layout>
}

export default DetailPodcast