import React from 'react';
import { afterAll, afterEach, describe, expect, it } from "vitest";
import { ControlElement, ControlProps } from "@jsonforms/core";
import { PolarisBooleanControl } from "../../src/controls/PolarisBooleanControl"
import { fireEvent, render, screen, TestEmitter, waitFor } from '../utils';
import userEvent from '@testing-library/user-event';


const baseSchema = {
  type: 'object',
  properties: {
      foo: {
          type: 'boolean',

      }
  }
}

const baseUiSchema: ControlElement = {
  type: 'Control',
  scope: '#/properties/foo',
  label: 'Foo Label'
}

const defaultControlProps = ():ControlProps => {
  return {
      id: 'foo',
      schema: baseSchema.properties.foo,
      rootSchema: baseSchema,
      uischema: baseUiSchema,
      label: 'Foo',
      errors: '',
      data: undefined,
      enabled: true,
      visible: true,
      path: '',
      handleChange: () => {}
  }
}

const createBooleanControl = (props: ControlProps) => {
  return <PolarisBooleanControl { ...props } />
}



// Does it render?
describe('PolarisBooleanControl',  () => {
  const props = defaultControlProps();

  it('displays a boolean control', async () => {
    render(createBooleanControl(props));
    expect(await screen.findByRole('checkbox')).toBeInTheDocument();
  });

  it('displays a boolean control with a label', async () => {
    render(createBooleanControl(props));
    expect(await screen.findByText('Foo')).toBeInTheDocument();
  });

  it('responds to a checked change', async () => {
    const user = userEvent.setup();
    const dynamicProps = defaultControlProps();
    dynamicProps.data = undefined;
    dynamicProps.handleChange =  (path, value) => {
      dynamicProps.data = value;
    };

    render(createBooleanControl(dynamicProps));
    const checkbox = await screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    // TODO: Fix this test to rely on the component state
    expect(dynamicProps.data).toBeTruthy();
  })

  it('renders disabled', async() => {
    const dynamicProps = defaultControlProps();
    dynamicProps.enabled = false;
    render(createBooleanControl(dynamicProps));
    const checkbox = await screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  })

  it('renders errors', async() => {
    const dynamicProps = defaultControlProps();
    dynamicProps.errors = "Error";
    render(createBooleanControl(dynamicProps));
    const error = await screen.findByText('Error');
    expect(error).toBeInTheDocument();
  })

  it('renders hidden', async() => {
    const dynamicProps = defaultControlProps();
    dynamicProps.visible = false;
    render(createBooleanControl(dynamicProps));
    const checkbox = await screen.queryByRole('checkbox');
    expect(checkbox).not.toBeInTheDocument();
  })

  it('it doesn\'t show label if it\'s empty', async() => {
    const dynamicProps = defaultControlProps();
    dynamicProps.uischema.label = undefined;
    render(createBooleanControl(dynamicProps));
    const label = await screen.queryByText('Foo Label');
    expect(label).not.toBeInTheDocument();
  });

  test.todo('Polaris Settings Check');

  //
})
