type RequestFunc<T> = (args: any) => Promise<T>

interface CacheResponse {
    expiration: Date
    data: unknown 
}

const CACHE_TIME = 1000 * 60 * 60 * 24

export const cacheRequest = <T, P= undefined>(fun: RequestFunc<T>, args?: P) => async (): Promise<T>  => {
    const key = `${fun.name}-${args ? JSON.stringify(args): ""}`
    const cache = localStorage.getItem(key)
    
    if(cache) {
        const storedCache = JSON.parse(cache) as CacheResponse
        if(new Date(storedCache.expiration) > new Date())
            return Promise.resolve(storedCache.data as T)
    }

    const response = await fun(args);
    const newCache: CacheResponse = {
        expiration: new Date(new Date().getTime() + CACHE_TIME),
        data: response
    }

    localStorage.setItem(key, JSON.stringify(newCache))

    return response
}