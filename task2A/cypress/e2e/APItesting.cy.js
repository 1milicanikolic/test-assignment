const faker = require('@faker-js/faker');

describe('testing api', () => {
    let accessToken = "541167b1d56a381fb79f65a9d02bfb102c5bad4bf5d81bee4478c60f52658890"
    let email = faker.internet.email() //I used faker here so that the request for creating a new user would meet the requirement (email must not be used)
    let userId;

    it('create new user', () => {
        cy.request({
            method: 'POST',
            url: "https://gorest.co.in/public/v2/users",
            headers: { 
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name":"user",
                "email": email,
                "gender":"female",
                "status":"active"
            }
        }).then((res) => {
            expect(res.status).to.eq(201)
            userId = res.body.id
            expect(res.body).has.property('name', 'user')
            expect(res.body).has.property('gender', 'female')
        })
    })

    it('update user details', () => {
        cy.request({
            method: 'PUT',
            url: `https://gorest.co.in/public/v2/users/${userId}`,
            headers: { 
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name":"newName",
                "email": email + "m",
                "gender":"female",
                "status":"inactive"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).has.property('name', 'newName')
            expect(res.body).has.property('status', 'inactive')
        })
    })

    it('delete the user', () => {
        cy.request({
            method: 'DELETE',
            url: `https://gorest.co.in/public/v2/users/${userId}`,
            headers: { 
                'Authorization': 'Bearer ' + accessToken
            },
        })

        cy.request({
            method: 'GET',
            url:`https://gorest.co.in/public/v2/users/${userId}`,
            headers: { 
                'Authorization': 'Bearer ' + accessToken
            },
        }).then((res) => {
            expect(res.status).to.eq(404)
        })
    })
})