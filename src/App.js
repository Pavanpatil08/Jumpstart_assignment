import React from 'react'
import './App.css'
import BookIcon from './assets/BookIcon.svg'
import DownloadIcon from './assets/DownloadIcon.svg'
import PrintIcon from './assets/PrintIcon.svg'
import DeleteIcon from './assets/DeleteIcon.svg'

export default function App() {

  return (
    <div>
      <div className="container">
      <h2 className="text-hover" style={{marginLeft:"440px", marginTop:"30px"}}>Hover State</h2>
      <div className="card-conatiner"  style={{marginLeft:"390px"}}>
        <img src={BookIcon} className="card-icon" alt="book" />
        <div className="card-title">Corporate Bylaws</div>
        <div className="card-hover">
          <div className="card-hover-dot1"></div>
          <div className="card-hover-dot2"></div>
          <div className="card-hover-dot3"></div>
          <div class="dropdown-content">
            <div className="hover-item-flex">
              <img src={DownloadIcon} className="hover-icon" alt="downloads" />
              <div>
                Downloads
              </div>
            </div>
            <div className="hover-item-flex">
              <img src={PrintIcon} className="hover-icon" alt="print" />
              <div>
                Print
              </div>
            </div>
            <div className="hover-item-flex">
              <img src={DeleteIcon} className="hover-icon" alt="delete" />
              <div>
                Delete
              </div>
            </div>
          </div>
        </div>
        <div className="card-content">
          An internal document that details the operating rules for the corporation
          and are typically adopted at the organizational meeting of the board of directors.
        </div>
        <div className="card-button">
          <div className="card-button-name">View document</div>
        </div>
        <div className="card-bottom"></div>
      </div>
      </div>
      <div className="container">
      <h2 className="text-default" style={{marginLeft:"48px", marginTop:"-60px"}}>Default State</h2>
      <div className="card-conatiner">
        <img src={BookIcon} className="card-icon" alt="book" />
        <div className="card-title">Corporate Bylaws</div>
       
        <div className="card-content">
          An internal document that details the operating rules for the corporation
          and are typically adopted at the organizational meeting of the board of directors.
        </div>
        <div className="card-button">
          <div className="card-button-name">View document</div>
        </div>
        <div className="card-bottom"></div>
      </div>
     </div>
      <br></br>
    </div>
  )
}
