import { fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgForm } from "@angular/forms"

import { AlphaValidationComponent, AddressInfo } from "./alpha-template-driven.components"
import { specTester } from "../spec-tester"
import { createInstance } from "../component-provider"


describe('template-driven forms integration tests', () => {



    describe('basic functionality', () => {
        
        it('should not error alpha with blank value', fakeAsync(() => {
            const fixture = createInstance(AlphaValidationComponent);
            expect(specTester(fixture, { countryName: '' }, 'alpha')).toBe(false);
            expect(specTester(fixture, { countryName: undefined }, 'alpha')).toBe(false);
            expect(specTester(fixture, { countryName: 'John' }, 'alpha')).toBe(false);
            expect(specTester(fixture, { countryName: null }, 'alpha')).toBe(false);
            expect(specTester(fixture, { countryName: 'John1' }, 'alpha')).toBe(true);
            expect(specTester(fixture, { countryName: 'John1@' }, 'alpha')).toBe(true);
        
        }));

//end        
    })

})
