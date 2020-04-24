import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nNz"
})
export class NumberNoZerosPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    const isDebug = args && args === "debug" ? true : false;
    if (value && !isNumeric(value)) {
      throw new Error(`Invalid Value "${value}" for Number No Zeros pipe`);
    }
    let result = value * 1;

    if (isDebug) {
      console.log("Debug Mode");
      console.log(result);
    }
    return result;
  }
}

function isNumeric(val: any): boolean {
  return !(val instanceof Array) && val - parseFloat(val) + 1 >= 0;
}
