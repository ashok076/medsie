import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, Text, TouchableOpacity, Platform, Image} from 'react-native';
import { Toast } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import qs from 'qs';
import ImagePicker from 'react-native-image-crop-picker';

import Header from '../../components/header/header.component';
import BackHeader from '../../components/back-header/back-header.component'
import InputText from '../../components/input-text/input-text.component';
import MultilineInput from '../../components/multiline-input/multiline-input.component';
import Button from '../../components/button/button.component';
import NoBackgroundButton from '../../components/no-background-button/no-background-button.component';
import ModalPicker from '../../components/modal-picker/modal-picker.component'
import ModalList from '../../components/modal-list/modal-list.component';
import Loader from '../../components/loader/loader.component';
import {registerStore, categoryStore, registerStoreImage, getBusinessData} from '../../configure/api/api.configure';
import {selling_type, week_days, week_ends} from './edit-store.list';

import styles from './edit-store.style';

class EditStore extends Component {
    initialState = {
            storeName: '',
            storeNumber: '',
            storeAddress: '',
            description: '',
            businessCategory: '',
            sellingType: '',
            isPickerVisible: false,
            mode: '',
            fromWeekD: '10:00 AM',
            toWeekD: '10:00 PM',
            fromWeekE: '10:00 AM',
            toWeekE: '10:00 PM',
            key: '',
            modal: '',
            array: [],
            catArray: [],
            access_token: '',
            isLoader: false,
            base64: '',
            fileName: 'image',
            imagePath: '',
            catId: 0,
            sellId: 0,
            buspkid: 0
    }
    constructor(){
        super()
        this.state = {
            ...this.initialState
        }
    }

  componentDidMount() {
    const {navigation, route} = this.props;
    navigation.addListener('focus', () => {
      this.getAccessToken();
      this.setState(this.initialState)
    });
  }

  getAccessToken = async () => {
      let access_token = ''
      try {
        access_token = await AsyncStorage.getItem('access_token')
        this.setState({ access_token }, () => this.getCategory())
    } catch (error) {
        console.log(error)
    }
  }

  getCategory = async () => {
      const {access_token} = this.state
      console.log("Access Token: ", access_token)
      await categoryStore(JSON.parse(access_token))
        .then(response => {
            console.log("Cat Res: ", response)
            let arr = [];
            response[0].map(val => 
                arr.push({
                    id: val.Cat_PkId,
                    type: val.Cat_Name
                })
            )
            this.setState({ catArray: arr }, () => this.getBusinessData())
            })
        .catch(error => console.log("Error: ", error))
  }

    getBusinessData = async() => {
        const {data} = this.props.route.params;
        let apidata = JSON.stringify({
            Type: 3,
            Buss_PkId: data.Buss_PkId
        })
        await getBusinessData(apidata)
        .then(response => this.getData(response[0][0]))
    }

  getData = async (data) => {
      console.log("Data: ", data)
      this.setState({
          storeName: data.Buss_Name,
          storeNumber: data.Buss_Number,
          storeAddress: data.Buss_Address,
          description: data.Buss_Description,
          imagePath: data.Buss_Image_Path ? data.Buss_Image_Path : '',
          catId: data.Buss_CatId ? data.Buss_CatId : 0,
          sellId: data.Buss_SellType ? data.Buss_SellType : 0,
          buspkid: data.Buss_PkId
      }, () => this.category())
  }

