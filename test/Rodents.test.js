require('dotenv').config();
const Rodents = require('../lib/models/Rodents');

describe('rodents model', () => {
   
    let createdRodents; 

    // beforeEach(() => {
    //     return Rodents.drop();
    // });

    beforeEach(() => {
        return Promise.all([
            Rodents.create('Eurasian Beaver', 'Least Concern'),
            Rodents.create('Capybara', 'Least Concern'),
            Rodents.create('Thick-Tailed Three-Toed Jerboa', 'Least Concern'),
            Rodents.create('Rodents Of Unusual Size', 'Imaginary')
        ])
            .then(createdRodentsFromPromise => {
                createdRodents = createdRodentsFromPromise;
            });
    });

    it('creates a rodent in our db', () => {
        return Rodents.create('Mexican Agouti', 'Threatened')
            .then(createdRodent => {
                expect(createdRodent).toHaveProperty('_id');
                expect(createdRodent.species).toEqual('Mexican Agouti');
                expect(createdRodent.status).toEqual('Threatened');
            });
    });

});