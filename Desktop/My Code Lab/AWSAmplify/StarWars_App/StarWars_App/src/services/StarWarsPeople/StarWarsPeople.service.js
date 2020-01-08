import Config from 'react-native-config';
// import axios from 'axios';

export const StarWarsPeopleRequest = async () => {
    var xmlHttp = new XMLHttpRequest();
    await xmlHttp.open( "GET", 'https://swapi.co/api/people/', false );
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText)
};
