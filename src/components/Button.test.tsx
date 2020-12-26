import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe("Button", () => {
   it("Should render Button component", () => {
      const { getByTestId } = render(<Button type="submit" text="Test" />)
      expect(getByTestId("submit-button")).toBeDefined();
   });

   it("Should have the text prop", () => {
      const { getByText, queryAllByText } = render(<Button type="submit" text="Test" />)
      expect(getByText("Test")).toBeDefined();
      expect(queryAllByText("Test-No").length).toEqual(0);
   });

});