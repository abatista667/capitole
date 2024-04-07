import { useListPodcasts } from "@capitole/queries/listPodCasts";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export const useSelectedPodcast = () => {
    const { data, error, isLoading } = useListPodcasts();
    
    const { podcastId } = useParams<{podcastId: string }>()

    const selectedPodcast = useMemo(() => data?.find(item => item.id.trim() === podcastId.trim()), [data, podcastId]);

    if (error) console.log("listPodcast has thrown an error", error)

    return {
        selectedPodcast,
        isLoading
    }
}