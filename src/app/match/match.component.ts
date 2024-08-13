import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  countries: any[] = [];
  team1Emoji: string = "";
  team2Emoji: string = "";
  selectedCountry1: string = ''; // Initialized to an empty string
  selectedCountry2: string = ''; // Initialized to an empty string
  scoreData: any;
  displayBlock = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<any[]>('assets/world-cup-data.json').subscribe((data) => {
      this.countries = data;
    });
  }

  getCountryEmoji(countryName: string) {
    let foundCountry = this.countries.find(country => country.name === countryName);
    return foundCountry ? foundCountry.image : ''; // Use image URL instead of emoji
  }

  getScore() {
    this.http.get<any>('assets/score-data.json').subscribe((data) => {
      this.scoreData = data;
    });
  }

  toggleDisplay() {
    if (this.countries.length === 0) {
      this.http.get<any[]>('assets/world-cup-data.json').subscribe((data) => {
        this.countries = data;

        // Update team emojis
        this.updateEmojis();
      });
    } else {
      // Update team emojis
      this.updateEmojis();
    }
  }

  updateEmojis() {
    this.displayBlock = !this.displayBlock;

    this.team1Emoji = this.getCountryEmoji(this.selectedCountry1);
    this.team2Emoji = this.getCountryEmoji(this.selectedCountry2);
    console.log('Selected countries:', this.selectedCountry1, this.selectedCountry2);

  }
}
