# Ton Game of Life

RU Онлайн-игра по мотивам клеточного автомата Джона Конвоя, на блокчейне TON.

## Правила игры «Ton Game of Life»

Участники игры делают ходы внося в смарт-контракт запись о ходе (состоянии клетки).
Каждый ход это координата клетки x/y и номер её поколения.
Ход меняет состояние клетки на противоположное, тем самым игроки вносят в детерминированный мир игры неопределённость своими ходами.
Распределение клеток в первом поколении не случайно (задано заранее), и может быть изменено, только ходами игроков.
Игрок может внести свой ход в любое поколение игры, тем самым изменить её до неузнаваемости.

## Механизм клеточного автомата Джона Конвоя
Каждый ход игрока влияет на состояние соседних клеток согласно правилам клеточного автомата:

Если живая клетка окружена двумя или тремя живыми соседними клетками, она остается живой.
Если живая клетка окружена менее двух живых соседей, она умирает (от одиночества).
Если живая клетка окружена четырьмя и более живыми соседями, она также умирает (от перенаселенности).
Если мертвая клетка окружена ровно тремя живыми соседями, она оживает.

## Цель игры
Коллективным сознанием игроков найти наиболее интересные формы мира игры, блокчейн TON здесь служит децентрализованным журналом ходов, который нельзя изменить.

------

EN An online game based on John Convoy's cellular automaton, powered by the TON blockchain. Players make moves by entering a move (cell state) into a smart contract.

## The rules of the "Ton Game of Life" game

The game participants make moves by entering a record of the move (the state of the cell) into the smart contract. Each move is a coordinate of the x/y cell and its generation number. The move changes the state of the cell to the opposite, thus introducing uncertainty into the deterministic world of the game through the players' moves. The distribution of cells in the first generation is not random (it is predetermined) and can only be changed by the players' moves. A player can make a move at any point in the game, changing it beyond recognition.

## The mechanism of John Conway's cellular automaton

Each player's move affects the state of neighboring cells according to the rules of the cellular automaton:

If a live cell is surrounded by two or three live neighboring cells, it remains alive. If a live cell is surrounded by fewer than two live neighbors, it dies (from loneliness). If a live cell is surrounded by four or more live neighbors, it also dies (from overcrowding). If a dead cell is surrounded by exactly three live neighbors, it comes back to life.

## The goal of the game

The collective consciousness of the players finds the most interesting forms of the game world, and the TON blockchain serves as a decentralized log of moves that cannot be changed.
