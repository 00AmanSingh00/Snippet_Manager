import React from 'react';
import './home.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import homeImage from '../../assets/favicon.png';

export default function Home() {
  return (
    <div className="">
      <div  className="container homecontainer mt-5  ">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 ">
            <Card.Img id='main-img' src={homeImage} alt="Code Snippet Management" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 text-start mt-5 mb-5 ">
            <div className="">
              <div className="card-body">
                <h2 id='title_name' className=" text-center mb-4">Snippet Manager</h2>
                <p className="card-text">
                  Welcome to Snippet Manager mate, the ultimate tool for organizing and storing your code snippets ,So just go ahead and smash it 
                </p>
            
               
                <div className="text-center">
                <Button id='start_button' variant="primary" href="/signup" >Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}