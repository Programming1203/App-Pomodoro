import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Pomodoro from "./src/components/organisms/pomodoro";

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState("#F7DC6F");
  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={{padding: 10}}>
        <Text style={[styles.title]}>
            Pomodoro
        </Text>
      </View>
      <Pomodoro onColorChange={handleColorChange} />
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
