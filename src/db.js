// Import the 'mysql2' module for MySQL database connectivity
import mysql from 'mysql2';

/* 
// Uncomment the following block and use dotenv for environment variables
// Configuration for connecting to the MySQL database using environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); 
*/

// Configuration for connecting to the MySQL database using hardcoded values
const connection = mysql.createConnection({
    host: 'localhost',      // Replace with your database host
    user: 'root',           // Replace with your database user
    password: 'Admin@123',  // Replace with your database password
    database: 'lojadb'      // Replace with your database name
});

// Establish a connection to the MySQL database
connection.connect((error) => {
    if (error) throw error;
    console.log(`Connected to the database: lojadb`);
});

// Export the 'connection' object as the default export of this module
export default connection;
