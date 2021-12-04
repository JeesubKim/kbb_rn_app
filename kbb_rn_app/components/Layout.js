import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'; //This comes from the 3rd party lib

function Header({ children, color }) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={headerStyle.container}>
      <View style={[headerStyle.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor={color} />
      {children && React.cloneElement(children, { color: color })}
    </View>
  );
}
function Footer({ children }) {
  return <View style={footerStyle.container}>{children}</View>;
}
function Content({ children }) {
  return <View style={contentStyle.container}>{children}</View>;
}
function Layout({ children }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={layoutStyle.container}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding' })}
          style={layoutStyle.avoid}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
const layoutStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
  },
  avoid: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
});

const headerStyle = StyleSheet.create({
  container: {},
  statusBarPlaceholder: {
    backgroundColor: '#22a33a',
  },
});

const contentStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    // backgroundColor: 'yellow',
  },
});

const footerStyle = StyleSheet.create({
  container: {},
});
export default Layout;
