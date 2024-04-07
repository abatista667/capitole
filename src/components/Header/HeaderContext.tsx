import { PropsWithChildren, createContext, useContext, useState } from "react";

interface HeaderContextValue{
    setHeaderLoading: (val: boolean) => void,
    headerIsLoading: boolean
}

const HeaderContext =  createContext<HeaderContextValue | null>(null);

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderContextProvider = ({children}: PropsWithChildren) => {
    const [isloading, setIsLoading] = useState(false);

    return <HeaderContext.Provider value={{ setHeaderLoading: setIsLoading, headerIsLoading: isloading }}>
        {children}
    </HeaderContext.Provider>
}