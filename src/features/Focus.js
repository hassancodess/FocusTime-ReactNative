import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../components/RoundedButton'
const Focus = () => {
  const [text, setText] = React.useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label='What would you like to focus on?'
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <RoundedButton title='+' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  inputContainer: {
    flex: 0.5,
    padding: 50,
    justifyContent: 'flex-start',
  },
})

export default Focus
