import React, { useState } from 'react';
import {

    ControlElement,
    ControlProps
} from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';

import { PolarisInputText } from '../polaris-controls/PolarisInputText';



export const PolarisInputControl = (props: ControlProps) => {
    const {
        data,
        enabled,
        errors,
        label,
        id,
        schema,
        uischema,
        path,
        handleChange,
        visible
    } = props;
    const { maxLength, minLength } = schema;
    const { options } = uischema

    return (
        <>
        {
            visible && <PolarisInputText {...props} isValid={true}/>
        }
        </>
    )

}

export default withJsonFormsControlProps(PolarisInputControl);
