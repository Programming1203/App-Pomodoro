import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const App: React.FC = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{padding: 10}}>
        <Text style={[styles.title]}>
            Pomodoro
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32, 
    fontWeight: "bold",
  }
});

export default App;
