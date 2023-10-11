import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  CustomDrawer  from './src/CustomDrawer';
import  Alert  from './pages/Alert';
import  Dropdown  from './pages/Dropdown';
import  Checkbox  from './pages/Checkbox';
import  Collapse  from './pages/Collapse';
import  InputText  from './pages/InputText';
import  Modal  from './pages/Modal';
import  RadioButton  from './pages/RadioButton';
import  Divider  from './pages/Divider';
import  ProgressBar  from './pages/ProgressBar';
import  Switch  from './pages/Switch';
import  Surface  from './pages/Surface';
import  SnackBar  from './pages/SnackBar';
import  SearchBar  from './pages/SearchBar';
import  HelperText  from './pages/HelperText';
import  Menu  from './pages/Menu';
import  TouchableRipple  from './pages/TouchableRipple';
import SegmentedBtn  from './pages/SegmentedBtn';
import ScrollView  from './pages/ScrollView';
import VirtualizeList  from './pages/VirtualizeList';
import SectionList  from './pages/SectionList';





const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Component" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Alert" component={Alert} />
        <Drawer.Screen name="Dropdown" component={Dropdown} />
        <Drawer.Screen name="Checkbox" component={Checkbox} />
        <Drawer.Screen name="Collapse" component={Collapse} />
        <Drawer.Screen name="InputText" component={InputText} />
        <Drawer.Screen name="Modal" component={Modal} />
        <Drawer.Screen name="RadioButton" component={RadioButton} />
        <Drawer.Screen name="Divider" component={Divider} />
        <Drawer.Screen name="ProgressBar" component={ProgressBar} />
        <Drawer.Screen name="Switch" component={Switch} />
        <Drawer.Screen name="Surface" component={Surface} />
        <Drawer.Screen name="SnackBar" component={SnackBar} />
        <Drawer.Screen name="SearchBar" component={SearchBar} />
        <Drawer.Screen name="HelperText" component={HelperText} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="TouchableRipple" component={TouchableRipple} />
        <Drawer.Screen name="SegmentedBtn" component={SegmentedBtn} />
        <Drawer.Screen name="ScrollView" component={ScrollView} />
        <Drawer.Screen name="VirtualizeList" component={VirtualizeList} />
        <Drawer.Screen name="SectionListList" component={SectionList} />
        
       
       
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
  }
});