  category = () => {
      const {catArray} = this.state;
      catArray
      .filter((item) => item.id === this.state.catId)
      .map((val) => this.setState({businessCategory: val.type}));

      selling_type
      .filter((item) => item.id === this.state.sellId)
      .map((val) => this.setState({sellingType: val.type}));
  }

submit = async () => {
    const {storeName, storeNumber, storeAddress, buspkid, description, fromWeekD, toWeekD, access_token, base64, fileName, catId, sellId} = this.state;
    this.setState({ isLoader: true, isPickerVisible: false })
    console.log("Id: ", catId)
    let arr = [];
    week_days.map(day => {
        arr.push({
        BHT_Weekdays: day,
        BHT_FromTime: fromWeekD,
        BHT_ToTime: toWeekD,
        BHT_CustomDate: ''
        })
    })
    if (catId !== 0){
        if (base64.length === 0){
        let data = JSON.stringify({
        Type: 2,
        Buss_Name: storeName,
        Buss_Number: storeNumber,
        Buss_Address: storeAddress,
        Buss_Description: description,
        BusinessHoursTransMaster_DTO: JSON.stringify(arr),
        Buss_City: '',
        Buss_Country: '',
        Buss_Zip: '',
        Buss_UserId: '',
        Buss_Image_Path: '',
        Buss_CatId: catId,
        Buss_TypeOfBuss: '',
        Buss_SellType: sellId,
        Buss_Lat: '',
        Buss_Long: '',
        UserID: '',
        Buss_PkId: buspkid
    })
    console.log("Data: ", data);
    await registerStore(data, JSON.parse(access_token))
        .then(response => {
            console.log("Res: ", response)
            this.setState({ isLoader: false })
            this.showMessage("Your store is successfully registered")
            })
        .catch(error => console.log("Error: ", error))
    }else {
        let data = JSON.stringify({
        Type: 2,
        Buss_Name: storeName,
        Buss_Number: storeNumber,
        Buss_Address: storeAddress,
        Buss_Description: description,
        BusinessHoursTransMaster_DTO: JSON.stringify(arr),
        Buss_City: '',
        Buss_Country: '',
        Buss_Zip: '',
        Buss_UserId: '',
        Buss_Image_Path: '',
        Buss_CatId: catId,
        Buss_TypeOfBuss: '',
        Buss_SellType: sellId,
        Buss_Lat: '',
        Buss_Long: '',
        ContentType  : 1,
        IPLNO : 'Images',
        Image: "data:image/png;base64, " + base64,
        Client_Result_Photo_FileName: fileName,
        Buss_PkId: buspkid
    })
    console.log("Data: ", data);
    await registerStoreImage(data, JSON.parse(access_token))
        .then(response => {
            console.log("Res: ", response)
            this.setState({ isLoader: false })
            this.showMessage("Your store is successfully registered")
            })
        .catch(error => {
            console.log("Error: ", error)
            this.setState({ isLoader: false })
        })
    }
    } else {
        this.showMessage('Category is an mandtory field')
        this.setState({ isLoader: false })
    }
}

showMessage = (message) => {
    Toast.show({
        text: message,
        style: styles.toasttxt
    })
}

onDateTimeChange = (selectedDate) => {
    console.log("Event: ", selectedDate)
    let dateTime = format(selectedDate, "hh:mm a");
    const {key} = this.state;
    this.setState({ [key]: dateTime })
    this.setState({ isPickerVisible: false })
}

  changeModalVisibility = (bool) => {
    this.setState({modal: bool});
  };

