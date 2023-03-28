import {
    rankWith,
    RankedTester,
    isBooleanControl,
    uiTypeIs
  } from '@jsonforms/core';


import PolarisBooleanControl from './controls/PolarisBooleanControl';
import PolarisHorizontalLayout from './layouts/PolarisHorizontalLayout';


export const polarisRenderers: { tester: RankedTester, renderer: any}[] = [
 { tester: rankWith(4, isBooleanControl), renderer: PolarisBooleanControl },
 { tester: rankWith(2, uiTypeIs('HorizontalLayout')), renderer: PolarisHorizontalLayout }
];
