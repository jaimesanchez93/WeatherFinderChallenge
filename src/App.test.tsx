import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App", () => {
   it("Should render the App component", () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId("app")).toBeDefined();
   });
})