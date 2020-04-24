import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NumberNoZerosPipe } from "./numberNoZeros.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [NumberNoZerosPipe],
  exports: [NumberNoZerosPipe]
})
export class PipeModule {}
