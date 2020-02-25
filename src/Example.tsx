import React, { useState, useRef } from 'react'
import {
  Platform,
  Dimensions,
  Keyboard,
  InputAccessoryView,
  Button,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

const Example = () => {
  const secondNumberRef = useRef()
  const [firstNumber, setFirstNumber] = useState('123')
  const [secondNumber, setSecondNumber] = useState('987')
  const _first = parseFloat(firstNumber) || 0
  const _second = parseFloat(secondNumber) || 0
  const _total = _first + _second

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>THE IOS NUMPAD WITH A BUTTON</Text>
        <View style={styles.row}>
          <Text style={styles.label}>First Number</Text>
          <TextInput
            style={styles.input}
            defaultValue={firstNumber}
            keyboardType="numeric"
            onChangeText={value => setFirstNumber(value)}
            inputAccessoryViewID="Next"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Second Number</Text>
          <TextInput
            ref={secondNumberRef}
            style={styles.input}
            defaultValue={secondNumber}
            keyboardType="numeric"
            onChangeText={value => setSecondNumber(value)}
            inputAccessoryViewID="Done"
          />
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text style={[styles.label, styles.total]}>TOTAL</Text>
          <Text style={[styles.label, styles.total]}>{_total}</Text>
        </View>
      </ScrollView>
      {Platform.OS === 'ios' ? (
        <>
          <InputAccessoryView nativeID="Next">
            <View style={styles.accessory}>
              <Button
                onPress={() => secondNumberRef.current.focus()}
                title="Next"
              />
            </View>
          </InputAccessoryView>
          <InputAccessoryView nativeID="Done">
            <View style={styles.accessory}>
              <Button onPress={() => Keyboard.dismiss()} title="Done" />
            </View>
          </InputAccessoryView>
        </>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  title: {
    marginVertical: 44,
    fontSize: 18,
    letterSpacing: 1.5,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 12,
    width: '100%',
    borderBottomColor: 'rgba(210, 215, 226, 0.5)',
    borderBottomWidth: 1
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  input: {
    width: '40%',
    textAlign: 'right',
    letterSpacing: 0.25,
    fontSize: 14,
    lineHeight: 20,
    color: '#0E82F0',
    paddingTop: 0,
    paddingBottom: 3
  },
  totalRow: {
    borderBottomWidth: 0,
    marginVertical: 0
  },
  total: {
    fontWeight: '500',
    letterSpacing: 1.1
  },
  accessory: {
    width: Dimensions.get('window').width,
    height: 48,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 8
  }
})

export default Example
