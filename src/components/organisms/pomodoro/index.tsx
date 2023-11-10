import React, { useEffect, useState } from "react";
import {
  View,
  Platform,
} from "react-native";
import { Audio } from "expo-av";
import Header from "../../molecules/header";
import Timer from "../../atoms/timer";
import Button from "../../atoms/button";

interface PomodoroProps {
    onColorChange: (color: string) => void;
}

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

const Pomodoro: React.FC<PomodoroProps> = ({ onColorChange }) => {
  const [isWorking, setIsWorking] = useState(true);
  const [time, setTime] = useState(60 * 25);
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking(!isWorking);
      setTime(isWorking ? 300 : 1500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, isWorking, onColorChange(colors[currentTime])]);

  const handleStartStop = () => {
    playSound();
    setIsActive((prev) => !prev);
  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/click.mp3")
    );
    await sound.playAsync();
  }

  return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" ? 30 : 0,
          backgroundColor: colors[currentTime] 
        }}
      >
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <Timer time={time} />
        <Button onPress={handleStartStop}>{isActive ? "STOP" : "START"}</Button>
      </View>
  );
};

export default Pomodoro;
