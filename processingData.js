// * Task 4

let data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
}

// change data with spread operator
let insertData = {...data, name:'Ferdi Ferdiana', email: 'ferdifh82@gmail.com', hobby: ['Menonton film', 'memanah', 'berkuda']};

console.log(insertData);

// take data "street and city" with destructuring
const {address} = data;
const {street, city} = address;
console.log(`street name is ${street} and located in ${city} city`);