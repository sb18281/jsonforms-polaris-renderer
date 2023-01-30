# JSONForms Polaris Renderer

This is the JSONForms Polaris Renderer Set.
Currently in Alpha.

The following elements are supported
- Boolean Control / Checkbox

## Usage
_schema.json_
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 20

    },
    "description": {
      "title": "Long Description",
      "type": "string"
    },
    "booleanName": {
      "type": "boolean",
      "description": "This doesn't really get used anywhere right?"
    },
    "booleanRequired": {
      "type": "boolean",
      "description": "This is required"
    },
    "booleanHidden": {
      "type": "boolean",
      "description": "This is required"
    },
    "booleanShowIfNameTrue": {
      "type": "boolean",
      "description": "ShowIfNameTrue"
    }
  },
  "required": ["booleanRequired"]
}
```

_uischema.json_
```json
{
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "label": "Boolean Label",
      "scope": "#/properties/booleanName"
    },
    {
      "type": "Control",
      "label": "Boolean Required Label",
      "scope": "#/properties/booleanRequired",
      "options": {
        "toggle": true
      }
    },
    {
      "type": "Control",
      "label": false,
      "scope": "#/properties/booleanHiddena",
      "options": {
        "toggle": true,
        "readonly": true,
        "polarisSettings": {
          "helpText": "This is a Polaris Specific Setting"
        }
      }
    },
    {
      "type": "Control",
      "label": "Show if Name is True",
      "scope": "#/properties/booleanShowIfNameTrue",
      "rule": {
        "effect": "SHOW",
        "condition": {
          "scope": "#/properties/booleanName",
          "schema": {
            "const": true
          }
        }
      }
    }
  ]
}
```

_App.jsx_
```jsx
import { polarisRenderers } from '../src/index';
import React from 'react';
import { AppProvider } from '@shopify/polaris';

import '@shopify/polaris/build/esm/styles.css';

const initialData = {
  name: 'Send email to Simon',
  description: 'Confirm if you have passed the subject\nHereby ...',
  done: true,
  recurrence: 'Daily',
  rating: 3,
};

const renderers = [
  ...vanillaRenderers,
  ...polarisRenderers
];

const App = () => {

  const [data, setData] = useState<any>(initialData);

  return (
     <AppProvider i18n={{}}>
            <JsonForms
                data={data}
                schema={schema}
                uischema={uischema}
                cells={vanillaCells}
                renderers={renderers}
                onChange={({ errors, data }) => setData(data)}
            />
          </AppProvider>
  )

};
```

