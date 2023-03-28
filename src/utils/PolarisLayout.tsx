import React, { Fragment } from "react";
import { LayoutProps, OwnPropsOfLayout, UISchemaElement } from "@jsonforms/core";
import { ConditionalWrapper } from "./utils";
import { FormLayout } from "@shopify/polaris";
import { JsonFormsDispatch } from "@jsonforms/react";

export interface PolarisLayoutRendererProps extends OwnPropsOfLayout {
    elements: UISchemaElement[];
}

const PolarisLayoutRendererComponent = ({
    elements,
    schema,
    path,
    renderers,
    cells,
    uischema,
    direction,
    visible,
    enabled,
    uischemas
}: PolarisLayoutRendererProps) => {
    // Check if the elements array is empty or not
    if(!Array.isArray(elements) || !elements.length) return null;

    // TODO: Implement the condensed Field
    const isCondensed = false;

    /**
     * Otherwise Conditionally render the formlayout
     * If it's a Row / Condensed Row, then render the FormLayout.Group
     */

    return (
        <ConditionalWrapper
            condition={direction == 'row'}
            wrapper={children => <FormLayout.Group condensed={isCondensed}>{ children }</FormLayout.Group> }
        >
            {elements.map((child, index) => (
                <Fragment key={`${ path }-${ index }`}>
                    <JsonFormsDispatch
                        schema={schema}
                        uischema={child}
                        path={path}
                        enabled={enabled}
                        renderers={renderers}
                        cells={cells}
                    />
                </Fragment>
            ))}
        </ConditionalWrapper>
    )
};

// INFO: Material UI uses React Memo - not sure if it's needed in our case
export const PolarisLayoutRenderer = React.memo(PolarisLayoutRendererComponent);