  changeState = (key, value) => {
    this.setState({[key]: value});
  };

storeHours = () => (
    <View>
        <View style={styles.row}>
            <Text style={styles.text}> Store Hours </Text>
            <Text style={styles.underline}> Add custom dates </Text>
        </View>
    </View>
)

weekdays = () => (
    <View>
        <View style={styles.row}>
            <Text style={styles.text}> Weekdays </Text>
            <View style={styles.rowD}>
                <NoBackgroundButton title={this.state.fromWeekD} onPress={() => this.setState({ isPickerVisible: true, mode: 'time', key: 'fromWeekD' })}/>
                <Text> to </Text>
                <NoBackgroundButton title={this.state.toWeekD} onPress={() => this.setState({ isPickerVisible: true, mode: 'time', key: 'toWeekD' })}/>
            </View>
        </View>
    </View>
)

weekends = () => (
    <View>
        <View style={styles.row}>
            <Text style={styles.text}> Weekends </Text>
            <View style={styles.rowD}>
                <NoBackgroundButton title={this.state.fromWeekE} onPress={() => this.setState({ isPickerVisible: true, mode: 'time', key: 'fromWeekE' })}/>
                <Text> to </Text>
                <NoBackgroundButton title={this.state.toWeekE} onPress={() => this.setState({ isPickerVisible: true, mode: 'time', key: 'toWeekE' })}/>
            </View>
        </View>
    </View>
)

uploadImage = () => (
    <View>
        {this.state.imagePath.length === 0 ? (
            <TouchableOpacity style={styles.uploadImageView} onPress={() => this.pickImage()}>
        <Icon name="upload" size={30}/>
        <Text style={styles.uploadImageTxt}> Upload an Image </Text>
    </TouchableOpacity>
        ): (
            <Image source = {{uri: this.state.imagePath}} style = {styles.imageView}/>
        )}
    </View>
)

pickImage = () => {
    ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: false,
    includeBase64: true
    }).then(images => {
        this.setState({ base64: images.data, fileName: Platform.OS === 'ios' ? images.filename : 'images' + new Date(), imagePath: images.path })
    }).catch(error => {
        console.log("Image Picker Error: ", error)
    })
}

dateTimePicker = () => (
    <View>
        {this.state.isPickerVisible && <DateTimePickerModal
            isVisible={this.state.isPickerVisible !== null}
            mode={this.state.mode}
            onConfirm={this.onDateTimeChange}
            onCancel={ () => this.setState({ isPickerVisible: false }) }
        />}
    </View>
)

    render(){
        const {navigation, route} = this.props;
        const {showDrawer} = route.params;
        const {storeName, storeNumber, storeAddress, description, modal, array, businessCategory, sellingType, key, catArray, isLoader, pkid} = this.state;
        console.log("Sell: ", catArray)
        return (
            <SafeAreaView style={styles.contain}>
                <ScrollView>
                    <View style={styles.container}>
                    <View style={styles.back}>
                        <BackHeader title="Back" navigation={navigation}/>
                    </View>
                    <View style={styles.bodycontainer}>
                    <Text style={styles.title}> Edit your store </Text>
                        {this.uploadImage()}
                        <View style={styles.inputContainer}>
                        <InputText 
                            placeHolder="Enter store name"
                            value={storeName}
                            keyboardType="default"
                            onChangeText={(storeName) => this.setState({ storeName })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Enter store number"
                            keyboardType="number-pad"
                            value={storeNumber}
                            onChangeText={(storeNumber) => this.setState({ storeNumber })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <ModalPicker
                            placeHolder="Enter business category"
                            onPress={() => this.setState({ modal: true, array: catArray, key: 'businessCategory', pkid: 'catId' })}
                            value={businessCategory}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <ModalPicker
                            placeHolder="Enter selling type"
                            onPress={() => this.setState({ modal: true, array: selling_type, key: 'sellingType', pkid: 'sellId' })}
                            value={sellingType}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputText
                            placeHolder="Enter store address"
                            keyboardType="default"
                            value={storeAddress}
                            onChangeText={(storeAddress) => this.setState({ storeAddress })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <MultilineInput
                            placeHolder="Add Introduction"
                            message="Not more than 500 words"
                            value={description}
                            keyboardType="default"
                            onChangeText={(description) => this.setState({ description }, () => console.log("Inro: ", description))}
                        />
                    </View>
                    {this.storeHours()}
                    {this.weekdays()}
                    {this.weekends()}
                    {this.dateTimePicker()}
                    <View style={styles.buttonContainer}>
                        <Button title="Submit" onPress={() => this.submit()}/>
                    </View>
                    </View>
                    <ModalList
                        isModalVisible={modal}
                        list={array}
                        changeModalVisibility={this.changeModalVisibility}
                        changeState={this.changeState}
                        id={key}
                        pkid={pkid}
                    />
                    <Loader isLoader={isLoader}/>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default EditStore