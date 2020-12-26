import { callApi } from ".";

global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve("Test") }))

describe("Utils", () => {

   describe("Call Api", () => {
      beforeEach(() => {
         fetch.mockClear();
      });

      it("should fetch api ", async () => {
         const data = await callApi("Madrid", "es");
         expect(data).toEqual("Test");
         expect(fetch).toHaveBeenCalledTimes(1);
      })
   })
})