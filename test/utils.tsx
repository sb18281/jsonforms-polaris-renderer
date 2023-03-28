import React, { ReactElement } from 'react';
import { AppProvider } from "@shopify/polaris"
import { render, RenderOptions } from '@testing-library/react';
import { JsonFormsReactProps, useJsonForms } from '@jsonforms/react';

//https://testing-library.com/docs/react-testing-library/setup#custom-render

const PolarisProvider = ({children}: { children: React.ReactNode }) => {
    return <AppProvider i18n={{}} children={children} />
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: PolarisProvider, ...options });


export * from '@testing-library/react';
export { customRender as render }
