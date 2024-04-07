import { useStyles } from "./styles"

export const Separator = () =>{
    const {classes} = useStyles()
    return<div className={classes.root}>
         <hr />
    </div>
}

export default Separator