//Instructions to every other class
//on how they can be an argument to addMarker
export interface Marker {
    name : string,
    location : {
        lat : number,
        lng : number
    }
    markerContent(): string
}

export default class CustomMap {
    private googleMap : google.maps.Map;

    constructor(elementId: string){
        this.googleMap = new google.maps.Map(document.getElementById(elementId) , {
            center : {
                lat: 0,
                lng :0
            },
            zoom : 1
        });
    }


    public addMarker(target : Marker) : void {

        const infoWindow = new google.maps.InfoWindow({
            content : target.markerContent()
        })

        const marker = new google.maps.Marker({
            map: this.googleMap,
            title: target.name,
            position: {
                lat:target.location.lat,
                lng: target.location.lng
            }
        })

        marker.addListener('click' , () => {
            infoWindow.open(this.googleMap , marker)
        })
    }
}