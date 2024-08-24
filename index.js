const pgPromise = require('pg-promise');
const { format: sqlFormatter } = require('sql-formatter');
const { highlight } = require('sql-highlight');

const pgp = pgPromise();

function sqlQueryFormat(query, params, prettyCfg) {
  prettyCfg = prettyCfg || { language: 'postgresql' };

  const formattedQuery = pgp.as.format(query, params);
  const prettyQuery = sqlFormatter(formattedQuery, prettyCfg);
  const highlightedQuery = highlight(prettyQuery);

  return highlightedQuery;
}

module.exports = sqlQueryFormat;