import { CellProps } from "@jsonforms/core";
import { TextField } from "@shopify/polaris";
import React from "react";

export const PolarisInputText = ({
    data,
    enabled,
    errors,
    handleChange,
    id,
    isValid,
    path,
    rootSchema,
    schema,
    uischema,
    cells,
    config,
    renderers,
    label
}: CellProps & {label:string} ) => {

    console.log({config, options: uischema.options})
    return (
        <TextField
            disabled={!enabled}
            autoComplete="false"
            value={data}
            onChange={(newData) => handleChange(path, newData)}
            label={label}
            helpText={schema.description}
            error={errors}
            maxLength={schema.maxLength}
            minLength={schema.minLength}
            readOnly={uischema.options.readOnly}
        />
    )

}

