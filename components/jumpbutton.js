import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
  CountDownContainer,
  CountDownDigit,
  Colors,
} from './styles';

//colors
const { green, red } = Colors;

function Timer() {

  const [start] = useState(Date.now());
    const [now, setNow] = useState(start);
    const time = (now - start)/1000;
    var seconds = 60 - time;
    
    if(seconds <= 0 ) {
      seconds = 0;
    }
      useEffect(() => {
        const intervalID = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(intervalID);
      }, []);
  return (
    <CountDownContainer>
        <CountDownDigit>{seconds.toFixed(0)}</CountDownDigit>
    </CountDownContainer>
  );
  }

  setScore = function(points, Score) {
    console.log(Score);
    Score = Score + points;
    return Score;
   }

changeStyle = function(x, y, color) {
   return {
     position: 'absolute',
     top: y,
     left: x,
     borderRadius: 30,
     marginBottom: 10,
     width: 100,
     backgroundColor: color,
   }
 }

const RandomPos=(setNb)=>{
  var RrandX = Math.floor(Math.random() * 260) - 60 ;
  var RrandY = Math.floor(Math.random() * 660) - 60 ;
  if (Math.floor(Math.random() * 1000)%2 === 0) {
    var SColor = green;
    setScore(10);
  }
  else {
    var SColor = red;
    setScore(-5);
  }
    setNb(changeStyle(RrandX,RrandY,SColor));
    
}

const ViewCustomButton = () => {
  const [score,setScore] = useState(0);
  const [nb,setNb] = useState(changeStyle(Math.floor(Math.random() * 260) - 60, Math.floor(Math.random() * 660) - 60, green));
  const [nb2,setNb2] = useState(changeStyle(Math.floor(Math.random() * 260) - 60, Math.floor(Math.random() * 660) - 60, green));
  const [nb3,setNb3] = useState(changeStyle(Math.floor(Math.random() * 260) - 60, Math.floor(Math.random() * 660) - 60, red));
  const [nb4,setNb4] = useState(changeStyle(Math.floor(Math.random() * 260) - 60, Math.floor(Math.random() * 660) - 60, red));
  const [nb5,setNb5] = useState(changeStyle(Math.floor(Math.random() * 260) - 60, Math.floor(Math.random() * 660) - 60, red));
  console.log(score);
  
 
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          name="test" 
          onPressIn={() => {}}
          onPressOut={() => {
            //ReadScore(setNb)
            RandomPos(setNb)
          }}
          >
          <View style={nb}>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Press</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          name="test2" 
          onPressIn={() => {}}
          onPressOut={() => {
            //ReadScore(setNb2)
            RandomPos(setNb2)
          }}
          >
          <View style={nb2}>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Press</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          name="test3" 
          onPressIn={() => {}}
          onPressOut={() => {
            //ReadScore(setNb3)
            RandomPos(setNb3)
          }}
          >
          <View style={nb3}>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Press</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          name="test4" 
          onPressIn={() => {}}
          onPressOut={() => {
            //ReadScore(setNb4)
            RandomPos(setNb4)
          }}
          >
          <View style={nb4}>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Press</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          name="test5" 
          onPressIn={() => {}}
          onPressOut={() => {
            //ReadScore(setNb5)
            RandomPos(setNb5)
          }}
          >
          <View style={nb5}>
            <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Press</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Timer/>
      </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: '#ffffff',
    padding: 80,
    margin: 5,
    top: -550,
    left: -55,
    width: 360,
    height: 750
  },buttonText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    color: '#e5e7eb'
  },buttonContainer: {
    borderRadius: 30
  }
});

export default ViewCustomButton;