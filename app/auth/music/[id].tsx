import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useGlobalSearchParams } from 'expo-router'

export default function _screen() {
  const params = useGlobalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={
          { title: params.id.toString() }
        }
      />

      <Text> Music {params.id}</Text>
    </View>
  )
}
