import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export namespace ValidatorUtil {
    export function arrayMinLengthValidator(min: number): ValidatorFn {
        let a: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!a) {
                a = <FormControl>control;
            }

            if (a.value.length < min) {
                return {
                    arrayminlength: min,
                };
            }

            return null;
        };
    }

    export function dateAfterValidator(matchWith: string): ValidatorFn {
        let a: FormControl;
        let b: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.parent) {
                return null;
            }

            if (!a) {
                a = <FormControl>control;
                b = <FormControl>control.parent.get(matchWith);

                if (!b) {
                    throw new Error('dateAfterValidator(): other control is not found in parent group');
                }

                b.valueChanges.subscribe(() => {
                    a.updateValueAndValidity();
                });
            }

            if (!b) {
                return null;
            }

            const firstDate = new Date(a.value);
            const secondDate = new Date(b.value);

            const dateResponse = new Date(firstDate);

            if (secondDate.getTime() < firstDate.getTime()) {
                return {
                    dateafter: dateResponse,
                };
            }

            return null;
        };
    }

    export function dateBeforeValidator(matchWith: string): ValidatorFn {
        let a: FormControl;
        let b: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.parent) {
                return null;
            }

            if (!a) {
                a = <FormControl>control;
                b = <FormControl>control.parent.get(matchWith);

                if (!b) {
                    throw new Error('dateBeforeValidator(): other control is not found in parent group');
                }

                b.valueChanges.subscribe(() => {
                    a.updateValueAndValidity();
                });
            }

            if (!b) {
                return null;
            }

            const firstDate = new Date(a.value);
            const secondDate = new Date(b.value);

            const dateResponse = new Date(secondDate);

            if (firstDate.getTime() > secondDate.getTime()) {
                return {
                    datebefore: dateResponse,
                };
            }

            return null;
        };
    }

    export function dateMaxValidator(date?: Date): ValidatorFn {
        let a: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!a) {
                a = <FormControl>control;
            }

            if (!date) {
                date = new Date();
                date.setDate(date.getDate() - 1);
            }

            const dateResponse = new Date(date);

            if (a.value > date) {
                return {
                    datemax: dateResponse,
                };
            }

            return null;
        };
    }

    export function dateMinValidator(date?: Date): ValidatorFn {
        let a: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!a) {
                a = <FormControl>control;
            }

            if (!date) {
                date = new Date();
                date.setDate(date.getDate() - 1);
            }

            const dateResponse = new Date(date);

            if (a.value < date) {
                return {
                    datemin: dateResponse,
                };
            }

            return null;
        };
    }

    export function lessWithValidator(lessWith: string): ValidatorFn {
        let a: FormControl;
        let b: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.parent) {
                return null;
            }

            if (!a) {
                a = <FormControl>control;
                b = <FormControl>control.parent.get(lessWith);

                if (!b) {
                    throw new Error('lessWithValidator(): other control is not found in parent group');
                }

                b.valueChanges.subscribe(() => {
                    a.updateValueAndValidity();
                });
            }

            if (!b) {
                return null;
            }

            if (b.value < a.value) {
                return {
                    lesswith: b.value,
                };
            }

            return null;
        };
    }

    export function moreWithValidator(moreWith: string): ValidatorFn {
        let a: FormControl;
        let b: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.parent) {
                return null;
            }

            if (!a) {
                a = <FormControl>control;
                b = <FormControl>control.parent.get(moreWith);

                if (!b) {
                    throw new Error('moreWithValidator(): other control is not found in parent group');
                }

                b.valueChanges.subscribe(() => {
                    a.updateValueAndValidity();
                });
            }

            if (!b) {
                return null;
            }

            if (b.value > a.value) {
                return {
                    morewith: b.value,
                };
            }

            return null;
        };
    }

    export function matchValidator(matchWith: string): ValidatorFn {
        let a: FormControl;
        let b: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.parent) {
                return null;
            }

            if (!a) {
                a = <FormControl>control;
                b = <FormControl>control.parent.get(matchWith);

                if (!b) {
                    throw new Error('matchValidator(): other control is not found in parent group');
                }

                b.valueChanges.subscribe(() => {
                    a.updateValueAndValidity();
                });
            }

            if (!b) {
                return null;
            }

            if (b.value !== a.value) {
                return {
                    match: true,
                };
            }

            return null;
        };
    }

    export function notMatchValidator(notMatchWith: string): ValidatorFn {
        let a: FormControl;
        let b: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.parent) {
                return null;
            }

            if (!a) {
                a = <FormControl>control;
                b = <FormControl>control.parent.get(notMatchWith);

                if (!b) {
                    throw new Error('notMatchValidator(): other control is not found in parent group');
                }

                b.valueChanges.subscribe(() => {
                    a.updateValueAndValidity();
                });
            }

            if (!b) {
                return null;
            }

            if (b.value !== a.value) {
                return null;
            }

            return {
                notMatch: true,
            };
        };
    }

    export function requiredIf(relatedControl: string): ValidatorFn {
        let a: FormControl;
        let b: FormControl;

        return (control: AbstractControl): { [key: string]: any } | null => {
            if (!control.parent) {
                return null;
            }

            if (!a) {
                a = <FormControl>control;
                b = <FormControl>control.parent.get(relatedControl);

                if (!b) {
                    throw new Error('requiredIfValidator(): other control is not found in parent group');
                }

                b.valueChanges.subscribe(() => {
                    a.updateValueAndValidity();
                });
            }

            if (a.value == null && b.value != null) {
                return {
                    requiredif: true,
                };
            }

            return null;
        };
    }

    export function emails(formControl: AbstractControl): { [key: string]: any } | null {
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        const values = formControl.value || [];
        if (!Array.isArray(values)) {
            throw new Error(`emails(): values doesn't in array format`);
        }
        let isValid = true;
        values.forEach((_) => {
            if (!EMAIL_REGEXP.test(_)) {
                isValid = false;
            }
        });

        if (!isValid) {
            return {
                emails: true,
            };
        }

        return null;
    }
}
