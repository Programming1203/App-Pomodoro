import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface HeaderItemProps {
  index: number;
  title: string;
  onPress: () => void;
  current: number;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ index, title, onPress, current }) => {
  return (
    <View>
      <TouchableOpacity
          key={index}
          onPress={onPress}
          style={[
            Itemstyles.item,
            current !== index && { borderColor: "transparent" }
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
};

const Itemstyles = StyleSheet.create({
    item: {
      alignItems: "center",
      borderWidth: 3,
      borderRadius: 10,
      padding: 5,
      borderColor: "white",
      marginVertical: 20,
    },
});

export default HeaderItem;
