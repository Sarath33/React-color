import React from 'react';
import ColorBox from './colorbox';
import './palette.css';
import Navbar from './navbar';
import { TrendingUpSharp } from '@material-ui/icons';

class Palette extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel =this.changeLevel.bind(this);
        this.changeSet = this.changeSet.bind(this);
    }

    changeLevel(lvl)
    {
      this.setState({level: lvl})
    }
    changeSet(evt)
    {
        this.setState({format: evt.target.value})
    }

    render()
    {
        const {colors} = this.props.colors;
        
        const {level} = this.state;
        const kk =  colors[level].map(tt=>(
                  
            <ColorBox format={this.state.format} color={tt} />
        ))
      //console.log(colors[50]);
        return(
            <div className="Palette">
                <Navbar level={this.state.level} format={this.state.format} changeSet={this.changeSet} changeLevel={this.changeLevel} />
                <div className="Palette-colors">
               {kk}
                </div>
                
                <footer className="Palette-footer">
                         {this.props.colors.paletteName} 
                </footer>
                </div>
        )
    }
}

export default Palette;