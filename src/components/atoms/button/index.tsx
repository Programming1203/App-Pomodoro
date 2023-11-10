import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonProps {
  children: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
            {children}
            </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#333333",
        padding: 15,
        borderRadius: 15,
        marginTop: 15,
    },
});

export default Button;
