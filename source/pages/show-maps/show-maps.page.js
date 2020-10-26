import React, { Component } from "react";
import {View, Text} from "react-native";
import { Modalize } from 'react-native-modalize';

import Listing from '../../pages/listing/listing.page';
import Header from '../../components/header/header.component';

import styles from './show-maps.style'

class ShowMaps extends Component{
    constructor(){
        super()
    }

renderContent = () => (
<View>
    <View style={styles.content}>
      <Text style={styles.contentSubheading}>{'Introduction'.toUpperCase()}</Text>
      <Text style={styles.contentHeading}>Always open modal!</Text>
      <Text style={styles.contentDescription}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
      repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
      tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
      consequatur aut perferendis doloribus asperiores repellat. At vero eos et
      accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
      voluptatum deleniti atque corrupti quos dolores et quas molestias
      excepturi sint occaecati cupiditate non provident, similique sunt in culpa
      qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
      harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
      cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
      maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
      repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
      necessitatibus saepe eveniet ut et voluptates repudiandae sint et
      molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
      delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
      perferendis doloribus asperiores repellat.</Text>
    </View>
</View>
  );

    render(){
        return(
            <>
            <View>
                <Header/>
                <View style={{width: '100%', height: '100%', backgroundColor: '#add8e6'}}/>
            </View>
            <Modalize
                modalStyle={styles.contentModal}
                alwaysOpen={180}
                modalTopOffset={0}
                handlePosition="inside"
                modalStyle={styles.modalizeContent}
                handleStyle={styles.handle}
                rootStyle={styles.modalize}>
                    <Listing />
                </Modalize>
            </>
        )
    }
}

export default ShowMaps;