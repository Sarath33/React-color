import React from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './navbar.css';


class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.closeSnackbar = this.closeSnackbar.bind(this);
        this.handle = this.handle.bind(this);
    }
    handle(evt)
    {
        this.props.changeSet(evt);
        this.setState({open: true});
    }
    closeSnackbar()
    {
        this.setState({open: false});
    }
    render()
    {
        
        return(
            <header className="navbar">
                <div className="logo">
                    <Link to="/">Reactcolorpicker</Link>
                    
                </div>
                <div className="slider-container">
                    <span>level: {this.props.level}</span>
                <div className='slider'>
                <Slider defaultValue={this.props.level} min={100} max={900} step={100}onAfterChange={this.props.changeLevel} />
                </div> 
                </div>
                <div className="select-container">
                    <Select defaultValue="Hex - #ffffff" onChange={this.handle}  >
                        <MenuItem value='hex'>Hex - #ffffff</MenuItem>
                        <MenuItem value='rgb'>rgb - #rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>rgba - #rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                    </div>
                    <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id='message-id'>
              Format Changed To that
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />

                
            </header>
        )
        }
}

export default Navbar