import React from 'react'
import './styles/HomeScreen.css'
import Menu from '../commonComponents/Menu'
import folder from '../utils/assets/folder.png'
import newceo from '../utils/assets/newCEO.jpg'
import Window from './window/CustomWindow'
import ReactFullpage from '@fullpage/react-fullpage';

const pluginWrapper = () => {
  require('fullpage.js/vendors/scrolloverflow');
}


const HomeScreen = () => {
  
  const [open, setOpen] = React.useState(true);
  
 const toggleFolder = () => {
    setOpen(!open);
  }

const styles =  {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}

  return (
    <>
      <ReactFullpage
        anchors={['slide1', 'slide2', 'slide3']}
        sectionsColor={['#008080', '#008080', '#008080']}
        // pluginWrapper={pluginWrapper}
        // autoScrolling={false}
        css3={false}
        render={comp => {
          return(
            <ReactFullpage.Wrapper>
                <div className="section" key="slide1">
                  <div className="HomeScreen">
{/*                     <div
                      style={styles} 
                      onClick={toggleFolder}
                    >
                      <img style={{width:'auto'}} src={folder}/>
                      <span>portfolio</span>
                    </div> */}
                    <img style={{width:'auto'}} src={newceo}/>
                    <span style={{fontSize: '6.75em', fontFamily:'VT323'}}>EXPERT IN</span>
                    <span class="shakeText" style={{fontSize: '6.75em', fontFamily:'VT323'}}>CUTTING EDGE</span>
                    <span style={{fontSize: '6.75em', fontFamily:'VT323'}}>TECHNOLOGIES</span>
                    <span style={{fontSize: '6.75em', fontFamily:'VT323'}}>↓</span>
                  </div>
                </div>
                <div className="section" key="slide2">
                  <div className="HomeScreen">
                    {open && (
                      <Window title="developer.exe" toggleFolder={toggleFolder}/>
                    )}
                  </div>
                </div>
                <div className="section" key="slide3">Page 3</div>
                <div>
                  <Menu/>
                </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
    )
}

export default HomeScreen
