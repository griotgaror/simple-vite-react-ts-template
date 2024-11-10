/* eslint-disable @typescript-eslint/no-empty-function */

import React from 'react';
import { describe, expect, it } from 'vitest';

import { customRenderer } from '@/__tests__/customRenderer';
import TestPage, { testTxt } from './testPage';

describe('Test Page Tests', () => {
    it('should render the test txt', async () => {
        const { getByText } = customRenderer({
            element: <TestPage />,
        });

        const txtContent = await getByText(testTxt);
        expect(txtContent).toBeInTheDocument();
    });
});
