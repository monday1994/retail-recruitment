const fakerModule = require('@faker-js/faker');
const uuid = require('uuid');
const fs = require('fs');

const {v4: uuidv4 } = uuid;
const { faker } = fakerModule;

const getValueBetween50And100 = (value) => {
    if (value <= 50) {
        return 0;
    } else if (value > 100) {
        return 50;
    } else {
        return value - 50;
    }
};

const calculatePromoPoints = (purchaseAmount) => {
    const basePoints = 1;
    const bonusPoints = 2;

    if (purchaseAmount > 100) {
        // The following line calculates points only for the amount over $100,
        // but it should also consider the points for the first $100 spent.
        const amountOver100 = purchaseAmount - 100;
        const amountBetween50And100 = getValueBetween50And100(purchaseAmount);

        // The calculation should include points for the first $100 as well.
        return (amountOver100 * bonusPoints) + (amountBetween50And100 * basePoints);
    }

    if (purchaseAmount > 50) {
        return (purchaseAmount - 50) * basePoints;
    }

    return 0;
}

const users = [
    {
        name: 'Libby Page',
        email: 'sed.libero@yahoo.org',
        password: 'test',
        id: '959e6abf-ae32-4646-a0dc-673f224d4299'
    },
    {
        name: 'Rigel Mathews',
        email: 'enim@icloud.org',
        password: 'test',
        id: 'fd165e2c-3088-4554-8fc7-3405f646e403'
    },
    {
        name: 'Ira Dorsey',
        email: 'lectus.pede@protonmail.ca',
        password: 'test',
        id: 'fb96c2df-6eae-49aa-afb0-2b50a0eff092'
    },
    {
        name: 'Cally Zamora',
        email: 'sem@icloud.edu',
        password: 'test',
        id: '7ac2da4c-4969-4396-89fa-1a3f19f377eb'
    },
    {
        name: 'Xenos Stafford',
        email: 'cubilia@aol.couk',
        password: 'test',
        id: 'a025dac5-7c1d-40d7-9f7e-4c50bf1b170a'
    }
]

const generateProduct = () => {
    const purchaseAmount = parseFloat(faker.commerce.price({ min: 5, max: 500 }));

    return ({
        title: faker.commerce.productName(),
        purchaseAmount,
        id: uuidv4(),
    })
};

const generateTransaction = (userId) => {
    const purchaseAmount = parseFloat(faker.commerce.price({ min: 5, max: 500 }));
    const promoPoints = calculatePromoPoints(purchaseAmount);

    return ({
        title: faker.commerce.productName(),
        purchaseAmount,
        id: uuidv4(),
        userId: userId,
        date: faker.date.recent(90),
        promoPoints
    })
};

const generateTransactions = (user) => {
    const numTransactions = faker.datatype.number({ min: 5, max: 10 });

    const transactions = [];
    for (let i = 0; i < numTransactions; i++) {
        transactions.push(generateTransaction(user.id));
    }

    return transactions;
};

const generateUsersAndTransactions = () => {
    const transactions = [];
    const usersWithPoints = [];
    for(const user of users) {
        const t = generateTransactions(user);

        let points = 0;
        for(const trans of t) {
            points += trans.promoPoints;
        }

        usersWithPoints.push({
            ...user,
            promoPoints: points
        })
        transactions.push(...t);
    }

    return {
        transactions,
        usersWithPoints,
    }
}

const generateProducts = () => {
    const products = [];
    for(let i = 0; i < 20; i++) {
        products.push(generateProduct());
    }
    return products;
}

const products = generateProducts();


const saveData = (data, filePath) => {
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully!');
        }
    });
}


//saveData(products, './products.json');

