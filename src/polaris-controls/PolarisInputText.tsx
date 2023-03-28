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


    return (
        <TextField
            autoComplete=""
            value={data}
            onChange={(newData) => handleChange(path, newData)}
            label={label}
        />
    )

}

