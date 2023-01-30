import React from 'react';
import { ControlProps } from '@jsonforms/core';
import { Control, withJsonFormsControlProps } from '@jsonforms/react';
import { Checkbox, CheckboxProps } from '@shopify/polaris';
import { Prettify } from 'utils/typeHelpers';


type PolarisCheckboxSettings = CheckboxProps;


export const PolarisBooleanControl = ({
  data,
  visible,
  label,
  id,
  enabled,
  uischema,
  schema,
  rootSchema,
  handleChange,
  errors,
  path,
  config,

}: ControlProps) => {

  const labelHidden = label === "";

  const checked = !!data;

  /** If Polaris Settings are present inthe UISchema render them */
  const polarisSettings = uischema.options?.polarisSettings as PolarisCheckboxSettings;

  // console.log({ data, visible, label, id, enabled, uischema, schema, rootSchema,errors, path, config },"Boolean Control")
    return (
        <div>


            { visible && <Checkbox  labelHidden={labelHidden}  error={errors}  disabled={!enabled} id={id} checked={checked} label={ label } onChange={(newValue, _id) => handleChange(path, newValue)} {...polarisSettings } /> }
            <br/>
        </div>
    )
}

export default withJsonFormsControlProps(PolarisBooleanControl)
