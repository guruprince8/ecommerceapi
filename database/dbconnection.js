const { Client, Pool } = require('pg');

const clientOptions = {
    'user': process.env.DB_USERNAME || 'postgres',
    'password': process.env.DB_PASSWORD || 'postgres',
    'host': process.env.DB_HOST || 'localhost',
    'database': process.env.DB_DATABSE || 'postgres',
    'port': 5432
};

const poolOptions = {
    'user': process.env.DB_USERNAME || 'postgres',
    'password': process.env.DB_PASSWORD || 'postgres',
    'host': process.env.DB_HOST || 'localhost',
    'database': process.env.DB_DATABSE || 'postgres',
    'port': 5432,
    'max': 20,
    'idleTimeoutMillis': 30000
}

const client = new Client(clientOptions);
const pool = new Pool(poolOptions);

// test db connection
async function testDBConnection() {
    console.log("executing test db connection");
    try {
        await client.connect();
        console.log('connected to database')
    } catch (err) {
        console.log('error connecting to database', err)
        exit(1);
    }

}

// execute sample query
function executeSampleQuery() {
    try {

        pool.query('SELECT * FROM your_table', (err, result) => {
            if (err) { 
                console.log(err.code+" "+err.message);
                //throw new Error(err.message);
            }
            else { 
                //console.log('Query result:', result.rows); 
            }
        });
        
    } catch (e) {
        console.log('error', e);
    }
    return 0;
}

module.exports = { testDBConnection, executeSampleQuery }