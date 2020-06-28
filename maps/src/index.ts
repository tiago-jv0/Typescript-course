import User from './User';
import Company from './Company';
import CustomMap from './CustomMap';


const company: Company = new Company(); 


const map = new CustomMap('map');

map.addMarker(company)