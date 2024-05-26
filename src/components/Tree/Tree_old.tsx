import { useState, useEffect, useMemo } from 'react';
import { Image, Group } from 'react-konva';
import tree1Image from './assets/images/tree1.png';
import tree2Image from './assets/images/tree2.png';
import useImage from 'use-image';
import type { Plant } from 'types/Plant';
import type { Player } from 'types/Player';

type Props = {
  tree: Plant;
  x: number;
  y: number;
  hexagonHeight: number;
  players: Player[]
}

const TreeOld = ({ tree, x, y, hexagonHeight, players }: Props) => {
  const [plantLevel, setPlantLevel] = useState(tree.PlantLevel);
  const treeHeight = useMemo(() => hexagonHeight * 0.25 * plantLevel, [hexagonHeight, plantLevel]);

  const imageSrc = players[0].Id === tree.OwnedBy ? tree1Image : tree2Image;
  const [image] = useImage(imageSrc);
  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    if (image) {
      const ratio = image.width / image.height;
      setImgWidth(image.height * ratio);
    }
  }, [image]);

  if (!tree || tree.PlantLevel === -1) {
    return null;
  }


  const bottomOfHex = y + hexagonHeight / 2;
  const adjustedY = bottomOfHex - treeHeight - hexagonHeight * 0.2;

  const handleTreeClick = () => {
    if (plantLevel < 3) {
      setPlantLevel(plantLevel + 1);
    }
    if (plantLevel === 3) {
      setPlantLevel(0);
    }
  }

  console.log(imageSrc);

  // Использование plantLevel как части ключа заставит React пересоздать компонент TreeImage
  // при каждом изменении размера, что позволит корректно обновить его размеры
  return (
    <Group>
      <Image
        key={`${plantLevel}-${imageSrc}`}
        image={image}
        x={x - imgWidth / 2}
        y={adjustedY}
        width={imgWidth}
        height={image?.height}
        onClick={handleTreeClick} // Добавляем обработчик клика здесь
      />
    </Group>
  );
};

export { TreeOld };
