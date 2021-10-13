import React,{useState} from 'react'
import { StyleSheet, Text, View ,Dimensions, TouchableOpacity } from 'react-native'
import LessCommoN from './Symptoms/LessCommon';
import MoreCommon from './Symptoms/MoreCommon';
import Serious from './Symptoms/SeriousSymptoms';
const windowWidth = Dimensions.get("window").width ;
const windowHeight = Dimensions.get("window").height - 400 ;
const Symptoms = () => {
  const [active, setactive] = useState(LessCommon);
  const LessCommon = () => {
    return (
      <View>
        <LessCommoN/>
      </View>
    );
  }

  const MostCommon = () => {
    return (
      <View>
        <MoreCommon/>
      </View>
    )
  }
  const SeriousSymptoms = () => {
    return (
      <View>
        <Serious/>
      </View>
    )
  }

    return (
      <View style={styles.SymptomsDiv} >
        <Text style={styles.CategoryTitle} >Symptoms :-</Text>
            <View style={styles.BtnContainer}>
                <View style={styles.Btns}>
                <TouchableOpacity onPress={()=>setactive(LessCommon)} ><Text style={styles.SymptomsBtn} >Less common</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setactive(MostCommon)}} ><Text style={styles.SymptomsBtn} >More Common </Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setactive(SeriousSymptoms)}} ><Text style={styles.SymptomsBtn} >Serious</Text></TouchableOpacity>
                </View>
        </View>
        {active}
        </View>
    )
}

const styles = StyleSheet.create({
  CategoryTitle: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    color:"#fff"
  },
  SymptomsDiv: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical:10,
    height: windowHeight,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: "#329F6D",
  },
  SymptomsBtn: {
      color: "#fff",
      borderWidth: 2,
      borderColor: "#000",
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#000',
      opacity:0.5,
      
  },
    Btns: {
      marginTop:10,
      flexDirection: "row",
      justifyContent:"space-evenly"
    },
//     BtnContainer: {
//         backgroundColor: "#000",
//         opacity: 0.5,
//         borderTopLeftRadius: 15,
//         borderTopRightRadius:15
//   }
});

export default Symptoms


//https://www.freepik.com/free-vector/coughing-person-illustrated-concept_7533002.htm#page=2&query=dry%20cough&position=0