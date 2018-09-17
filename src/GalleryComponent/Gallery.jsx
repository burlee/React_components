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
    showImageModal: false
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

  render() {
    const images = this.props.images.slice(this.state.start, this.state.end).map( (imageSource, index) => {
      return (<img
        onClick={() => this.imageSourceHandler(imageSource)}
        src={imageSource} 
        alt={images} 
        key={index}
        />)
    })
    return (
      <div className={classes.Gallery}>
        <button disabled={this.state.disabledPreviousBtn} onClick={this.previousImage}>&lt;</button>
          {images}
        <button disabled={this.state.disabledNextBtn} onClick={this.nextImage}>&gt;</button>
        {this.state.showImageModal ? 
          <div className={classes.ImageModal} onClick={this.closeImageModal}>
            <header>
              <button onClick={this.closeImageModal}>X</button>
            </header>
            <img src={this.state.currentImageSource} alt="Modal image" onClick={this.stopPropagation} />
          </div> : null
        }
      </div>
    )
  }
}
