import {
  ValidatorFn,
  AbstractControl
} from "@angular/forms";

import { RegexValidator } from "../util/regex-validator";
import { RegExRule } from "../util/regex-rules";
import { ObjectMaker } from "../util/object-maker";
import { BaseConfig } from "../models/config/base-config";
import { AnnotationTypes } from "../core/validator.static";
import { ValidatorValueChecker } from "../util/validator-value-checker";
import { ApplicationUtil } from "../util/app-util";
export function latitudeValidator(config: BaseConfig): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    config = ApplicationUtil.getConfigObject(config);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!RegexValidator.isValid(control.value, RegExRule.lat))
        return ObjectMaker.toJson(AnnotationTypes.latitude, config, [control.value]);
    }
    return ObjectMaker.null();
  }
}
