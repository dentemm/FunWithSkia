import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Entry from './Entry';

export enum RouteNames {
  Entry = 'Entry',
  Demo1 = 'Image Filters',
  Demo2 = 'Shadows',
  Demo3 = 'Halloween',
}

export type ParamList = {
  [RouteNames.Entry]: undefined;
  [RouteNames.Demo1]: undefined;
  [RouteNames.Demo2]: undefined;
  [RouteNames.Demo3]: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.Entry}
    >
      <Stack.Screen
        name={RouteNames.Entry}
        component={Entry}
        options={{headerShown: false}}
      />
      <Stack.Screen name={RouteNames.Demo1} component={Demo1} />
      <Stack.Screen name={RouteNames.Demo2} component={Demo2} />
      <Stack.Screen
        name={RouteNames.Demo3}
        component={Demo3}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
