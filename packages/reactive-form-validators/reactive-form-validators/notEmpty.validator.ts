import {
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { RegexValidator } from "../util/regex-validator";
import { ObjectMaker } from "../util/object-maker";
import { AnnotationTypes } from "../core/validator.static";
import { BaseConfig } from "../models/config/base-config";
import { FormProvider } from '../util/form-provider';
import { ApplicationUtil } from '../util/app-util';
export function notEmptyValidator(config: BaseConfig): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    config = ApplicationUtil.getConfigObject(config);
    if (FormProvider.ProcessRule(control, config)) {
      if (!RegexValidator.isNotBlank(control.value,true)) {
        return ObjectMaker.toJson(AnnotationTypes.notEmpty, config, [])
      }
    }
    return ObjectMaker.null();
  }
}
