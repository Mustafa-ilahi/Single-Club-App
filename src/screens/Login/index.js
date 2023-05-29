import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import Header from '../../components/Header';

export default function Login({navigation}) {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#eff6f4'}}>
        <ImageBackground
          source={images.bg}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.container}>
            <Image source={images.logo} style={styles.logo} />
            <View style={styles.top}>
              <View>
                <TouchableOpacity onPress={()=>navigation.navigate("ProfileCreationFB")}>
                  <View style={styles.button}>
                    <Image source={images.fbIcon} style={styles.fbIcon} />
                    <Text style={styles.btnText}>Facebook</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.marginTop}>
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Image
                      source={images.googleIcon}
                      style={styles.googleIcon}
                    />
                    <Text style={styles.btnText}>Google</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.marginTop}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PhoneLogin')}>
                  <View style={styles.button}>
                    <Image source={images.phoneIcon} style={styles.phoneIcon} />
                    <Text style={styles.btnText}>Phone</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.row}>
              <Image source={images.line} />
              <Text style={styles.orText}>or</Text>
              <Image source={images.line} />
            </View>
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
          <View style={styles.contentView}>
            <Text style={styles.content}>
              Login means you agree to Terms of Use, Privacy Policy Powered by
              Yeah!live
            </Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
