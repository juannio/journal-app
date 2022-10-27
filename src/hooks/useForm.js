import { useMemo } from "react";
import { useState, useEffect } from "react"

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [validForm, setValidForm] = useState({})

    // Watch whenever an input value is changed to check if it is valid according to formValidations
    useEffect(() => {

        checkFormValidations();
    }, [formState])


    const onInputChange = e => {

        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // Reset form state
    const onResetForm = () => {

        setFormState(initialForm);
    }

    // Dinamic validation for each Form input
    const checkFormValidations = () => {

        let validatedForm = {};

        for (const formProperty of Object.keys(formValidations)) {

            const [validateProperty, errorMesage] = formValidations[formProperty];

            // Second argument on validateProperty only to check confirmPassword property
            validatedForm = {
                ...validatedForm,
                [`${formProperty}Validated`]: validateProperty(formState[formProperty], formState.password) ? null : errorMesage
            };
        }

        setValidForm(validatedForm);
    }

    // Returns true if any of the form properties are NOT null
    const allFormsValidated = useMemo(() => {

        for (const property of Object.keys(validForm)) {

            if (validForm[property] !== null) return false
        }

        return true;
    }, [validForm]);

    return { ...formState, ...validForm, formState, onInputChange, onResetForm, allFormsValidated };
}

