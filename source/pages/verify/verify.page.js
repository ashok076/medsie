import React from 'react';
import qs from 'qs';
import {SafeAreaView, View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {Toast} from 'native-base';

import BackHeader from '../../components/back-header/back-header.component';
import {verify} from '../../configure/api/api.configure';
import {Color} from '../../assets/color/color.assets';

import styles from './verify.style';

const VerifyPage = ({route: {params}, navigation}) => {
  const {email, password, name, mobile} = params;
  return (
    <SafeAreaView style={styles.container}>
        <BackHeader title="Back" navigation={navigation} />
      <View style={styles.innerContainer}>
        <Text style={styles.accountText}>
          An Email has been Sent to your Registered Email Address. Request you
          to please verify your Email
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            color={Color.primaryColor}
            onPress={() => reverify(email, password, name, mobile, navigation)}>
            Re-verify email
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const reverify = async (
  email,
  password,
  name = '',
  mobile = '',
  navigation,
) => {
  let data = qs.stringify({
    grant_type: 'password',
    username: email,
    password: password,
    ClientId: 4,
    FirstName: name,
    MobileNumber: mobile,
  });
  console.log('Data: ', data);
  await verify(data)
    .then((response) => {
      console.log('Res: ', response);
      showMessage(
        'An Email has been Sent to your Registered Email Address. Request you to please verify your Email',
      );
    })
    .catch((error) => {
      console.log('Verify email error: ', error.response.data.error);
      showMessage(error.response.data.error_description);
    });
};

showMessage = (message) => {
  if (message !== '' && message !== null && message !== undefined) {
    Toast.show({
      text: message,
      style: styles.toasttxt,
      duration: 10000,
    });
  }
};

export default VerifyPage;
