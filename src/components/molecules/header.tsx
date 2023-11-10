import React from "react";
import {
  View,
} from "react-native";
import HeaderItem from "../atoms/header-item"

interface HeaderProps {
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const options = ["Pomodoro", "Short Break", "Long Break"];

const Header: React.FC<HeaderProps> = ({ currentTime, setCurrentTime, setTime }) => {
  function handlePress(index: number) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={{ flexDirection: "row", justifyContent:"space-between"}}>
      {options.map((option, index) => (
        <HeaderItem
          index={index}
          onPress={() => handlePress(index)}
          current={currentTime}
          title={option}
        />
      ))}
    </View>
  );
};

export default Header;
