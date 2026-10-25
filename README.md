# Multiplication Tables CLI

A command-line application built with Node.js and TypeScript to generate multiplication tables and save them to text files. The project was created to practice clean architecture, separate responsibilities through use cases, and implement automated testing with Jest, mocks, and spies.

### Getting Started

1. Clone the repository.
2. Install dependencies:

   ```bash
    npm install
   ```

3. Run the application in development mode:

   ```bash
   npm run dev -- -b 10
   ```
   It generates the multiplication table for base 10. To specify a different base, modify the `-b` argument number.   

4. Run the application in production mode:

   ```bash
   npm start
   ```

## Usage

The application accepts command-line options to customize the multiplication table and output file.

| Option | Alias | Description | Default |
|---|---|---|---|
| `--base` | `-b` | Multiplication table base (required) | None |
| `--limit` | `-l` | Multiplication table limit | `10` |
| `--show` | `-s` | Display the table in the console | `false` |
| `--name` | `-n` | Output file name | `multiplication-table` |
| `--destination` | `-d` | Output directory | `outputs` |

The base must be greater than 0, and the limit must be greater than 1.

### Examples

Generate the multiplication table for base 5:

```bash
npm run dev -- -b 5
```

Generate a table for base 7, up to 15, and display it in the console:

```bash
npm run dev -- -b 7 -l 15 -s
```

Specify a custom file name and destination directory:

```bash
npm run dev -- -b 3 -n table-3 -d generated
```

## Testing

Unit tests are implemented with Jest to verify application behavior, use cases, and dependency interactions using mocks and spies.

```bash
npm test
npm run test:watch
npm run test:coverage
```

## Technologies

Node.js | TypeScript | Jest | Yargs | Clean Architecture
