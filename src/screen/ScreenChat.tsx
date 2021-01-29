import React from 'react';
import { MenuChat } from '../components/MenuChat';
import { ContainerMessage } from '../components/MessageChat';
import { SendMessage } from '../components/SendMessage';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import Style from '../StylesScreen/ScreenChatStyle';

const Json = [
  {
    TextMessage: 'holaaa',
    Direction: 'flex-start',
    backgroundColorContainer: '#51BFF0'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-start',
    backgroundColorContainer: '#51BFF0'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#51BFF0'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-start',
    backgroundColorContainer: '#51BFF0'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-start',
    backgroundColorContainer: '#51BFF0'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-start',
    backgroundColorContainer: '#51BFF0'
  },
  {
    TextMessage:
      'holaasdaeeeeeeeeeeeeeeeeeeeeeevnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#51BFF0'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-start',
    backgroundColorContainer: '#48AF2F'
  },
  {
    TextMessage: 'holaaa',
    Direction: 'flex-end',
    backgroundColorContainer: '#51BFF0'
  }
];
export const ScreenChat = () => {
  return (
    <SafeAreaView style={Style.Container}>
      <View>
        <MenuChat />
      </View>
      <View style={Style.ContainerChat}>
        <ScrollView>
          {Json.map((Element, Index) => {
            return <ContainerMessage key={Index} {...Element} />;
          })}
        </ScrollView>
      </View>
      <View style={Style.ContainerSendMessage}>
        <SendMessage />
      </View>
    </SafeAreaView>
  );
};
