import { Image, Group } from 'react-konva';
import color1 from './assets/images/tree1.png';
import color2 from './assets/images/tree2.png';
import useImage from 'use-image';

type Props = {
  color: 1 | 2;
  x: number;
  y: number;
  size: number;
}

const Tree = ({ color, x, y, size}: Props) => {
  const imagesColor = [color1, color2];
  const [image] = useImage(imagesColor[color - 1]);
  // Использование plantLevel как части ключа заставит React пересоздать компонент TreeImage
  // при каждом изменении размера, что позволит корректно обновить его размеры
  return (
    <Group>
      <Image
        image={image}
        x={x}
        y={y}
        width={size}
        height={size}
        zIndex={1000}
      />
    </Group>
  );
};

export { Tree };
