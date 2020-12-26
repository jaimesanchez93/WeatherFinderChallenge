import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';
import Info from './Info';


describe("Info", () => {
   it("Should render the Info component", () => {
      const { getByTestId } = render(<Info label="test-label" value="test-value" />);
      expect(getByTestId("info")).toBeDefined();
   });

   it("Should have the label prop", () => {
      const { getByText } = render(<Info label="test-label" value="test-value" />);
      expect(getByText(/test-label/)).toBeDefined();
   });

   it("Should have the value prop", () => {
      const { getByText } = render(<Info label="test-label" value="test-value" />);
      expect(getByText(/test-value/)).toBeDefined();
   });
})