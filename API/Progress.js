import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";
import { Feather , EvilIcons } from "@expo/vector-icons";
import Statistics from "../Components/Statistics";
function Progress(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const Country = props.Country;
  const Api = () => {
    fetch(`https://corona.lmao.ninja/v2/countries/${Country}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    Api();
  }, [Country]);

  return (
    <View style={styles.Screen}>
      {isLoading ? (
        <Feather
          name="loader"
          size={34}
          style={{ position: "relative", alignSelf: "center" }}
          color="black"
        />
      ) : (
        <View>
          <Statistics Data={data} />
          <TouchableOpacity
            style={styles.DetailScreen}
              onPress={() => props.navigation("Details",
                {
                  name: props.Country
                  
              }
              )}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>
              Detailed Statistics
            </Text>
            <EvilIcons name="arrow-right" size={27} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  Screen: {
    textAlign: "center",
  },
  DetailScreen: {
    flexDirection:"row",
    alignItems: "stretch",
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#329F6D",
    height: 45,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:10
  },
});
export default Progress;
