# Multiplication Tables CLI

Launching the project:

1. Clone the repository.
2. Install dependencies:

   ```bash
    npm install
   ```

3. Run the application in development mode:

   ```bash
   npm run dev
   ```
   By default, it generates the multiplication table for base 10. To specify a different base, modify the `-b` argument in the `dev` script.
   

4. Run the application in production mode:

   ```bash
   npm start
   ```

A command-line application built with Node.js and TypeScript to generate multiplication tables and save them to text files. The project was created to practice clean architecture, separate responsibilities through use cases, and implement automated testing with Jest, mocks, and spies.

## Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate a test coverage report:

```bash
npm run test:coverage
```

## Technologies

Node.js | TypeScript | Jest | Yargs | Clean Architecture
