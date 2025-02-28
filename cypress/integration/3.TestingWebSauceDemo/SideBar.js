describe('TC_SIDEBAR| 2041723013 - VEGA ANGGARESTA', function() {
    it('TC_SIDEBAR_001', function(){
        cy.visit('/')

        cy.get('[data-test=username]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test=login-button]').click()

        cy.get('#item_4_img_link > .inventory_item_img').click()

        cy.get('#react-burger-menu-btn').click()

        cy.get('#inventory_sidebar_link').click()

        // Assertion
        cy.get('#item_4_title_link > .inventory_item_name').should('be.visible')

    })

    it('TC_SIDEBAR_002', function(){
        cy.visit('/')

        cy.get('[data-test=username]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test=login-button]').click()

        cy.get('#react-burger-menu-btn').click()

        cy.get('#about_sidebar_link').click()

        cy.get('.is-full-mobile > .content-container > .title').should('be.visible')
    })

    it('TC_SIDEBAR_003', function(){
        cy.visit('/')

        cy.get('[data-test=username]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test=login-button]').click()

        cy.get('#react-burger-menu-btn').click()

        cy.get('#logout_sidebar_link').click()

        // Assertion
        cy.get('.login_logo').should('be.visible')
    })

    it('TC_SIDEBAR_004', function(){
        cy.visit('/')

        cy.get('[data-test=username]').type('standard_user')

        cy.get('[data-test=password]').type('secret_sauce')

        cy.get('[data-test=login-button]').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()

        cy.get('#react-burger-menu-btn').click()

        cy.get('#reset_sidebar_link').click({force: true})

        // Assertion
        cy.get('[data-test=remove-sauce-labs-backpack]').should('be.visible')

    })

    it('TC_SIDEBAR_005', function(){
        cy.visit('/')

        cy.get('[data-test=username]')
        .type('problem_user')

        cy.get('[data-test=password]')
        .type('secret_sauce')

        cy.get('[data-test=login-button]').click()

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()

        cy.get('#react-burger-menu-btn').click()

        cy.get('#reset_sidebar_link').click()

        cy.get('[data-test=remove-sauce-labs-backpack]').should('be.visible')
    })

})