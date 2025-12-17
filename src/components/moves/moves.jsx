import React, { useState, useEffect } from 'react'

//import { useResize } from '../../hooks/use-resize';

import './moves.scss'

//import { IconContext } from "react-icons";
//import { CiCircleChevLeft } from "react-icons/ci";


import {useNavigate} from 'react-router-dom';

///import { useSwipeable, UP, LEFT, RIGHT } from 'react-swipeable';

//import WebApp from '@twa-dev/sdk'

//import { useTGLContract } from "../../hooks/use-tgl-contract";

//import { useTonConnect } from "../../hooks/use-tonconnect";


import { Card, Button, Accordion } from 'react-bootstrap';

import axios from "axios";


function Moves() {
  const navigate = useNavigate();

  const back = () => navigate('/');


  const [moves, setMoves] = useState([]);

  // Загрузка данных при монтировании компонента
  useEffect(() => {

    let data = [
  {
    "id": 1,
    "x": 18,
    "y": 20,
    "generation": 5,
    "timestamp": "2023-10-10T12:34:56Z",
    "playerName": "Игрок 1",
    "comment": "Начальная позиция"
  },
  {
    "id": 2,
    "x": 22,
    "y": 21,
    "generation": 5,
    "timestamp": "2023-10-10T12:34:56Z",
    "playerName": "Игрок 2",
    "comment": "Начальная позиция"
  },
  {
    "id": 3,
    "x": 35,
    "y": 7,
    "generation": 1,
    "timestamp": "2023-10-10T12:34:56Z",
    "playerName": "Игрок 3",
    "comment": "Начальная позиция"
  },
  {
    "id": 4,
    "x": 10,
    "y": 5,
    "generation": 7,
    "timestamp": "2023-10-10T12:34:56Z",
    "playerName": "Игрок 4",
    "comment": "Начальная позиция"
  },
  {
    "id": 5,
    "x": 7,
    "y": 12,
    "generation": 7,
    "timestamp": "2023-10-10T12:34:56Z",
    "playerName": "Игрок 5",
    "comment": "Начальная позиция"
  }
];

        setMoves(data);

  }, []);


//const {name, url, user, nextVideo, numItems} = useTGLContract();



  return (<div className='moves'>

 
      <h2>Список ходов</h2>

        {moves.map((move, index) => (
          <div className="moves__item">
            <h3>{`Ход №${index+1}`}</h3>
              <div className="moves__item-text">
                <strong>Координаты:</strong> X:{move.x}, Y:{move.y}<br />
                <strong>Поколение:</strong> {move.generation}<br />
                <strong>Время хода:</strong> {new Date(move.timestamp).toLocaleString()}<br />
                <strong>Имя игрока:</strong> {move.playerName}<br />
                <strong>Комментарий:</strong> {move.comment ? move.comment : '(нет)'}
              </div>
          </div>
        ))}
  

  </div>
  )
}

export default Moves