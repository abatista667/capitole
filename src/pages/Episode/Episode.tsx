import Layout from "@capitole/components/Layout/Layout"
import PodCastInfo from "@capitole/components/PodCastInfo"
import { useListEpisodes } from "@capitole/queries/listEpisodes"
import { Paper, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useStyles } from "./styles"
import AudioPlayer from "@capitole/components/AudioPlayer"
import sanitizeHtml from 'sanitize-html';
import Separator from "@capitole/components/Separator"

const Episode = ()=>{
        const { podcastId, episodeId } = useParams<{ podcastId: string, episodeId: string }>();

        const { classes } = useStyles();
        const { data } = useListEpisodes(podcastId);
        const episode = data?.find(item => item.id.toString() === episodeId)
    
        return <Layout>
            <div className={classes.root}>
                <PodCastInfo />
                <Paper className={classes.content}>
                    <Typography variant="h1" component="div">
                        {episode?.title}
                    </Typography>
                    <Typography variant="body1" className={classes.description}>
                        <span dangerouslySetInnerHTML={{__html: sanitizeHtml(episode?.description ?? "")}} />
                    </Typography>
                    <Separator />
                    <AudioPlayer src={episode?.audio} />
                </Paper>
            </div>
        </Layout>
    }
    
export default Episode