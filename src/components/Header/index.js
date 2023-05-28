import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../services';

export default function Header({title}) {
  const navigation = useNavigation();

  return (
    <View>
    <View style={[styles.headerView,styles.row]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color={colors.black} size={25} />
        </TouchableOpacity>
        <Text style={[styles.title]}>{title}</Text>
      </View>
    </View>
  );
}
