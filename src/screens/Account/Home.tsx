import { ScrollView, Text, VStack } from 'native-base';
import React from 'react';

export default function Tab1() {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'black',
      }}
    >
      {Array(50)
        .fill('')
        .map((_, i) => (
          <Text key={Math.random()} color={'white'}>
            Tab{i}
          </Text>
        ))}
    </ScrollView>
  );
}
