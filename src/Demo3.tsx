import React from 'react';

import {Canvas, Image, Rect, rect, useImage} from '@shopify/react-native-skia';
import {Images} from './assets';

const color1 = 'rgba(220, 220, 120, 0.1)';
const color2 = 'rgba(30, 30, 20, 0.8)';

const Demo3: React.FC = () => {
  const image = useImage(Images.hauntedHouse);

  const width = 720;
  const height = 400;

  const area = rect(50, 0, width, height);

  if (!image) {
    return null;
  }

  return (
    <Canvas style={{flex: 1, backgroundColor: 'black', height: '100%'}} >
      <Image image={image} rect={area} fit={'cover'} />
      <Rect 
        rect={area}
        //color={'transparent'}
      >
      </Rect>
    </Canvas>
  );
};

export default Demo3;



{/* <Rect x={0} y={0} width={2*width} height={height} transform={fogTransform}>
  <Turbulence freqX={0.01} freqY={0.03} octaves={2}/>
</Rect> */}

// const fogPosition = useValue(0);

// const animateFog = () => {
//   runTiming(fogPosition, width, {
//     duration: 20*1000
//   });
// }

// useEffect(() => {
//   animateFog();
// }, []);

// const fogTransform = useComputedValue(() => {
//   return [
//     {
//       translateX: fogPosition.current - width/3
//     }
//   ]
// }, [fogPosition]);

