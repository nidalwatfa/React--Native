import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// استيراد مزود السياق (Context Provider)
import { UserProvider } from './UserContext'; 

// استيراد الشاشات
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import AddScreen from './AddScreen'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // تغليف التطبيق كله بمزود Context
    <UserProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'قائمة المستخدمين' }} 
          />
          <Stack.Screen 
            name="Details" 
            component={DetailsScreen} 
            options={{ title: 'التفاصيل' }} 
          />
          <Stack.Screen 
            name="Add" 
            component={AddScreen} 
            options={{ title: 'إضافة جديد' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
