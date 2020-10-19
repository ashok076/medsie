import React from 'react';

import DeliveriesHome from "../../assets/svg-files/deliveries-home.svg";
import DoctorHome from "../../assets/svg-files/doctor-home.svg";
import EventsHome from "../../assets/svg-files/events-home.svg";
import MedicalHome from "../../assets/svg-files/medical-shops-home.svg";
import ShopHome from "../../assets/svg-files/shops-home.svg";

export const categories = [
    {id: 1, icon: <ShopHome height={60} width={60}/>},
    {id: 2, icon: <MedicalHome height={60} width={60}/>},
    {id: 3, icon: <DeliveriesHome height={60} width={60}/>},
    {id: 4, icon: <DoctorHome height={60} width={60}/>},
    {id: 5, icon: <EventsHome height={60} width={60}/>},
]