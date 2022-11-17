import React from 'react';

import {
  Canvas,
  Skia,
  useImage,
} from '@shopify/react-native-skia';
import {Images} from './assets';
import {useWindowDimensions} from 'react-native';

const Demo1: React.FC = () => {
  const image = useImage(Images.lake);

  const {width} = useWindowDimensions();

  if (!image) {
    return null;
  }

  return (
    <Canvas style={{flex: 1, width}}>
    </Canvas>
  );
};

export default Demo1;


// Showing image
// Clipping image - paths: declarative vs imperative
    // Paths: 
// Image filters (https://fecolormatrix.com)

const matrix = [1.000,  0.000,  0.000,  0.000,  0.000, 
             0.000,  1.000,  0.000,  0.000,  0.000, 
             0.000,  0.000,  1.000,  0.000,  0.000,
             0.000,  0.000,  0.000,  0.50,  0.000]
