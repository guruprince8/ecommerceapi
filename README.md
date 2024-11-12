# E-Commerce Node API's
<h2>Introduction </h2>
Node application designed and developed to host micro services. 
<br/>
Ideas is to use Express and Express Router to develop different sets of micro services by different business lines. 

<h2>Schema Setup</h2>
Use schema_creation.sql file avaiable inside schema directory to create new schema & tables

<h2>Load Sample Data</h2>
Use CSV files under /sampledata directory to load sample data 

<h2>Enabling HTTPS</h2>
Certs folder consists of sample certicate and private key which are used to enable https. It is recomeeded to regenerate those as per the domain or ip address.

Use either <code>keytool</code> or <code>openssl</code> to generate new certificate and private key.

<h2>Run Application </h2>
Use the following commands in sequence to launch application
<li><code>npm install</code></li>
<li><code>npm run start</code></li>

 <h2>Access Application </h2>
Use https://127.0.0.1:3000/