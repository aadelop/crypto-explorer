# Ethereum Blockchain Explorer

This project is a **public blockchain explorer application**, specifically designed to interact with the **Ethereum network**. The application allows users to query information about transactions, blocks, addresses, and other relevant data from the Ethereum blockchain, providing both a backend and a frontend interface.

The project consists of two main sections: **Frontend** and **Backend**. Below are the steps to install and run both parts.

## Prerequisites

Make sure you have the following components installed on your machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [npx](https://www.npmjs.com/package/npx)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Backend Installation and Execution

Navigate to the backend folder:

```
cd backend
```

Install dependencies with Yarn:

```
yarn
```

Start the server using nodemon:
```
npx nodemon server.js
```

## Frontend Installation and Execution
Navigate to the frontend folder:

```
cd frontend
```
Install dependencies with Yarn:
```
yarn
```

Start the React development environment:
```
yarn dev
```

The development server will be running on the default port, typically at http://localhost:xxxx. This interface will allow users to visually query Ethereum blockchain data in an easy-to-use format.

## Additional Notes
- Make sure both the frontend and backend servers are running simultaneously for the project to work fully.
- You can modify ports or settings in the environment files as needed.
- The project uses specific Ethereum APIs (INFURA) to extract blockchain data, so you will need the appropriate API keys to interact with nodes or services on the network.
