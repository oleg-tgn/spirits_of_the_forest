import React, { useState, useEffect } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';
import tree1Image from '../images/tree1.png'; // Обновите пути в соответствии со структурой вашего проекта
import tree2Image from '../images/tree2.png';

const TreeImage = ({ imageSrc, x, y, height }) => {
    const [image] = useImage(imageSrc);
    const [imgHeight, setImgHeight] = useState(height);
    const [imgWidth, setImgWidth] = useState(0);

    useEffect(() => {
        if (image) {
            // Подгоняем ширину изображения, сохраняя его пропорции
            const ratio = image.width / image.height;
            setImgWidth(imgHeight * ratio);
        }
    }, [image, imgHeight]);

    return (
        <Image
            image={image}
            x={x - imgWidth / 2}
            y={y}
            width={imgWidth}
            height={imgHeight}
        />
    );
};

const Tree = ({ tree, x, y, hexagonHeight }) => {
    if (!tree || tree.size === 0) {
        return null;
    }

    const treeWidth = hexagonHeight * 0.4;
    const treeHeight = hexagonHeight * 0.25 * tree.size;
    const imageSrc = tree.player === 'player1' ? tree1Image : tree2Image; // Используйте импортированные изображения

    const bottomOfHex = y + hexagonHeight / 2;
    const adjustedY = bottomOfHex - treeHeight - hexagonHeight * 0.2;

    return (
        <TreeImage
            imageSrc={imageSrc}
            x={x}
            y={adjustedY}
            height={treeHeight}
        />
    );
};

export default Tree;