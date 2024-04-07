import { IconButton, Slider, Typography } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";

interface AudioPlayerProps {
    src: string
}

type AudioPlayerState = "idle" | "playing";

function formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = Math.floor(seconds % 60);

    const minutesString: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString: string = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    return `${minutesString}:${secondsString}`;
}

const AudioPlayer = ({ src }: AudioPlayerProps) => {
    const { classes } = useStyles()
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [state, setState] = useState<AudioPlayerState>("idle");
    const [muted, setMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const onPlayClick = () => {
        if (state === "idle") {
            audioRef.current.play();
            setState("playing");
            return;
        }
        audioRef.current.pause();
        setState("idle");
    }
    const onVolumenClick = () => {
        setMuted(state => {
            audioRef.current.muted = !state;
            return !state;
        })
    }

    const onSliderChange = (value: number) => {
        setCurrentTime(value)
        audioRef.current.currentTime = value
    }

    useEffect(() => {
        const progress = () => {
            let currentTime = audioRef.current.currentTime;
            setCurrentTime(currentTime)
        }
        const loadeddata = () => {
            let duration = audioRef.current.duration;
            setDuration(duration)
        }

        audioRef.current.addEventListener("loadeddata", loadeddata);

        const interval = setInterval(progress, 1000)

        return () => {
            audioRef.current?.removeEventListener("loadeddata", loadeddata);
            clearInterval(interval);
        }
    }, [src])

    return <>
        <div className={classes.root}>
            <IconButton onClick={onPlayClick}>
                {state === "idle" ?
                    <PlayArrowIcon htmlColor="white" />
                    : <PauseIcon htmlColor="white" />}
            </IconButton>
            <Slider max={duration} className={classes.slider} value={currentTime} onChange={(_, val) => onSliderChange(val as number)} />
            <Typography>
                {currentTime ? formatTime(currentTime) : "00:00"}
            </Typography>
            <IconButton onClick={onVolumenClick}>
                {muted ?
                    <VolumeUpIcon htmlColor="white" />
                    : <VolumeOffIcon htmlColor="white" />}
            </IconButton>
        </div>
        <audio ref={audioRef} src={src} />
    </>
}

export default AudioPlayer