import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
   <WebView 
    javaScriptEnabled={true}
    originWhitelist={['*']}
   source={{ uri: 'http://192.168.0.103:5006' }} style={{ marginTop: 20 }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
