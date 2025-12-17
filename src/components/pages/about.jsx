import { useState } from 'react'



import './pages.scss'

function About() {

  return (<div className="pages">

<div className="logo">Ton Game of Life</div>
<div className="logo-text">Клеточный автомат на блокчейне TON</div>

<br/>

<div>
   

    <p className="pages__top-text"><b>RU</b> Онлайн-игра по мотивам клеточного автомата Джона Конвоя, на блокчейне TON.</p>

    <h4>Правила игры «Ton Game of Life»</h4>

    <ul>
        <li>Участники игры делают ходы внося в смарт-контракт запись о ходе (состоянии клетки). </li>

        <li>Каждый ход это координата клетки x/y и номер её поколения. </li>

        <li>Ход меняет состояние клетки на противоположное, тем самым игроки вносят в детерминированный мир игры неопределённость своими ходами. </li>

        <li>Распределение клеток в первом поколении не случайно (задано заранее), и может быть изменено, только ходами игроков.</li>

        <li>Игрок может внести свой ход в любое поколение игры, тем самым изменить её до неузнаваемости. </li>
    </ul>

    <h4>Механизм клеточного автомата Джона Конвоя</h4>

    <p>Каждый ход игрока влияет на состояние соседних клеток 
        согласно правилам клеточного автомата:</p>
    <ul>
        <li>Если живая клетка окружена двумя или тремя живыми соседними клетками, она остается живой.</li>
        <li>Если живая клетка окружена менее двух живых соседей, она умирает (от одиночества).</li>
        <li>Если живая клетка окружена четырьмя и более живыми соседями, она также умирает (от перенаселенности).</li>
        <li>Если мертвая клетка окружена ровно тремя живыми соседями, она оживает.</li>
    </ul>

    <h4>Цель игры</h4>

    <p>Коллективным сознанием игроков найти наиболее интересные формы мира игры, 
      блокчейн TON здесь служит децентрализованным журналом 
      ходов, который нельзя изменить. </p>


</div>

<hr></hr>

<p className="pages__top-text"><b>EN</b>  An online game based on John Convoy's cellular automaton, powered by the TON blockchain. Players make moves by entering a move (cell state) into a smart contract.</p>

<h4>The rules of the "Ton Game of Life" game</h4>
<p>The game participants make moves by entering a record of the move (the state of the cell) into the smart contract.
Each move is a coordinate of the x/y cell and its generation number.
The move changes the state of the cell to the opposite, thus introducing uncertainty into the deterministic world of the game through the players' moves.
The distribution of cells in the first generation is not random (it is predetermined) and can only be changed by the players' moves.
A player can make a move at any point in the game, changing it beyond recognition.</p>


<h4>The mechanism of John Conway's cellular automaton</h4>
<p>Each player's move affects the state of neighboring cells according to the rules of the cellular automaton:</p>

<p>If a live cell is surrounded by two or three live neighboring cells, it remains alive.
If a live cell is surrounded by fewer than two live neighbors, it dies (from loneliness).
If a live cell is surrounded by four or more live neighbors, it also dies (from overcrowding).
If a dead cell is surrounded by exactly three live neighbors, it comes back to life.</p>

<h4>The goal of the game</h4>
<p>The collective consciousness of the players finds the most interesting forms of the game world, and the TON blockchain serves as a decentralized log of moves that cannot be changed.</p>


  </div>
  )
}

export default About