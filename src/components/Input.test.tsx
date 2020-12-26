import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

describe("Input", () => {
   it("Should render the Input component", () => {
      const { getByTestId } = render(<Input type="text" name="test" placeholder="test" />);
      expect(getByTestId("input")).toBeDefined();
   });

   it("Should have the placeholder prop", () => {
      const { getByPlaceholderText } = render(<Input type="text" name="test" placeholder="test" />);
      expect(getByPlaceholderText("test")).toBeDefined();
   });

   it("Should update the value", () => {
      const { getByTestId } = render(<Input type="text" name="test" placeholder="test" />);
      const input = getByTestId("input");
      fireEvent.change(input, { target: { value: 'City' } })
      expect(input.value).toBe("City");
   });

});