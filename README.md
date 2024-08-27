# SQL Query Format 

This module provides a utility function to format and highlight SQL queries for PostgreSQL, making them more readable and visually appealing. It leverages `pg-promise` for parameterized query formatting, `sql-formatter` for beautifying the SQL syntax, and `sql-highlight` for syntax highlighting.

## Installation

You can install the module using npm:

```bash
npm install sql-query-format
```

## Usage

Here’s a basic example of how to use the `sqlQueryFormat` function:

```javascript
const sqlQueryFormat = require('sql-query-format');

const sqlQuery = sqlQueryFormat('SELECT * FROM "test" WHERE test = $1', [1])
```

### Function Details

- **`sqlQueryFormat(query, params, prettyCfg)`**
  - **`query`**: The SQL query string with placeholders.
  - **`params`**: An array of parameters to replace the placeholders in the query.
  - **`prettyCfg`** (optional): Configuration object for the SQL formatter. Defaults to `{ language: 'postgresql' }`.

### Example Output

After running the above code, the console will display a formatted and syntax-highlighted SQL query:

```sql
SELECT * 
FROM "test" 
WHERE test = 1
```

## Dependencies

- [`pg-promise`](https://www.npmjs.com/package/pg-promise) - For parameterized query formatting.
- [`sql-formatter`](https://www.npmjs.com/package/sql-formatter) - For formatting SQL queries.
- [`sql-highlight`](https://www.npmjs.com/package/sql-highlight) - For adding syntax highlighting to SQL queries.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Author

Developed by imkmx.
