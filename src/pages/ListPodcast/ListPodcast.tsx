import { PodCastResponse, useListPodcasts } from "../../queries/listPodCasts"
import PodcastCard from "./PodcastCard";
import { useStyles } from "./styles";
import { Badge, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "@capitole/components/Layout/Layout";
import { useHeaderContext } from "@capitole/components/Header/HeaderContext";

const filterPodcast = ({title, author}: PodCastResponse, filterValue: string) => {
    return title.toLowerCase().includes(filterValue.toLowerCase()) ||
            author.toLowerCase().includes(filterValue.toLowerCase()) 
}

const ListPodcast = () => {
    const { data, error, isLoading } = useListPodcasts();
    const { classes } = useStyles();
    const [filterValue, setFilterValue] = useState("")
    const { setHeaderLoading } = useHeaderContext();

    if (error) console.log("listPodcast has thrown an error", error)

    useEffect(() => setHeaderLoading(isLoading), [setHeaderLoading, isLoading])

    const filteredData = (filterValue ? data?.filter(item => filterPodcast(item, filterValue)) ?? [] : data)

    return <Layout>
        <section className={classes.filter}>
            <div className={classes.badgeWrapper}>
                <Badge badgeContent={filteredData?.length } showZero color="primary" max={100} />
            </div>
            <TextField 
                fullWidth
                placeholder="Filter podcast..."
                size="small" 
                value={filterValue} 
                onChange={(ev) => setFilterValue(ev.target.value)} />
        </section>
        <section className={classes.podcastList}>
            {filteredData?.map(item => <PodcastCard {...item} key={item.id} />)}
        </section>
    </Layout>
}

export default ListPodcast