import * as ScrollHelpers from '../index';

describe('ScrollHelpers', () => {
  describe('it should block & unblock scrolling', () => {
    it('it should scroll to (100,0) then block scrolling check if blocked then unblock scrolling and check if scrolling', () => {
      document.getElementsByTagName("html")[0].style.height = "31rem";
      window.resizeTo(700, 700);

      window.scrollTo(100,0);
      expect(window.scrollX).toEqual(100);

      ScrollHelpers.disableScroll();
      window.scrollTo(200,0);
      expect(window.scrollX).toEqual(100);

      ScrollHelpers.enableScroll();
      window.scrollTo(200,0);
      expect(window.scrollX).toEqual(200);
    });
  });
});
