import React from 'react';
import './Style.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
            <div className="container__header">
              <p className="container__header__title">Material Components</p>
            </div>
            <div className="container__body">
              <div className="textfield">
                <div className="textfield__group">
                    <input type="text" required/>
                    <span className="textfield__group__bar"></span>
                    <label>Textfield focused</label>
                  </div>
                <div className="textfield__group">
                    <input type="text" disabled/>
                    <span className="textfield__group__bar"></span>
                    <label>Textfield disabled</label>
                  </div>
                </div>
              <div className="switch">
                  <input type="checkbox" id="switch__enabled" className="switch__input" />
                  <label for="switch__enabled" className="switch__label">Switch enabled</label>
                </div><br></br>
              <div className="switch">
                  <input type="checkbox" id="switch__disabled" className="switch__input" disabled />
                  <label for="switch__disabled" className="switch__label">Switch disabled</label>
                </div><br></br>
              <div className="checkbox">
                  <input type="checkbox" id="checkbox__focused" className="checkbox__input" />
                  <label for="checkbox__focused" className="checkbox__label">Checkbox focused</label>
              </div><br></br>
              <div className="checkbox">
                  <input type="checkbox" id="checkbox__disabled" className="checkbox__input" disabled />
                  <label for="checkbox__disabled" className="checkbox__label">Checkbox disabled</label>
              </div><br></br>
              <div className="radio">
                <input type="radio" id="radio__checked" className="radio__input"/>
                <label for="radio__disabled" className="radio__label">Checkbox disabled</label>
              </div><br></br>
              <div className="radio">
                <input type="radio" id="radio__disabled" className="radio__input" disabled />
                <label for="radio__disabled" className="radio__label">Checkbox disabled</label>
              </div>

          </div>
        </div>
      </div>
  );
}

export default App;
