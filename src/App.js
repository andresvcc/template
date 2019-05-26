import React, {Component} from 'react'
import { ToastContainer } from "react-toastify";
import PageController from './pages/pageController';
import FooterBar from './components/footer/footerBar'

export default class App extends Component{
  render() {
    return(
        <div style={{background: 'linear-gradient(#000000, #082A5B)' }}>
        <PageController/>
        <FooterBar/>
        <ToastContainer autoClose={2000} position={'top-center'}/>
        </div>
    )
  }
}