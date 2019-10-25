import { FormControl } from '@angular/forms';

export class QuizzValidators {

  static maxLength(max: number) {
    return (c: FormControl) => {

      return c.value.length <= max ? null : {
        validateMaxLength: {
          valid: false
        }
      };
    };
  }

}
