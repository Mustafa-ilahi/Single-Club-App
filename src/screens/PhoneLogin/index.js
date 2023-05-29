import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from './src/types';
import {styles} from './style';
import {colors, sizes} from '../../services';
import images from '../../services/utilities/images';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PhoneLogin({navigation}) {
  const [countryCode, setCountryCode] = useState('IN');
  const [country, setCountry] = useState('');
  const [withCountryNameButton, setWithCountryNameButton] = useState(true);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(false);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  const [number, setNumber] = useState('');

  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country.name);
  };
  return (
    <SafeAreaView>
      <Header title={'Phone Number'} />
      <View style={styles.top}>
        <Text style={styles.label}>Country</Text>
        <View style={styles.countryView}>
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
            }}
          />
        </View>
        <View>
          <Image source={images.line} style={styles.line} />
        </View>
      </View>
      <View style={styles.top2}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={number}
          onChangeText={text => setNumber(text)}
        />
        <Image source={images.line} style={styles.line} />
        {number?.length > 9 && (
          <View style={styles.checkImage}>
            <AntDesign name="checkcircle" color={colors.secondary} size={20} />
          </View>
        )}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>Sign Up/Login with Phone</Text>
        </View>
      </TouchableOpacity>
      <View>
        <View style={styles.textTop}>
          <Text style={styles.blackText}>other login methods</Text>
        </View>
        <View style={styles.row2}>
          <View>
            <TouchableOpacity>
              <Image source={images.twitter} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={images.instagram} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={images.apple} style={styles.appleIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
