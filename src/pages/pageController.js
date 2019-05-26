import React, {Component} from 'react'
import { ToastContainer } from "react-toastify";
import PageAcheteur from './pageAcheteur'

export default class PageController extends Component{ 
  render() {
    return(
        <div>
          <div>
            <div style={{minHeight:'92vh'}}>
              <PageAcheteur/>
            </div>
          </div>
        <ToastContainer autoClose={2000} position={'top-center'}/>
        </div>
    )
  }
}