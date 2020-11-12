const  BASE_URL =  'http://medsie.ikaart.org/';

export const API = {
    LOGIN_API : BASE_URL + "//token",
    REGISTRATION_API : BASE_URL + "//token",
    REGISTER_STORE: BASE_URL + "api/Medsie/PostBusinessMasterData",
    CATEGORY_STORE: BASE_URL + "api/Medsie/GetcategoryMasterData",
    ACCOUNT_SETTING: BASE_URL + "api/Medsie/GetProfileData",
    HOME_PAGE: BASE_URL + "api/Medsie/GetHomeDetails",
    GET_BUSINESS_DETAILS: BASE_URL + "api/Medsie/GetBusinessMasterData",
    UPDATE_USER_DETAILS: BASE_URL + "api/Medsie/PostUserMasterData",
    CHECK_SERVER: BASE_URL + "api/Medsie/CheckServer"
}