import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Radio } from "./src/components/Radio";

export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Radio
        options={["cpf", "cnpj", "rg"]}
        horizontal={false}
        changeSelected={(opt, index) => {
          alert(`${opt} o index é ${index}`);
          setSelected(index);
        }}
        selected={selected}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
