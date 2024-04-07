import axios from "axios"
import { cacheRequest } from "./utils/cacheRequest"
import { overrideOrigin } from "./utils/overrideOrigin"
import { useQuery } from "@tanstack/react-query"

export interface PodCastResponse {
    id: string,
    title: string,
    author: string,
    image: string,
    description: string
}
export interface RawResponse {
    feed: {
        entry: {
            "im:artist": { 
                label: string
            },
            "im:name": {
                label: string
            },
            summary: {
                label: string
            },
            "im:image": {
                label: string
            }[],
            id:{
                attributes: {
                    "im:id": string
                }
            }
        }[]
    }
}


const url = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"

const listPodcasts = async (): Promise<PodCastResponse[]> => {
    const response = await axios.get<{ contents: string }>(overrideOrigin(url))
    
    const data= JSON.parse(response.data.contents)as RawResponse

    return data.feed.entry.map(item => {
        const imageLen = item["im:image"]?.length ?? 0;
        const lastImage = imageLen > 0 ? imageLen - 1 : 0

        return ({
            id: item.id.attributes["im:id"],
            title: item["im:name"]?.label,
            image: item["im:image"]?.at(lastImage).label,
            author: item["im:artist"]?.label,
            description: item?.summary?.label
        })
    });
}


export const useListPodcasts = () => useQuery({
    queryKey: [listPodcasts.name],
    queryFn: cacheRequest(listPodcasts)
})