import React from 'react';

import {Canvas, Image, rect, useImage} from '@shopify/react-native-skia';
import { Images } from './assets';

const Demo3: React.FC = () => {

  const image = useImage(Images.hauntedHouse);

  if (!image) {
    return null;
  }

  const width = 720;
  const height = 400

  const area = rect(50, 0, width, height);

  return (
    <Canvas
      style={{flex: 1, backgroundColor: 'black', height: '100%'}}
    >
      <Image
        image={image}
        rect={area}
        fit={'cover'}
      />
    </Canvas>);
};

export default Demo3;
