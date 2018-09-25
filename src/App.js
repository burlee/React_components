import React, { Component } from 'react';
import TopNavigation from './TopNavigation/TopNavigation';
import Button from './Button/Button';
import Wrapper from './Wrapper/Wrapper';
import InformationModal from './InformationModal/InformationModal';
import BoxInformation from './BoxInformation/BoxInformation';
import Footer from './Footer/Footer';
import BoxWithShadow from './BoxWithShadow/BoxWithShadow';
import CookiesModal from './CookiesModal/CookiesModal';
import RegisterModal from './RegisterModal/RegisterModal';
import SelectBox from './SelectBox/SelectBox'
import FileUpload from './FileUpload/FileUpload';
import SuccessModal from './SuccessModal/SuccessModal';
import SwitchOnOff from './SwitchOnOff/SwitchOnOff';
import LeftNavigation from './LeftNavigation/LeftNavigation';
import Search from './Search/Search';
import FAQ from './FAQ/FAQ';
import WarningModal from './WarningModal/WarningModal';
import Timeline from './Timeline/Timeline';
import PostModal from './PostModal/PostModal'
import CssGrid from './CssGrid/CssGrid'
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
    closeModal: true,
    switchIsTrue: false,
    flexOption: 'flex-start'
  }
  closeModal = () => {
    this.setState({closeModal: false})
  }

  
  switchOnOffFn = () => {
    this.setState({switchIsTrue: !this.state.switchIsTrue, flexOption: 'flex-end'})
    if(this.state.flexOption === 'flex-end'){this.setState({flexOption: 'flex-start'})}
  }

  render() {
    return (
      <div>
        {/* <Test/> */}
        {/* <Gallery
          images={[...images]}
        /> */}
        <Wrapper>
          {/* <SelectBox/> */}
          <h1>Metody płatności</h1>
          {/* <BoxWithShadow
            icon="fas fa-credit-card"
            method="Karta kredytowa"
            spanValue="xxxx xxxx xxxx 1234"
          />
          <BoxWithShadow
            icon="fab fa-btc"
            method="Kryptowaluty"
            spanValue="LXADbgDqkThCD6BUJ"
          /> */}
          {/* <BoxWithShadow
            icon="fas fa-mobile-alt"
            method="Płatność SMS"
            spanValue="507 060 000"
          />  */}
          <CssGrid/>
        </Wrapper>
        
        {/* {this.state.closeModal ?
        <InformationModal
          closeModal={this.closeModal}
          informationValue="Niestety nie dodano produktu"
        /> : null } */}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
