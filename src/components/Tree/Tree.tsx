import { Image, Group } from 'react-konva';
import color1 from './assets/images/tree1.png';
import color2 from './assets/images/tree2.png';
import useImage from 'use-image';

type Props = {
  id: string;
  color: 1 | 2;
  x: number;
  y: number;
  size: number;
  onClick?: (id: string) => void;
}

const Tree = ({ id, color, x, y, size, onClick = () => {}}: Props) => {
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
        onClick={() => onClick(id)}
        zIndex={1000}
      />
    </Group>
  );
};

export { Tree };
