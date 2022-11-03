import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entry from './Entry';

export enum RouteNames {
  Entry = 'Entry',
  Demo1 = 'Demo1',
  Demo2 = 'Demo2',
  Demo3 = 'Demo3',
}

type ParamList = {
  [RouteNames.Entry]: undefined;
  [RouteNames.Demo1]: undefined;
  [RouteNames.Demo2]: undefined;
  [RouteNames.Demo3]: undefined;
}

const Stack = createNativeStackNavigator<ParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteNames.Entry}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name={RouteNames.Entry} component={Entry} options={{headerShown: false}} />
      {/* <Stack.Group>
        <Stack.Screen name={RouteNames.Modal} component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default AppStack;