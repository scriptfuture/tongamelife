import { useState } from 'react'

import './new_move.scss'

import { RiVideoChatFill } from "react-icons/ri";

import {useNavigate} from 'react-router-dom';

import {TonConnect} from "../connect/TonConnect.jsx";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import WebApp from '@twa-dev/sdk'

import { useTonConnect } from "../../hooks/use-tonconnect.js";


function NewShort() {
  const navigate = useNavigate();

  const [url, setURL] = useState('')
  const [name, setName] = useState('')

  const {wallet} = useTonConnect();


 // const { numVideos, newVideo } = useTGLContract();

  const handleURLChange = (event) => setURL(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);


  const sendVideo = () => {

      let content = JSON.stringify({url, name});

      console.log(content);
      //newVideo(content);
  };




  return (<div className='new-move'>

    <div className="new-move-tonconnect">
        <TonConnect/>
    </div>

    <h2>Новый ход</h2>

    <div className='form'>

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Координаты/поколение (x-y/start)*</Form.Label>
        <Form.Control type="text" 
                      value={url} 
                      onChange={handleURLChange} 
                      placeholder="пример:500-300/750" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ваше имя</Form.Label>
        <Form.Control type="text" 
                      value={url} 
                      onChange={handleURLChange} 
                      placeholder="пример:500-300/750" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Комментарий* </Form.Label>
        <Form.Control as="textarea" 
                      value={name} 
                      onChange={handleNameChange}
                      rows={3} />
      </Form.Group>

      <div className='tgl-button' onClick={sendVideo}>
            Отправить
      </div>
    </Form>

    </div>

  </div>
  )
}

export default NewShort