import React from 'react';

import {
  Canvas,
  rect,
  rrect,
} from '@shopify/react-native-skia';
import {useWindowDimensions} from 'react-native';

const Demo2: React.FC = () => {
  const {width} = useWindowDimensions();

  const radius = 20;
  const aRect = rect(50, 50, width - 100, 100);
  const roundedRect = rrect(aRect, radius, radius);

  return (
    <Canvas style={{flex: 1, backgroundColor: 'lightgreen'}} >
    </Canvas>
  );
};

export default Demo2;


// Shapes: RoundedRect
// Shadows