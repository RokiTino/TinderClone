import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CameraIcon } from "react-native-heroicons/outline";
import { profileData } from "../content/index";

const ProfileScreen = () => {
  const data = profileData[0];

  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen
