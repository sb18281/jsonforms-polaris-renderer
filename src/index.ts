import {
    rankWith,
    RankedTester,
    isBooleanControl
  } from '@jsonforms/core';


import PolarisBooleanControl from './controls/PolarisBooleanControl';


export const polarisRenderers: { tester: RankedTester, renderer: any}[] = [
 { tester: rankWith(4, isBooleanControl), renderer: PolarisBooleanControl }
];
