import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import RoundButton from "./round-button";
import { Audio } from "expo-av";

// var Sound = require('react-native-sound');

// Sound.setCategory('Playback');

// var whoosh = new Sound('mtb.mp3', Sound.MAIN_BUNDLE, error => {
//   if (error) {
//     console.log('failed to load the sound', error);
//     return;
//   }
//   // loaded successfully
//   console.log(
//     'duration in seconds: ' +
//       whoosh.getDuration() +
//       'number of channels: ' +
//       whoosh.getNumberOfChannels(),
//   );
// });

const soundObject = new Audio.Sound();
Audio.setIsEnabledAsync(true);
soundObject.loadAsync(require("../sound/mtb.mp3"));

async function prepareSound() {
  await Expo.Audio.setIsEnabledAsync(true);

  await Expo.Audio.setAudioModeAsync({
    playsInSilentModeIOS: true,
    allowsRecordingIOS: false,
    interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    shouldDuckAndroid: false,
    interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
  });
  await soundObject.playAsync();
}

prepareSound();

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dfe9f3",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  controller: {
    backgroundColor: "#ffffff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
    marginTop: 40
  },
  bpmWrapper: {
    flexDirection: "row"
  },
  bpmText: {
    color: "#3D3D3D",
    fontSize: 24,
    paddingTop: 0,
    textAlign: "right",
    width: 100
  },

  bpmText2: {
    color: "#3D3D3D",
    fontSize: 24,
    paddingTop: 0,
    textAlign: "left",
    width: 100
  }
});

var myVar;

export default class teste extends Component {
  state = {
    bpm: "80",
    status: false
  };

  alterarTexto = texto => {
    this.setState({ texto });
    this.setState({ bpm: texto });
  };

  async tocaBeep() {
    // Play the sound with an onEnd callback
    // whoosh.play(success => {
    //   if (success) {
    //     console.log('successfully finished playing');
    //   } else {
    //     console.log('playback failed due to audio decoding errors');
    //   }
    // });
    try {
      //await soundObject.loadAsync(require("../sound/mtb.mp3"));

      await soundObject.replayAsync();
      // soundObject.playAsync();
      // Your sound is playing!
      console.log("Tocando");
    } catch (error) {
      // An error occurred!
      console.log("Erro na reprodução do audio");
    }
  }

  metronomoBeep() {
    console.log("beep");
  }

  metronomoInfinito() {
    console.log("metronomo status: " + this.state.status);

    myVar = setInterval(this.tocaBeep, 60000 / this.state.bpm);
  }

  tocaGuitarra() {
    console.log("Toca Guitarra");

    console.log("Liga/Desliga: " + !this.state.status);
    var status = !this.state.status;

    if (status) {
      this.metronomoInfinito();
    } else {
      clearInterval(myVar);
    }

    this.setState({ status });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableHighlight
          style={Padrao.ex}
          onPress={() => this.tocaGuitarra()}>
          <Text> Dalhe </Text>
        </TouchableHighlight> */}

        <View style={styles.controller}>
          <View style={styles.bpmWrapper}>
            <TextInput
              keyboardType="numeric"
              style={styles.bpmText}
              value={this.state.bpm}
              underlineColorAndroid="transparent"
              accessibilityLabel={"8b"}
              onChangeText={this.alterarTexto}
            />
            <Text style={styles.bpmText2}>bpm</Text>
            <RoundButton
              accessibilityLabel={"Botão Liga Desliga"}
              onPress={() => this.tocaGuitarra()}
              text="I/O"
            />
          </View>
        </View>
      </View>
    );
  }
}
