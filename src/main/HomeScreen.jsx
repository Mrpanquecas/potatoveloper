import React from 'react'
import './styles/HomeScreen.css'
import Menu from '../commonComponents/Menu'
import folder from '../utils/assets/folder.png'
import Window from './window/CustomWindow'
import ReactFullpage from '@fullpage/react-fullpage';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;


const pluginWrapper = () => {
  require('fullpage.js/vendors/scrolloverflow');
}


const HomeScreen = () => {
  
  const [open, setOpen] = React.useState(true);
  
 const toggleFolder = () => {
    setOpen(!open);
  }

  let options = {
    activeClass:          'active', // the class that is appended to the sections links
    anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
    arrowNavigation:      true, // use arrow keys
    className:            'SectionContainer', // the class name for the section container
    delay:                1000, // the scroll animation speed
    navigation:           false, // use dots navigatio
    scrollBar:            false, // use the browser default scrollbar
    sectionClassName:     'Section', // the section class name
    sectionPaddingTop:    '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign:        false // align the content of each section vertical
  };

const styles =  {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}

  return (
    <>
      <ReactFullpage
        fixedElements={['.footer']}
        anchors={['slide1', 'slide2', 'slide3']}
        pluginWrapper={pluginWrapper}
        sectionSelector={SECTION_SEL}
        render={comp => {
          return(
            <ReactFullpage.Wrapper>
              <>
                <div className={SEL} key="slide1">
                  <div className="HomeScreen">
                    <div
                      style={styles} 
                      onClick={toggleFolder}
                    >
                      <img style={{width:'auto'}} src={folder}/>
                      <span>portfolio</span>
                    </div>
                  </div>
                </div>
                <div className={SEL} key="slide2">
                  <div>
                    {open && (
                      <Window title="developer.exe" toggleFolder={toggleFolder}/>
                    )}
                  </div>
                </div>
                <div className={SEL} key="slide3">Page 3</div>
                <div className="footer">
                  <Menu/>
                </div>
              </>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
    )
}

export default HomeScreen
