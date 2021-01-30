const expect    = require("chai").expect;
const colors = require("../common/colors.js");

describe("Simple color test", function() {
  describe("test color temp return", function() {
    it("return the right color", function() {
      const color = colors.determineTemperatureColor(91);
      expect(color).to.equal(colors.tempcolor_hsla_map.very_hot);
    });
  });
});