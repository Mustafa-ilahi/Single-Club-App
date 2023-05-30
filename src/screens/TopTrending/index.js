import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, sizes} from '../../services';

export default function TopTrending() {
  const [allUsers, setAllUsers] = useState([
    {name: 'Gina Rodriquez', profile: images.p1, users: '00458547'},
    {name: 'Javier Robertson', profile: images.p2, users: '00458547'},
    {name: 'Scarlett', profile: images.p3, users: '00458547'},
    {name: 'Mary Reid', profile: images.p4, users: '00458547'},
    {name: 'Ryan Horton', profile: images.p5, users: '00458547'},
    {name: 'Jeanette King', profile: images.p6, users: '00458547'},
    {name: 'Nicole', profile: images.p7, users: '00458547'},
    {name: 'Moreno', profile: images.p8, users: '00458547'},
    {name: 'Bryan Gibson', profile: images.p9, users: '00458547'},
    {name: 'Ryan Horton', profile: images.p10, users: '00458547'},
    {name: 'Nicole', profile: images.p11, users: '00458547'},
    {name: 'Mary Reid', profile: images.p12, users: '00458547'},
  ]);
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <Text style={styles.heading}>Top Trending Broadcasters</Text>
        <TouchableOpacity>
          <Text style={styles.skipText}>
            Skip <Image source={images.rightArrow} style={styles.rightArrow} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingBottom: sizes.screenHeight * 0.015}}></View>
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {allUsers?.map((item, index) => {
            return (
              <View style={styles.profileCard} key={index}>
                <TouchableOpacity>
                  <Image source={item.profile} style={styles.profileImg} />
                  <View style={styles.checkImage}>
                    <Image
                      source={images.checkIcon}
                      style={styles.checkImage}
                    />
                    <View style={styles.levelView}>
                      <Image
                        source={images.levelIcon}
                        style={styles.levelIcon}
                      />
                    </View>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                  <View style={[styles.top, styles.userRow]}>
                    <Image source={images.user_normal} />
                    <Text style={styles.userText}>{item.users}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={[styles.paddingBottom,styles.absolute]}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Done</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.paddingBottom2}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
