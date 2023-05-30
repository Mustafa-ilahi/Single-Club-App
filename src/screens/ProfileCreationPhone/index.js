import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {RadioButton} from 'react-native-paper';
import {colors} from '../../services';
import CountryPicker from 'react-native-country-picker-modal';

export default function ProfileCreationPhone({navigation}) {
  const [checked, setChecked] = useState('Male');
  const [name, setName] = useState('Akshay Syal');
  const [countryCode, setCountryCode] = useState('IN');
  const [homeTown, setHomeTown] = useState('Delhi');
  const [dob, setDOB] = useState('12/04/2000');
  const [country, setCountry] = useState('');
  const [withCountryNameButton, setWithCountryNameButton] = useState(true);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(false);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);

  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country.name);
  };
  return (
    <SafeAreaView style={styles.paddingTop}>
      <Text style={styles.welcomeHead}>Welcome User</Text>
      <Text style={styles.text}>Improve the profile win more attention</Text>
      <View style={styles.top}>
        <TouchableOpacity>
          <Image source={images.profile} style={styles.profile} />
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.top]}>
        <View style={styles.row}>
          <RadioButton
            value="Male"
            status={checked === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Male')}
            color={colors.secondary}
          />
          <Text style={styles.label}>Male</Text>
        </View>
        <View style={[styles.row, styles.left]}>
          <RadioButton
            value="Female"
            status={checked === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Female')}
            color={colors.secondary}
          />
          <Text style={styles.label}>Female</Text>
        </View>
      </View>
      <View style={styles.top2}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
        <Image source={images.line} style={styles.line} />
      </View>
      <View style={styles.countryTop}>
        <Text style={styles.inputLabel}>Home Country</Text>
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
      <View style={styles.inputTop}>
        <Text style={styles.inputLabel}>Home Town</Text>
        <TextInput
          style={styles.input}
          value={homeTown}
          onChangeText={text => setHomeTown(text)}
        />
        <Image source={images.line} style={styles.line} />
      </View>
      <View style={styles.inputTop2}>
        <Text style={styles.inputLabel}>DOB</Text>
        <TextInput
          style={styles.input}
          value={dob}
          onChangeText={text => setDOB(text)}
        />
        <Image source={images.line} style={styles.line} />
      </View>
      <View style={styles.buttonTop}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TopTrending');
          }}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
