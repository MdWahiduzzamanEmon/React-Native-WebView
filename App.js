import React, { Component } from "react";
import {
  ActivityIndicator,
  // Button,
  SafeAreaView,
  // StyleSheet,
  // Text,
  // View,
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
 
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
       
        <WebView
          javaScriptEnabled={true}
          originWhitelist={["*"]}
          startInLoadingState
          renderLoading={() => {
            return <ActivityIndicator color="black" size="large" />;
          }}
          source={{ uri: "https://app.vitlous.com/" }}
          style={{ marginTop: 20 }}
          // injectedJavaScript="window.ReactNativeWebView.postMessage(document.title);"
        />
      </SafeAreaView>
    </>
  );
}
