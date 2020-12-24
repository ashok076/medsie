import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

import {registerStore} from '../../configure/api/api.configure';

const ClaimBusiness = ({access_token, item}) => (
  <View>
    {item.Buss_IsApprove_bit ? (
      <Button onPress={() => claimBusiness(item, access_token)}>
        Claim this business
      </Button>
    ) : null}
  </View>
);

const claimBusiness = async (item, access_token) => {
    console.log("Access Token: ", access_token)
  let data = JSON.stringify({
    Buss_PkId: item.Buss_PkId,
    Buss_IsApprove: 2,
    Type: 6,
  });
  await registerStore(data, access_token)
    .then((response) => console.log('Response: ', response))
    .catch((error) => console.log('Claim Business error: ', error));
};

export default ClaimBusiness;
