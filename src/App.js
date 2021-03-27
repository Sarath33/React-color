import React from 'react';
import Palette from './palette';
import {Route,Switch} from 'react-router-dom';
import PaletteList from './paletteList';
import Color from './seedcolor';
import {generatePalette} from './colorhelpers';
class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.findpalette = this.findpalette.bind(this);
  }
  findpalette(id)
  {
      return Color.find(function(palette){
      
        return palette.id === id;
      })
  }
  render(){
  
  return (
    <Switch> 
      <Route exact path="/" render={()=> <PaletteList palettes={Color} />} />
      <Route exact path="/palette/:id"
       render={(routeprops)=> <Palette colors={generatePalette(this.findpalette(routeprops.match.params.id))} />} 
       /> 
    </Switch>

   /* <div >
        <Palette colors={generatePalette(Color[3])}/>
    </div>*/
  );

}
}

export default App;
