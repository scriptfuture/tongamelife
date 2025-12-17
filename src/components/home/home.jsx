
import {TonConnect} from "../connect/TonConnect.jsx";

import { FaVideo } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa6";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";

import Button from 'react-bootstrap/Button';

import { FcAbout } from "react-icons/fc";

import {useNavigate} from 'react-router-dom';

import { useTonConnect } from "../../hooks/use-tonconnect";
import { CHAIN } from "@tonconnect/ui-react";

import './home.scss'

function Home() {
  const navigate = useNavigate();


  const { network, connected } = useTonConnect();


  return (
    <div className="home">

      <div className="logo"><img src="/img/game_of_life_start.png"></img></div>
      <div className="logo-text">
        Клеточный автомат на блокчейне TON
      </div>
      <div className="app">

        <TonConnect/>


        <div className="network">Network:  &nbsp;        
            {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}

        </div>
   


        <div className='tgl-button'>
            <div className="button" onClick={() => navigate('/new-move')} >Новый ход</div>
        </div>

        <div className='tgl-button'>
            <div className="button" onClick={() => navigate('/moves')}  >Список ходов</div>
        </div>

        <div className='tgl-button'>
            <div className="button" onClick={() => navigate('/lifegame')}  >Игра</div>
        </div>

        <div className='tgl-button'>
            <div className="button" onClick={() => navigate('/about')}  >Об Онлайн-игре</div>
        </div>

        <div className='tgl-button'>
            <div className="button" onClick={() => navigate('/demo-video')}  >Демо видео</div>
        </div>

        

      </div>

    </div>
  )
}

export default Home