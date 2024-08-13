import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {
  countries: any[] = [];
  selectedCountry1: string;
  selectedCountry2: string;
  scoreData: any;

  constructor(private http: HttpClient) {
    this.selectedCountry1 = '';
    this.selectedCountry2 = '';
  }

  ngOnInit() {
    this.http.get<any[]>('/assets/world-cup-data.json').subscribe((data) => {
      this.countries = data;
    });
  }

  getCountryEmoji(countryName: string): string {
    const country = this.countries.find(c => c.name === countryName);
    return country ? country.emoji : '';
  }

  getScore() {
    this.http.get<any>('/assets/score-data.json').subscribe((data) => {
      this.scoreData = data;
    });
  }
}
