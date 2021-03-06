import { AbstractControl } from "@angular/forms";
import { ApplicationUtil } from "./app-util";
import { FormProvider } from "./form-provider";
import { RegexValidator } from "./regex-validator";
import { AnnotationTypes } from "../core/validator.static";
import { ObjectMaker } from "./object-maker";

export function relationalCheck(control:AbstractControl,config:any,relationalOperatorName:string){
    config = ApplicationUtil.getConfigObject(config);
    const matchControl = ApplicationUtil.getFormControl(config.fieldName,control);
    const matchControlValue = (matchControl) ? matchControl.value : '';
    if (FormProvider.ProcessRule(control,config)) {
        if (RegexValidator.isNotBlank(control.value) && RegexValidator.isNotBlank(matchControlValue)) {
            let isValid = false;
            switch(relationalOperatorName){
                case AnnotationTypes.greaterThan:
                isValid = parseFloat(control.value) > parseFloat(matchControlValue);
                break;
                case AnnotationTypes.lessThan:
                isValid = parseFloat(control.value) < parseFloat(matchControlValue)
                break;
                case AnnotationTypes.greaterThanEqualTo:
                isValid = parseFloat(control.value) >= parseFloat(matchControlValue)
                break;
                case AnnotationTypes.lessThanEqualTo:
                isValid = parseFloat(control.value) <= parseFloat(matchControlValue)
                break;
            }
            if(!isValid)
                return ObjectMaker.toJson(relationalOperatorName, config, [control.value, matchControlValue]);
        }
    }
    return ObjectMaker.null();
}