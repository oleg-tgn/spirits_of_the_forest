import React, { useState, useEffect, useMemo } from 'react';
import { Image, Group } from 'react-konva';
import useImage from 'use-image';
import tree1Image from '../images/tree1.png';
import tree2Image from '../images/tree2.png';

const TreeImage = ({ imageSrc, x, y, height, onClick }) => {
    const [image] = useImage(imageSrc);
    const [imgWidth, setImgWidth] = useState(0);

    useEffect(() => {
        if (image) {
            const ratio = image.width / image.height;
            setImgWidth(image.height * ratio);
        }
    }, [image]);

    return (
        <Image
            image={image}
            x={x - imgWidth / 2}
            y={y}
            width={imgWidth}
            height={image.height}
            onClick={onClick} // Добавляем обработчик клика здесь
        />
    );
};

const Tree = ({ tree = { size: 0, player: null }, x, y, hexagonHeight }) => {
    const [treeSize, setTreeSize] = useState(tree.size);
    const treeHeight = useMemo(() => hexagonHeight * 0.25 * treeSize, [hexagonHeight, treeSize]);

    if (!tree || treeSize === 0) {
        return null;
    }

    const imageSrc = tree.player === 'player1' ? tree1Image : tree2Image;
    const bottomOfHex = y + hexagonHeight / 2;
    const adjustedY = bottomOfHex - treeHeight - hexagonHeight * 0.2;

    const handleTreeClick = () => {
        if (treeSize < 3) {
            setTreeSize(treeSize + 1);
        }
        if (treeSize === 3) {
            setTreeSize(0);
        }
    }

    // Использование treeSize как части ключа заставит React пересоздать компонент TreeImage
    // при каждом изменении размера, что позволит корректно обновить его размеры
    return (
        <Group>
            <TreeImage
                key={`${treeSize}-${imageSrc}`} // Обновляем ключ при изменении размера дерева
                imageSrc={imageSrc}
                x={x}
                y={adjustedY}
                height={treeHeight}
                onClick={handleTreeClick}
            />
        </Group>
    );
};

export default Tree;
