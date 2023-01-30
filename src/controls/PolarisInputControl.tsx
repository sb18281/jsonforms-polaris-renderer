import React, { useState } from 'react';
import {

    ControlElement,
    ControlProps
} from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { TextField, TextFieldProps } from '@shopify/polaris';
import type { Prettify } from '../utils/typeHelpers'


type PolarisInputControlPropsRaw = Omit<ControlProps, "uischema"> & {
    uischema: Prettify<Omit<ControlElement, "options"> & {
        options: TextFieldProps & { [key:string]: any }
    }>
}

// type PolarisInputControlProps = Prettify<PolarisInputControlPropsRaw>

export const PolarisInputControl = (props: PolarisInputControlPropsRaw) => {
    const {
        data,
        enabled,
        errors,
        label,
        id,
        schema,
        uischema,
        path,
        handleChange
    } = props;
    const { maxLength, minLength } = schema;
    const { options } = uischema

    console.log("PolarisInputControl", { props, maxLength, minLength });
    return (
        <TextField autoComplete='' id={id} {...options} label={label} value={data}  onChange={(newData: string) => handleChange(path, newData)} />
    )

}

export default withJsonFormsControlProps(PolarisInputControl);
