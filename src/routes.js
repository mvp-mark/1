import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/login';
import Home  from './pages/home';

const Stack = createStackNavigator();

function Routes() {
	return (
	  <NavigationContainer>
		<Stack.Navigator>
		  <Stack.Screen
			name="Login"
			component={Login}
			// options={{title: 'Login'}}
			/>
		  <Stack.Screen name="Home" component={Home}
			options={{title: 'Home'}}
		   />
		</Stack.Navigator>
	  </NavigationContainer>
	);
  }

// const Routes = createAppContainer(
// 	createStackNavigator(
// 		{
// 			Login: {
// 				screen: Login,
// 				// navigationOptions: {
// 				// 	title: 'Login',
// 				// },
// 			},
// 			Home: {
// 				screen: Home,
// 				navigationOptions: {
// 					title: 'Home',
// 				},
// 			},
// 		},
// 		{
// 			defaultNavigationOptions: {
//                 headerTintColor:'#FFF',
//                 headerBackTitleVisible: false,
//                 headerStyle:{
//                     backgroundColor:'#7D40E7',
//                     //color:'#FFF'
//                 }
//             },
// 		}
// 	)
// );

export default Routes;
