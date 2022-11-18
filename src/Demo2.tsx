import React from 'react';

import {
  Canvas,
  rect,
  RoundedRect,
  rrect,
  Shadow,
} from '@shopify/react-native-skia';
import {useWindowDimensions} from 'react-native';

const Demo2: React.FC = () => {
  const {width} = useWindowDimensions();

  const radius = 20;
  const aRect = rect(50, 50, width - 100, 100);
  const roundedRect = rrect(aRect, radius, radius);

  return (
    <Canvas style={{flex: 1, backgroundColor: 'lightgreen'}}>
      <RoundedRect rect={roundedRect} color='lightgreen' >
        <Shadow dx={5} dy={5} blur={4} color='grey' />
        <Shadow dx={-5} dy={-5} blur={4} color='white' />
      </RoundedRect>
    </Canvas>
  );
};

export default Demo2;


// Shapes: RoundedRect
// Shadows
