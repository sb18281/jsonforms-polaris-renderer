import { Fragment, useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';


import schema from './schema.json';
import uischema from './uischema.json';

import { polarisRenderers } from '../src/index';
import React from 'react';
import { AppProvider } from '@shopify/polaris';

import '@shopify/polaris/build/esm/styles.css';


const initialData = {
  name: 'Send email to Adrian',
  description: 'Confirm if you have passed the subject\nHereby ...',
  done: true,
  booleanRequired: true,
  recurrence: 'Daily',
  rating: 3,
};

const renderers = [
  ...vanillaRenderers,
  ...polarisRenderers
];

const App = () => {

  const [data, setData] = useState<any>(initialData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const clearData = () => {
    setData({});
  };
  const styles = `
    .vertical-layout {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
  `
  return (
    <Fragment>
        <style>{styles}</style>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to JSON Forms with React</h1>
          <p className='App-intro'>More Forms. Less Code.</p>
        </header>
      </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
    <div>
        <h4>Bound Data</h4>
        <div>
            <pre id='boundData'>{stringifiedData}</pre>
            <button onClick={clearData}>Clear Data</button>
        </div>
    </div>
    <div>
        <h4>Rendered Form</h4>
        <div>
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

        </div>
    </div>
    </div>
      {/*

        <Grid item sm={6}>
          <Typography variant={'h4'} className={classes.title}>
            Rendered form
          </Typography>
          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              uischema={uischema}
              data={data}
              renderers={renderers}
              cells={materialCells}
              onChange={({ errors, data }) => setData(data)}
            />
          </div>
        </Grid>
      </Grid> */}
    </Fragment>
  );
};

export default App;
