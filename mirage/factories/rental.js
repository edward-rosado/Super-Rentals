import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    id(i) {
        return `Rental ${i}`;
    },
    title()
    { 
        return faker.commerce.productName;
    },
    owner(){
        return faker.name.firstName() + ' ' + faker.name.lastName();
    } ,
    city(){
        return faker.address.city();
    } ,
    bedrooms: faker.list.random(1, 2, 3, 4, 5, 6, 7, 8, 9),
    image() {
        return faker.random.image();
    } ,
    description(){
        return faker.company.bs();
    } ,
    propertyType: faker.list.random('Condo', 'Townhouse', 'Apartment', 'Home', 'Mansion', 'Estate')
});
