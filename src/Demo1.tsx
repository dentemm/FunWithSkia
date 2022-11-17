import React from 'react';

import {
  Canvas,
  Image,
  Skia,
  useImage,
  ColorMatrix,
  Blur,
} from '@shopify/react-native-skia';
import {Images} from './assets';
import {useWindowDimensions} from 'react-native';

const Demo1: React.FC = () => {
  const image = useImage(Images.lake);

  const {width} = useWindowDimensions();

  if (!image) {
    return null;
  }

  const path ="M33.368 23.44c.358-1.46 2.014-2.07 3.226-1.182l12.931 9.455c.976.712 2.297.48 2.943-.52l4.861-7.537c1.03-1.598 3.45-1.04 3.82.872l4.7 23.85c.21 1.06-.346 2.094-1.31 2.445L30.776 63.112c-.947.345-2.028-.074-2.555-.996L16.134 40.998c-.98-1.71.504-3.728 2.335-3.173l8.594 2.613c1.136.346 2.295-.332 2.579-1.502zm6.523 12.765c-.42.153-.46.664-.405 1.38l.108 1.06.05.594c.058.918.023 1.936-.387 2.9-.456 1.071-1.259 1.797-2.009 2.366l-1.034.76c-.537.413-.87.776-.705 1.226.163.45.65.514 1.328.485l1.003-.067.563-.026c.87-.022 1.84.057 2.775.533 1.037.527 1.763 1.403 2.336 2.218l.767 1.123c.416.584.776.95 1.196.797.42-.153.46-.665.405-1.38l-.108-1.06-.05-.595c-.058-.917-.023-1.935.387-2.9.456-1.07 1.26-1.797 2.009-2.366l1.034-.76c.537-.413.87-.775.706-1.225-.164-.45-.652-.515-1.328-.485l-1.004.067-.563.026c-.87.022-1.84-.058-2.775-.533-1.037-.527-1.763-1.404-2.336-2.219l-.767-1.122c-.416-.584-.776-.95-1.196-.797z"

  return (
    <Canvas style={{flex: 1, width}}>
      <Image width={width} height={800} image={image} fit={'cover'} clip={path} invertClip>
        <ColorMatrix matrix={matrix}/>
      </Image>
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
             0.000,  0.000,  2.000,  0.000,  0.000,
             0.000,  0.000,  0.000,  1,  0.000]
