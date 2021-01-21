import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import{Audio} from 'expo-av';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 80,
          marginLeft: 80,
          width: 200,
          height: 150,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'pink',
            borderWidth: 2,
            borderRadius: 20,
            marginRight: 100,
            marginBottom: 20,
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            var url =
              'http://www1.ssw.co.jp/songfile/linplug/rm4/GC_MouthMusic.mp3';
            this.playSound(url);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Sound 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            borderWidth: 2,
            borderRadius: 20,
            marginRight: 100,
            marginBottom: 20,
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            var url = 'http://www.easymusic.stakemann.de/Demo/RoughEmotion.mp3';
            this.playSound(url);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Sound 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'brown',
            borderWidth: 2,
            borderRadius: 20,
            marginRight: 100,
            marginBottom: 20,
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            var url = 'http://www.square-bear.co.uk/samples/fullon.mp3';
            this.playSound(url);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Sound 3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            borderWidth: 2,
            borderRadius: 20,
            marginRight: 100,
            marginBottom: 20,
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            var url =
              'https://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beatbox%20Hip%20Hop.wav-22554-Free-Loops.com.mp3';
            this.playSound(url);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Sound 4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderWidth: 2,
            borderRadius: 20,
            marginRight: 100,
            marginBottom: 20,
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            Audio.setIsEnabledAsync(false);
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Stop Sound
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
