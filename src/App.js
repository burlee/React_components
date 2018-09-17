import React, { Component } from 'react';
import TopNavigation from './TopNavigation/TopNavigation';
import Button from './Button/Button';
import Wrapper from './Wrapper/Wrapper';
import InformationModal from './InformationModal/InformationModal';
import BoxInformation from './BoxInformation/BoxInformation';
import Footer from './Footer/Footer';
import BoxWithShadow from './BoxWithShadow/BoxWithShadow';
import CookiesModal from './CookiesModal/CookiesModal';
// import Test from './Test/Test';
// import Gallery from './GalleryComponent/Gallery';

const images = [
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/ciasto-biszkoptowe.jpg',
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/smazony-ryz-z-groszkiem.jpg',
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/ryz-z-warzywami.jpg',
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/ryz-z-warzywami.jpg',
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/ryz-z-warzywami.jpg',
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/ciasto-biszkoptowe.jpg',
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/smazony-ryz-z-groszkiem.jpg',
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/ryz-z-warzywami.jpg',
  'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/ryz-z-warzywami.jpg',
  'https://data.whicdn.com/images/275259620/superthumb.jpg?t=1485045406'
]
class App extends Component {
  state ={
    closeModal: true
  }
  closeModal = () => {
    this.setState({closeModal: false})
  }
  render() {
    return (
      <div>
        {/* <Test/> */}
        {/* <Gallery
          images={[...images]}
        /> */}
        <Wrapper>
          {/* <TopNavigation/>
          <Button 
            onClick={this.clicked}
            buttonBgColor="red"
            buttonFontColor="#FFF"
            textValue="Kliknij"/>
          <Button 
            onClick={this.clicked}
            textValue="Zobacz więcej"/>
          <Button textValue="Hej :-)" buttonBgColor='orange'/>
        <BoxInformation/> */}
        <CookiesModal/>
        <BoxWithShadow/>
        </Wrapper>
        {/* {this.state.closeModal ?
        <InformationModal
          closeModal={this.closeModal}
          informationValue="Niestety nie dodano produktu"
        /> : null } */}
        <Footer/>
      </div>
    );
  }
}

export default App;
