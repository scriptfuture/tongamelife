import { useState } from 'react'
import React from 'react'


import Home from './components/home/home.jsx'

import About from './components/pages/about.jsx'
import DemoVideo from './components/pages/demo_video.jsx'

import Moves from './components/moves/moves.jsx'
import NewMove from './components/new_move/new_move.jsx'

import LifeGame from './components/lifegame/lifegame.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Layout from './components/layout/Layout.jsx';


function App() {

   // let manifestUrl = "https://tonshorts.ru/tonconnect-manifest.json";
   let manifestUrl = "https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json";

  return (<TonConnectUIProvider manifestUrl={manifestUrl}  uiPreferences={{theme: THEME.DARK}}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>


                    <Route path='/about' element={<About/>}/>
                    <Route path='/demo-video' element={<DemoVideo/>}/>
                
                    <Route path='/moves' element={<Moves/>}/>

                    <Route path='/new-move' element={<NewMove/>}/>

                    <Route path='/lifegame' element={<LifeGame/>}/>
                </Route>
            
            </Routes>
    </TonConnectUIProvider>)
}

export default App