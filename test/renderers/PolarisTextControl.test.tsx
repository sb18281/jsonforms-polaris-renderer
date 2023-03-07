import React from 'react';
import { afterAll, afterEach, describe, expect, it } from "vitest";
import { ControlElement, ControlProps } from "@jsonforms/core";
import { PolarisInputControl } from "../../src/controls/PolarisInputControl"
import { render, screen } from '../utils';



const schema = {
    type: 'object',
    properties: {
        foo: {
            type: 'string'
        }
    }
}

const uischema: ControlElement = {
    type: 'Control',
    scope: '#/properties/foo',
    options: {
        autocomplete: true
    }
}

const createPolarisTextControl = (props: ControlProps) => {
    return <PolarisInputControl { ...props } />
}

const defaultControlProps = ():ControlProps => {
    return {
        id: 'foo-id',
        schema: schema.properties.foo,
        rootSchema: schema,
        uischema: uischema,
        label: 'Foo',
        errors: '',
        data: '',
        enabled: true,
        visible: true,
        path: '',
        handleChange: () => {}
    }
}

describe("Polaris Text Control", () => {
    test.todo('runs', () => {
        const props = defaultControlProps();
        const wrapper = render(createPolarisTextControl(props))
        screen.debug()
        console.log({ wrapper, screen,  },"yo");
        expect(wrapper.findByRole('input'))
        expect(1).toEqual(1);
    })
})
