export const overrideOrigin = (url: string) => 
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`