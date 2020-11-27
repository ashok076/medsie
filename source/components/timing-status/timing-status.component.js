import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {Title, Text} from 'react-native-paper';
import moment from 'moment';
import 'moment-timezone';

import styles from './timing-status.style';

class TimingStatus  extends Component {
    constructor(){
        super();
        this.state = {
            status: ''
        }
    }

    componentDidMount() {
        const {item} = this.props;
        // this.setState({ status: this.getStatus(item) })
        let timezone = new Date().getTimezoneOffset() / 60
        console.log(new Date().toTimeString().slice(9));
        console.log(new Date().getTimezoneOffset() / -60);      
  }

  getTimeZone() {
    var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}

  renderTime = (item) => (
    <View style={[styles.row, styles.viewMargin]}>
        <View style={styles.rowContainer}>
            <Text style={styles.days}>{item.item.BHT_Weekdays}</Text>
        </View>
        <View style={styles.rowContainer}>
            <Text style={styles.time}>{item.item.BHT_FromTime} - {item.item.BHT_ToTime}</Text>
        </View>
    </View>
)

getStatus = (item) => {
    let zone = new Date().getTimezoneOffset() / 60;
    let time = new Date().getDay();
    let day = time === 6 ? 0 : time + 1;
    console.log("IT: ", item)
    if (Object.keys(item).length !== 0){
        return this.isOpen(item.businessHoursTransMaster_DTOs[day].BHT_FromTime, item.businessHoursTransMaster_DTOs[day].BHT_ToTime, zone);
    }
    return;
}

isOpen = (openTime, closeTime, timezone) => {

  // handle special case
  if (openTime === "24HR") {
    return "open";
  }

  // get the current date and time in the given time zone
  const now = moment.tz(timezone);

  // Get the exact open and close times on that date in the given time zone
  const date = now.format("YYYY-MM-DD");
  const storeOpenTime = moment.tz(date + ' ' + openTime, "YYYY-MM-DD h:mmA", timezone);
  const storeCloseTime = moment.tz(date + ' ' + closeTime, "YYYY-MM-DD h:mmA", timezone);
  console.log("timezone: ", storeOpenTime)

  let check;
  if (storeCloseTime.isBefore(storeOpenTime)) {
    // Handle ranges that span over midnight
    check = now.isAfter(storeOpenTime) || now.isBefore(storeCloseTime);
  } else {
    // Normal range check using an inclusive start time and exclusive end time
    check = now.isBetween(storeOpenTime, storeCloseTime, null, '[)');
  }

  return check ? "open" : "closed";
}

    render(){
        const {item} = this.props;
        const {status} = this.state;
        return (
            <View style={styles.container}>
            <Title style={styles.close}> {status} </Title>
                <View>
                    <FlatList
                        data={item.businessHoursTransMaster_DTOs}
                        renderItem={(i) => this.renderTime(i)}
                        />
                </View>
            </View>
        )
    }
}

export default TimingStatus