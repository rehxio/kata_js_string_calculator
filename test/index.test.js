const { sumNumberFrom } = require("../src")

describe("sum numbers from expression", () => {
   it("without any numbers gives zero", () => {
      expect(sumNumberFrom("")).toEqual(0)
   })

   it("with one number returns the value", () => {
      expect(sumNumberFrom("1")).toEqual(1)
   })

   it("given two values separated by commas returns the sum", () => {
      expect(sumNumberFrom("1,1")).toEqual(2)
   })

   it("given a letter it skips it", () => {
      expect(sumNumberFrom("a,1")).toEqual(1)
   })
})

describe("sum numbers with custom separator", () => {
   it("returns the sum with a separator", () => {
      expect(sumNumberFrom("//#;1#2")).toEqual(3)
      expect(sumNumberFrom("//-;1-2")).toEqual(3)
   })

   it("returns the sum with a separator with multiple chars", () => {
      expect(sumNumberFrom("//----;1----2")).toEqual(3)
      expect(sumNumberFrom("//😂😂;1😂😂2")).toEqual(3)
   })
})
