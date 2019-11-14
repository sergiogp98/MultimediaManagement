const modules = require('../modules');
const supertest = require('supertest');
const app = require('../controllers/routes');
require('dotenv').config();

const film = {
    title: 'Joker',
    year: 2019,
    length: 122,
    genre: ['Crime', 'Drama', 'Thriller'],
    summary: 'In Gotham City, mentally-troubled comedian Arthur Fleck embarks on a downward-spiral of social revolution and bloody crime. This path brings him face-to-face with his infamous alter-ego: "The Joker"',
    director: 'Todd Phillips'
}; 

describe('POST /film', function(){
    before(async () => {
        try{
            await modules.connectDB();
            process.env.USE_TEST_DB = true;
        } catch(err) {
            console.log(err);
            process.exit(1);
        }
    });

    after(async () => {
        await modules.deleteFilmTitle(film.title);
        await modules.disconnectDB();
        process.env.USE_TEST_DB = false;
    });

    it('Add a film', function(done) {
        supertest(app)
        .post('/films')
        .send(film)
        .expect(201, done);         
    });
});

