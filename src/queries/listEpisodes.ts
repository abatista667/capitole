import axios from "axios"
import { cacheRequest } from "./utils/cacheRequest"
import { overrideOrigin } from "./utils/overrideOrigin"
import { useQuery } from "@tanstack/react-query"

export interface EpisodeResponse {
    id: string
    podcastId: string,
    title: string
    date: Date,
    duration: string
    audio: string
    description: string
}
export interface RawResponse {
    results: {
        episodeUrl: string,
        trackName: string,
        trackTimeMillis: number,
        releaseDate: string,
        trackId: string
        description: string
    }[]
}

function convertMillisecondsToTime(milliseconds: number): string {
    if(!milliseconds) return "00:00:00";

    // Calculate hours, minutes, and seconds
    const hours: number = Math.floor(milliseconds / 3600000);
    const minutes: number = Math.floor((milliseconds % 3600000) / 60000);
    const seconds: number = Math.floor((milliseconds % 60000) / 1000);

    // Ensure time parts have two digits
    const hoursStr: string = (hours < 10) ? '0' + hours : hours.toString();
    const minutesStr: string = (minutes < 10) ? '0' + minutes : minutes.toString();
    const secondsStr: string = (seconds < 10) ? '0' + seconds : seconds.toString();

    return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

const listEpisodes= async (podcastId:string): Promise<EpisodeResponse[]> => {
    const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    const response = await axios.get<{ contents: string }>(overrideOrigin(url))
    const data= JSON.parse(response.data.contents)as RawResponse

    return data.results.map(item => {
        const result: EpisodeResponse = {
            podcastId,
            id: item.trackId,
            audio: item.episodeUrl,
            date: new Date(item.releaseDate),
            title: item.trackName,
            duration: convertMillisecondsToTime(item.trackTimeMillis),
            description: item.description
        }
        return result
    })
}


export const useListEpisodes = (podcastId) => {
    return useQuery({
        queryKey: [listEpisodes.name],
        queryFn: cacheRequest(listEpisodes, podcastId)
})
}
