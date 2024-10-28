const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Enable CORS
const app = express();
app.use(cors());

// GraphQL schema
const schema = buildSchema(`
    type Query {
        wrongPrescription: Int
        expiredStock: Int
        lostSales: Int
        lateCheckIn: Int
        taskEfficiencyData: Int
        patientSatisfaction: Float
        efficiency: Float
        serviceAvailability: Int
        waitTime: Int
        consultationTime: Int
    }
`);

// Root resolver
const root = {
    wrongPrescription: () => 10,
    expiredStock: () => 5,
    lostSales: () => 3,
    lateCheckIn: () => 7,
    taskEfficiencyData: () => 13000,
    patientSatisfaction: () => 7.8,
    efficiency: () => 4.2,
    serviceAvailability: () => 95,
    waitTime: () => 68,
    consultationTime: () => 82,
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));
