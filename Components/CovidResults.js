import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import TextINPUT from "./TextINPUT";
import Progress from "../API/Progress";
import DetailedCases from "../Screens/DetailedCases";
const CovidResults = ({navigate}) => {
  const [TXT_Input, SETTXT_Input] = useState();
  const [Inputcountry, setInputcountry] = useState("India");


  const onChange = (input) => {
    SETTXT_Input(input.replace(/[^a-z,A-Z]/g, ""));
  };
  const ResetInput = () => {
    SETTXT_Input("");
    Keyboard.dismiss();
  };
  const SubmitInput = () => {
    SETTXT_Input(TXT_Input);
    setInputcountry(TXT_Input);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.Screen}>
      <TextINPUT
        input={TXT_Input}
        setinput={onChange}
        reset={ResetInput}
        submit={SubmitInput}
      />
      <Progress Country={Inputcountry} navigation= {navigate} />
      
    </View>
  );
};

export default CovidResults;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
