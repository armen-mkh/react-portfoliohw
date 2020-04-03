import React from 'react';

export default (props)=>{
    return <div className="row">
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image">
          <img src={props.info.src}/>
          <span className="card-title">{props.info.name}</span>
          <a href='https://google.com' className="btn-floating halfway-fab waves-effect waves-light red"><i className="fab fa-github fa-3x"></i></a>
        </div>
        <div className="card-content">
          <p>{props.info.desc}</p>
        </div>
      </div>
    </div>
  </div>
}