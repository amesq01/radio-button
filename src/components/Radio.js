import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Radio = ({
  options = [],
  horizontal = false,
  changeSelected,
  selected,
}) => {
  return (
    <View style={[horizontal ? styles.horizontal : styles.vertical]}>
      {options.map((opt, index) => (
        <TouchableOpacity
          onPress={() => changeSelected(opt, index)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: horizontal
              ? index === options.length - 1
                ? 0
                : 30
              : 10,
            marginTop: horizontal ? 0 : 10,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 2,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 3,
              backgroundColor: "blue",
            }}
          >
            {selected === index && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "#333",
                  borderRadius: 10,
                }}
              />
            )}
          </View>
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});
