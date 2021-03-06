import { QuizService } from './quiz.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ergastURL, raceResultsURL } from '../../utils/constants';
import { winQuestion } from '../../utils/constants';


@Injectable()
export class WinnerQuizService extends QuizService {

  constructor(http: Http) { super(http, winQuestion); }

  protected getApiResults(year: number, finishingPosition: number): any {
    return this.sendApiRequest(ergastURL + year + raceResultsURL + finishingPosition + '.json');
  }

  protected getDriverName(raceResults: any): string {
    const driver = raceResults.Results[0].Driver;
    return `${driver.givenName} ${driver.familyName}`;
  }
}
