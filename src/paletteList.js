import { Palette } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import Mini from './minipalette';
import React from 'react';

const styles={
    root:{
        backgroundColor: "blue",
        height:"800px",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center",


    },
    container:{
        width:"50%",
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"column",
        flexWrap:"wrap"
        

    },
    nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between"

    },
    palette:{
        boxSizing: "border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap:"5%"

    }
}

class PaletteList extends React.Component
{
    render()
    {
       
       
        const {classes} = this.props;
       
        return(
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                <h2>React Colors</h2>
                </nav>
                <div className={classes.palette}>
                {this.props.palettes.map(tt =>(
                     <Link to={`/palette/${tt.id}`}>
                     
                    <Mini {...tt} />
                    </Link>
            
                ))}
                </div>
                
            </div>
        </div>
        )
    }
}

export default withStyles(styles)(PaletteList);