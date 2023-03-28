import React from 'react';
import {  withJsonFormsLayoutProps } from '@jsonforms/react';
import { HorizontalLayout, LayoutProps } from '@jsonforms/core';
import {
  PolarisLayoutRenderer,
  PolarisLayoutRendererProps,
} from '../utils/PolarisLayout';

export const PolarisVerticalLayout = ({
  visible,
  enabled,
  uischema,
  schema,
  path,
  cells,
  renderers,
}: LayoutProps) => {
  // TODO: Support for a Label on the Layout

  //   console.log({ data, visible, label, enabled, uischema, schema, path, config, direction, cells, renderers }, 'Horizontal Layout');
  const layout = uischema as HorizontalLayout;
  const childProps: PolarisLayoutRendererProps = {
    elements: layout.elements,
    schema,
    path,
    enabled,
    direction: 'column',
    visible,
  };
  return (
    <PolarisLayoutRenderer
      {...childProps}
      renderers={renderers}
      cells={cells}
    />
  );
};

export default withJsonFormsLayoutProps(PolarisVerticalLayout);
