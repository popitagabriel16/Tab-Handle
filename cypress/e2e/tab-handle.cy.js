// FOR SOME REASON THE ASSERTIONS ARE NOT WORKING WHEN NAVIGATING TO OTHER PAGES,
// I CAN'T CLICK, I CAN'T ASSERT TITLE, I ALSO TRIED WITH ORIGIN AND IT'S THE SAME
// ON THE OLDER VERSIONS OF CYPRESS I SAW THAT IT WORKS TO INTERACT WHEN YOU NAVIGATE TO OTHER PAGES
describe('Handle-Tab-Test', () => {
  beforeEach(() => {
    cy.visit('https://www.airportlabs.com');
  })
  it('Handle Tab', () => {
    const socialMediaLinks = ".logo-footer-container.w-inline-block";
      cy.get(socialMediaLinks, { timeout: 20000 }).eq(0).scrollIntoView();
      cy.get(socialMediaLinks, { timeout: 20000 }).eq(0).invoke('attr', 'target', '_self').click();
      // cy.title().should('eq', 'Facebook');
  })
})