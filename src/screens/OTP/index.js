import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {styles} from './style';

export default function OTP() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  const CELL_COUNT = 4;

  return (
    <SafeAreaView>
      <Header title={'OTP'} />
      <View>
        <View style={styles.padding}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={styles.buttonTop}>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Verification Code</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.timerTop}>
          {minutes === 0 && seconds === 0 ? null : (
            <Text style={styles.timer}>
              {' '}
              00:{seconds < 10 ? `0${seconds}` : seconds}
            </Text>
          )}
        </View>
      </View>
      </View>

    </SafeAreaView>
  );
}
