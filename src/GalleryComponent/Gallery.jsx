import React, { Component } from 'react'
import classes from './Gallery.scss'


//Instruction how configure Images slider below
//end - how much images will be display on page
//in props order to component array with image URL like this:
// const images = ['exampleURL', 'exampleURL2']
export default class Gallery extends Component {
  state = {
    start: 0,
    end: 3,
    disabledPreviousBtn: true,
    disabledNextBtn: false,
    currentImageSource: '',
    showImageModal: false,
    width: 50,
    rotate: 0
  }

  previousImage = () => {
    this.setState({
      start: this.state.start - 1,
      end: this.state.end - 1
    })  

    if(this.state.end < this.props.images.length + 1){
      this.setState({disabledNextBtn: false})
    }
    if(this.state.start <= 1){
      this.setState({disabledPreviousBtn: true})
    }
  }

  nextImage = () => {
    this.setState({
      start: this.state.start +1,
      end: this.state.end + 1
    })
  
    if(this.state.end === this.props.images.length - 1){
      this.setState({disabledNextBtn: true})
    }
    if(this.state.start >= 0){
      this.setState({disabledPreviousBtn: false})
    }
  }

  imageSourceHandler = (imageSource) => {
    this.setState({
      showImageModal: true,
      currentImageSource: imageSource
    })
  }

  closeImageModal = () =>{
    this.setState({showImageModal: false})
  }

  stopPropagation = (e) => e.stopPropagation();

  largeImage = () => {
    if(this.state.width >= 50) return;
    this.setState({width: this.state.width + 2})
  }

  decreaseImage = () => {
    if(this.state.width <= 20) return;
    this.setState({width: this.state.width - 2})
  }

  render() {
    const images = this.props.images.slice(this.state.start, this.state.end).map( (imageSource, index) => {
      return (<img
        onClick={() => this.imageSourceHandler(imageSource)}
        src={imageSource} 
        alt={images} 
        key={index}
        />)
    })

    const imageForOpenModal = this.props.images.map( (imageSource, index) => {
      return <img 
        onClick={() => this.imageSourceHandler(imageSource)}
        src={imageSource} 
        alt={images} 
        key={index}
      />
    })

    return (
      <div className={classes.Gallery}>
        <button disabled={this.state.disabledPreviousBtn} onClick={this.previousImage}>&lt;</button>
          {images}
        <button disabled={this.state.disabledNextBtn} onClick={this.nextImage}>&gt;</button>
        {this.state.showImageModal ? 
          <div className={classes.ImageModal} onClick={this.closeImageModal}>
            <header onClick={this.stopPropagation}>
              <div>
                {imageForOpenModal}
              </div>
              <button onClick={this.closeImageModal}>X</button>
            </header>
            <img src={this.state.currentImageSource} 
              alt="Modal image" 
              onClick={this.stopPropagation} 
              style={{maxWidth: this.state.width+'%', transform: `rotate(${this.state.rotate}deg)`}}
            />
            <div className={classes.ImageOptions} onClick={this.stopPropagation}>
              <button onClick={this.largeImage}>Powiększ</button>
              <button onClick={this.decreaseImage}>Pomniejsz</button>
              <button onClick={()=> this.setState({rotate: this.state.rotate + 90})}>Obroć</button>
            </div>
          </div> : null
        }
      </div>
    )
  }
}
