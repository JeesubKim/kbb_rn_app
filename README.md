Following are methods that I used during dev.

## Create New Project

```
$ npx react-native init kbb_rn_app

```

## Status bar color for iOS

```
// Yarn
$ yarn add react-native-safe-area-context

// NPM
$ npm install --save react-native-safe-area-context
```

## react-native vector icons

```
// Yarn
$ yarn add react-native-vector-icons

// NPM
$ npm install --save react-native-vector-icons
```

### iOS

```
$ cd ios
$ pod install
```

```
//ios/TodoApp/Info.plist
...

    <key>UIViewControllerBasedStatusBarAppearance</key>
    <false/>
    <key>UIAppFonts</key>
    <array>
        <string>MaterialIcons.ttf
    </array>
</dict>
</plist>
```

### android

```
//android/app/build.gradle
...
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

## AsyncStorage

```
$ yarn add @react-native-community/async-storage
```

`pod install` is needed for iOS

### Usage

```
import AsyncStorage from '@react-native-community/async-storage;

// C: setItem()
const save = async() => {
    try{
        await AsyncStorage.setItem('key', 'value');
    }
}

// To use object | array type for setItem function, JSON.stringify(target) is needed as a 2nd parameter.
```

await AsyncStorage.setItem('key',JSON.stringify(target));

```

// R: getItem()

const load = async() => {
    try{
        const value = await AsyncStorage.getItem('key');
    } catch(e){

    }
}
//
```

## Navigation

```
$ yarn add @react-navigation/native
$ yarn add @react-navigation/native-stack
$ yarn add react-native-screens
```

iOS only

```
$ cd ios
$ pod install
```

```
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function App(){

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Config' component={ConfigScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        )
}
```

### Navigation

```
function HomeScreen({navigation}){
    return (
        <View>
            <Button onPress={()=>{
                navigation.navigate('Config');
                //navigation.push('Config');
            }}>
        </View>
    )
}
```

## Bottom navigator

```
$ yarn add @react-navigation/bottom-tabs react-native-vector-icons
```
