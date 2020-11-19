import Realm from 'realm';
import {SCHEMA} from './type.configure';

export const homeDetails = {
    name: SCHEMA.HOME_SCHEMA,
    properties: {
        Cat_PkId: "int?",
        Cat_Name: "string?",
        Type: "int?",
        UserID: "int?",
        BusinessMaster_Home: {
            type: 'list',
          objectType: SCHEMA.BUSINESS_MASTER_HOME
        }
    }
}

export const businessHomeDetails = {
    name: SCHEMA.BUSINESS_MASTER_HOME,
    properties: {
        Buss_PkId: "int?",
        Buss_Name: "string?",
        Buss_Number: "string?",
        Buss_Address: "string?",
        Buss_City: "string?",
        Buss_Country: "string?",
        Buss_Zip: "string?",
        Buss_Description: "string?",
        Distance: 'int?',
        Buss_Image_Path: "string?",
        Buss_CatId: 'int?',
        Cat_Name: "string?",
        Buss_Lat: "string?",
        Buss_Long: "string?",
    }
}

const databaseOptions = {
  path: "Medsie.realm",
  schema: [
    homeDetails,
    businessHomeDetails,
  ],
  schemaVersion: 0,
};

export const InsertHomeDetails = (data) =>
  new Promise((resolve, reject) => {
      let obj = data;
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
         obj.forEach((obj) => {
          realm.create(SCHEMA.HOME_SCHEMA, obj);
          });
        });
          resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });

  export const queryHomeDetails = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let allIncidents = realm.objects(SCHEMA.HOME_SCHEMA);
        console.log(JSON.parse(JSON.stringify("Details inc: ", allIncidents)))
        resolve([JSON.parse(JSON.stringify(allIncidents))]);
      })
      .catch((error) => {
        reject(error);
      });
  });

  export default new Realm(databaseOptions);