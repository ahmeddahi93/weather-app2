import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url='https://api.openweathermap.org/data/2.5/weather';
  apikey='841c245dcb85eca616880b80e897c00d';
  constructor(private http:HttpClient) { }


getWeatherDataByCoords(lat,lon){
  let params= new HttpParams()
  .set('lat',lat)
  .set('lon',lon)
  .set('units','imperial')
  .set('appid',this.apikey)
  return this.http.get(this.url,{params});
}

getWeatherDataByCityName(city :string){
  let params= new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set('appid',this.apikey)
  return this.http.get(this.url,{params});
}
}