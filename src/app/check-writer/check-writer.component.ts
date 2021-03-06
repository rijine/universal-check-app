import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CheckWriterService } from './check-writer.service';

@Component({
  selector: 'app-check-writer',
  templateUrl: './check-writer.component.html',
  styleUrls: ['./check-writer.component.less'],
  providers: [ CheckWriterService ]
})

export class CheckWriterComponent {
  public amount: String = '';
  public output: String = '';

  constructor(private checkWriterService: CheckWriterService, @Inject(PLATFORM_ID) public platformId: string) {
    console.log(platformId);
  }

  convertToCheck(isValid: boolean): void {
    if (isValid) {
      this.output = this.checkWriterService.writeCheck(this.amount);
    } else { // just in case form doesn't validate
      this.output = 'Please enter a valid monetary amount!';
    }
  }
}
