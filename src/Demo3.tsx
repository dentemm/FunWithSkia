import React from 'react';

import {Canvas, Image, RadialGradient, Rect, rect, runTiming, Turbulence, useComputedValue, useImage, useTouchHandler, useValue, vec} from '@shopify/react-native-skia';
import {Images} from './assets';

const color1 = 'rgba(220, 220, 120, 0.1)';
const color2 = 'rgba(30, 30, 20, 0.8)';

const Demo3: React.FC = () => {
  const image = useImage(Images.hauntedHouse);


  const width = 720;
  const height = 400;

  const translateX = useValue(width/2);
  const translateY = useValue(height/2);

const fogPosition = useValue(0);

const animateFog = () => {
  runTiming(fogPosition, width, {
    duration: 20*1000
  });
}

React.useEffect(() => {
  animateFog();
}, []);


  const area = rect(50, 0, width, height);

  const onTouch = useTouchHandler({
    onActive: ({x, y}) => {
      translateX.current = x;
      translateY.current = y;
    }
  });

  const transform = useComputedValue(() => {
    return [
      {
        translateX: translateX.current - width/2
      },
      {
        translateY: translateY.current - height/2
      },   
    ]
  }, [translateX, translateY])

  const fogTransform = useComputedValue(() => {
    return [
      {
        translateX: fogPosition.current - width/3
      }
    ]
  }, [fogPosition]);


  if (!image) {
    return null;
  }

  return (
    <Canvas style={{flex: 1, backgroundColor: 'black', height: '100%'}} onTouch={onTouch}>
      <Image image={image} rect={area} fit={'cover'} />
<Rect x={0} y={0} width={2*width} height={height} transform={fogTransform}>
  <Turbulence freqX={0.01} freqY={0.03} octaves={2}/>
</Rect>
      <Rect 
        rect={area}
      >
        <RadialGradient
          c={vec(width/2, height/2)}
          r={100}
          colors={[color1,color2]}
          transform={transform}
        />
      </Rect>
    </Canvas>
  );
};

export default Demo3;

