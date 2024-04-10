import React from 'react';
import { Rect } from 'react-konva';

const Tree = ({ tree, x, y, hexagonHeight }) => {


    if (!tree || tree.size === 0) {
        return null; // Не отображать дерево, если его размер равен 0
    }

    console.log(tree)

    
    const treeWidth = window.innerHeight / 40;
    const treeHeight = tree.size * 16; // Высота зависит от размера дерева
    const fillColor = tree.player === 'player1' ? "green" : "brown"; // Зеленый для маленького, коричневый для средних и больших

    const bottomOfHex = y + hexagonHeight / 2; // Находим нижнюю часть гексагона
    const adjustedY = bottomOfHex - treeHeight - hexagonHeight * 0.2; // Поднимаем дерево на 20% высоты гексагона от его низа

    return (        
        <Rect
            x={x - treeWidth / 2}
            y={adjustedY}
            width={treeWidth}
            height={treeHeight}
            fill={fillColor}
            stroke="black"
            strokeWidth={1}
        />
    );
};

export default Tree;