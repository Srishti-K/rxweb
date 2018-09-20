import { defaultContainer } from '../core/defaultContainer';
import { DecoratorConfiguration } from '../core/validator.interface';
import { DecoratorName } from "../util/decorator-name";
import { NumberConfig } from "../models/config/number-config";
import { AnnotationTypes } from "../core/validator.static";
export function minLength(config:NumberConfig) {
    return function (
        target: Object,
        propertyKey: string, parameterIndex?: any
    ) {
        var decoratorConfiguration: DecoratorConfiguration = {
            propertyIndex: parameterIndex,
            propertyName: propertyKey,
            annotationType: AnnotationTypes.minLength,
            config:config
        }
        let isPropertyKey = (propertyKey != undefined);
        defaultContainer.addAnnotation(!isPropertyKey ? target : target.constructor, decoratorConfiguration);
    }
}
