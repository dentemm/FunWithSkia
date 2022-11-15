/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import {ParamList, RouteNames} from './Navigation';

interface DataItem {
  name: string;
}

const Entry: React.FC = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamList>>();

  const data: DataItem[] = [
    {
      name: 'Image filters',
    },
    {
      name: 'Shadows',
    },
    {
      name: 'Halloween',
    },
  ];

  const onPress = (idx: number) => {

    console.log(idx)

    switch (idx) {
      case 1:
        nav.navigate(RouteNames.Demo2);
        break;

      case 2:
        nav.navigate(RouteNames.Demo3);
        break;

      default:
        nav.navigate(RouteNames.Demo1);
    }
  };

  const renderItem = (data: DataItem, idx: number): JSX.Element => {
    return (
      <Pressable
        onPress={() => onPress(idx)}
        style={{
          width: '100%',
          height: 50,
          paddingHorizontal: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
          }}>
          {data.name}
        </Text>
        <Text
          style={{
            fontSize: 24,
          }}>
          {'\u276F'}
        </Text>
      </Pressable>
    );
  };

  const separator: JSX.Element = (
    <View style={{height: 1, backgroundColor: 'lightgrey'}} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 36,
          padding: 10,
          alignSelf: 'center',
        }}>
        Skia
      </Text>
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={item => renderItem(item.item, item.index)}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => separator}
      />
    </SafeAreaView>
  );
};

export default Entry;
