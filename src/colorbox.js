import React from 'react';
import './colorbox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
class ColorBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            copied: false
        }
        this.changecopystate = this.changecopystate.bind(this);
        
    }
    
    changecopystate()
    {
        this.setState({ copied : true },()=> {
            setTimeout(()=> this.setState({copied: false}),1500);
        })
    }
    render()
    {
        const {name} = this.props.color;
        const {format} = this.props;
       
         return(
             <CopyToClipboard text={this.props.color[format]} onCopy={this.changecopystate} >
                
            <div style={{backgroundColor: this.props.color[format]}} className="ColorBox" >
            {this.state.copied ? <div style={{backgroundColor: this.props.color[format]}} className="copy-overlay" >

            <div className="copy-msg">
                   <h1>copied!!</h1>
                    <p>{this.props.color[format]}</p>
                </div> 
            </div> :""}
               
               
               
               <div  className="copy-container">
                    <div className="box-content">
                            <span>{name}</span>
                    </div>
                    <button className="copy-button">copy</button>
                </div>
                <span className="see-more">More</span>

            
            </div>
            </CopyToClipboard>
        )
    }
}
export default ColorBox;