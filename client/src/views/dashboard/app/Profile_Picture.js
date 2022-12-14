import React, { useState } from 'react'
import img from './upload-image.jpg'
import Avatar from 'react-avatar-edit'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';

const Profile_Picture = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
<div> 
    <Hello>
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="css/style.css" />
  <title>Upload File</title>
  <div className="container">
    <input type="file" className="upload_hide" id="upload_costum" multiple="" />
    <label htmlFor="upload_costum" className="upload_label">
      <div className="image">
        <img src="" alt="" />
      </div>
      <i className="fas fa-cloud-upload-alt" />
      <p className="drag_text">Drag &amp; Drop to Upload File</p>
      <button className="choose_file">Choose a File</button>
    </label>
 
  </div>
</>
</Hello>

        </div>



    )
}

export default Profile_Picture

const Hello =styled.div`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
}

.container {
    max-width: 1160px;
    margin: 0 auto;
}

.upload_hide {
    position: absolute;
    max-width: 840px;
    max-height: 540px;
    width: 100%;
    height: 100%;
    background-color: red;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    opacity: 0;
}

.upload_label {
    position: absolute;
    max-width: 800px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    margin: 20px !important;
    border: 2px dashed #139CFF;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    flex-direction: column;
}

.choose_file {
    width: 200px;
    height: 50px;
    border: none;
    background-color: #139CFF;
    color: #fff;
    border-radius: 3px;
    margin: 30px auto;
    pointer-events: none;
}

.delete_file {
    width: 200px;
    height: 50px;
    border: none;
    background-color: #139CFF;
    color: #fff;
    border-radius: 3px;
    margin: 30px auto;
    cursor: pointer;
    z-index: 6;
    position: absolute;
    top: 62%;
    left: 51%;
    transform: translate(-50%, -50%);
    outline: none;
}


.upload_label > i {
    color: #FF1384;
    font-size: 110px;
    margin: 30px 0;
}

.drag_text {
    color: #139CFF;
    font-size: 22px;
    margin: 30px 0 0 0;
}


.image > img {
    padding: 40px;
    width: 80%;
    height: auto;
    position: absolute;
    left: 10%;
    top: 0;
}
`