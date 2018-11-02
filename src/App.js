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
import MyProvider from './MyProvider/MyProvider';
import MyContext from './MyProvider/config';
import axios from 'axios'
import Chat from './Chat/Chat';
import OpinionModal from './OpinionModal/OpinionModal';
// import Test from './Test/Test';
import Gallery from './GalleryComponent/Gallery';



const images = [
  'https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m228238-0042.png',
  'https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m50535-0002.png',
  'https://images.rolex.com/catalogue/images/upright-bba-with-shadow/m116680-0002.png'
]




class App extends Component {
  state ={
    closeModal: true,
    switchIsTrue: false,
    flexOption: 'flex-start',
    name: 'Maciej',
    surname: 'Abramowicz'
  }
  closeModal = () => {
    this.setState({closeModal: false})
  }

  
  switchOnOffFn = () => {
    this.setState({switchIsTrue: !this.state.switchIsTrue, flexOption: 'flex-end'})
    if(this.state.flexOption === 'flex-end'){this.setState({flexOption: 'flex-start'})}
  }

  changeIsLogin = async (dispatch) => {

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data.slice(0,20)
    })
            
  }

  render() {
    return (

      <div>
        {/* <Test/> */}
        <Gallery
          images={[...images]}
        />
        <MyProvider>
          <MyContext.Consumer>
            
              {state => (
                <Wrapper>
                  {console.log(state.state)}
                  {/* <SelectBox/> */}
                  <h1>Metody płatności {state.state.name}</h1>
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
                  <button onClick={() => this.changeIsLogin(state.state.dispatch)}>Kliknij</button>
                  <button onClick={() => state.fetchUserData(this.state.name, this.state.surname)}></button>
                  <input type="text" name="surnameee" onChange={event => this.setState({name: event.target.value})}/>
                  <OpinionModal/>
                </Wrapper>
              )}
          </MyContext.Consumer>
              <RegisterModal/>
        </MyProvider>        
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
