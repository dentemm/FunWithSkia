import React from 'react';

import {Blur, Canvas, ColorMatrix, Image, rect, Skia, useImage} from '@shopify/react-native-skia';
import { Images } from './assets';
import { useWindowDimensions } from 'react-native';

const Demo1: React.FC = () => {

  const { width } = useWindowDimensions();

  return (
    <Canvas style={{flex: 1, backgroundColor: 'hotpink', width}}>
    </Canvas>
  );
};

export default Demo1;
