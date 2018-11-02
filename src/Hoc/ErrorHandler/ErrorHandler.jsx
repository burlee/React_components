import React, {Component} from 'react'
import WarningModal from '../../WarningModal/WarningModal';


 const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component{
      state ={
          error: null
      }
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.response.use( req  =>{
                this.setState({error: null});
                return req;
            })
            this.resInterceptor =axios.interceptors.response.use( null, error =>{
                this.setState({error: error})
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorHandlerConfirmed = () => {
            this.setState({error: null})
        }
        render(){
            return(
                <React.Fragment>
                  <WarningModal showWarning={this.state.error}/>
                  <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
  }
}

export default withErrorHandler;