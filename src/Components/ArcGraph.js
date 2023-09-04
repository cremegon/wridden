import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  event,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const ArcGraph = () => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      console.log(translateY.value);
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.min(translateY.value, SCREEN_HEIGHT / 3);
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT / 6) {
        translateY.value = withSpring(SCREEN_HEIGHT / 3);
      } else if (translateY.value < SCREEN_HEIGHT / 4) {
        translateY.value = withSpring(SCREEN_HEIGHT / 10);
      }
    });

  useEffect(() => {
    translateY.value = withSpring(SCREEN_HEIGHT / 10);
  }, []);

  const rTopSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.topSheet, rTopSheetStyle]}>
        <View style={styles.line}></View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  topSheet: {
    backgroundColor: "#ffa951",
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    bottom: SCREEN_HEIGHT,
    borderRadius: 25,
    zIndex: 1,
  },
  line: {
    backgroundColor: "black",
    height: 4,
    borderRadius: 30,
    width: 75,
    alignSelf: "center",
    marginVertical: SCREEN_HEIGHT / 1.03,
  },
});

export default ArcGraph;
