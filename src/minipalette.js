import React from 'react';
import {withStyles} from '@material-ui/styles';


    const styles ={
        main:{
            backgroundColor: "white",
            border:"1px solid black",
            borderRadius: "5px",
            padding:"0.5rem",
            position: "relative",
            overflow:"hidden",
            "&:hover":{
                cursor: "pointer"
            }
            
        },
        colors:{
            backgroundColor:"grey",
            height:"150px",
            width:"100%",
            borderRadius: "5px",
            overflow:"hidden",
            "&:hover":{
                cursor:"pointer"
            }

        },
        title:{
            display:"flex",
            justifyContent:"space between",
            margin:"0",
            alignItems:"center",
            color:"black",
            paddingTop:"0.5rem",
            fontsize:"1rem",
            position:"relative"


        },
        minibox:{
                height:"20%",
                width:"25%",
                display:"inline-block",
                margin:"0 auto",
                position:"relative",
                marginBottom:"-3.5px"

        }
    }
    function Mini(props)
    {
        const {classes ,paletteName, emoji,colors} = props;
        const miniBox = colors.map(tt=>(
            <div className={classes.minibox} style={{backgroundColor:tt.color}}></div>
        ))
       
        return(
            <div className={classes.main}> 
           
               <div className={classes.colors}>{miniBox}</div>
               <h5 className={classes.title}>{paletteName} </h5>
            </div>
        )
    }


export default withStyles(styles)(Mini);