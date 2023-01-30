import {
    rankWith,
    isStringControl,
    RankedTester,
    isBooleanControl
  } from '@jsonforms/core';

import
    PolarisInputControl
 from './controls/PolarisInputControl';
import PolarisBooleanControl from './controls/PolarisBooleanControl';


export const polarisRenderers: { tester: RankedTester, renderer: any}[] = [
 { tester: rankWith(4, isStringControl), renderer: PolarisInputControl },
 { tester: rankWith(4, isBooleanControl), renderer: PolarisBooleanControl }
];
