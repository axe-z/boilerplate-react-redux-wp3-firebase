import React, {Component} from "react";
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';




const LoginPage = ({startLogin}) => {
 return (
    <div className="box-layout">
      <div className='box-layout__box'>
      <h1 className="box-layout__title ">Boilerplate</h1>
      <p>Prendre le controle sur vos apps</p>

      <button className="button"
        onClick={ startLogin }>ENTREZ</button>
        </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
