import React, { Component } from 'react';
import classes from './FileUpload.scss';

class FileUpload extends Component {
  state = {
    selectedImage: null
  }  

  selectedImage = (event) => {
    this.setState({selectedImage: event.target.files[0]})
  }  

  fileUpload = () => {
    const selectedImage = new FormData();
    selectedImage.append('image', this.state.selectedImage, this.state.selectedImage.name);

    console.log(selectedImage)
  }

  render() {
      console.log(this.state)
    return (
      <div className={classes.FileUpload}>
        <input type="file" onChange={this.selectedImage}/>
        <button onClick={this.fileUpload}>Prześlij plik</button>
      </div>
    )
  }
}

export default FileUpload;
