// Corrected Jumbotron.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Jumbotron.css';

const Jumbotron = () => {
  return (
    <div className="jumbotron custom-jumbotron">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4">Hello, I'am Muhamad Rafi Nasrullah!</h1>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
        <div className="col-md-6">
          <img src="/src/assets/try.png" alt="Placeholder" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
