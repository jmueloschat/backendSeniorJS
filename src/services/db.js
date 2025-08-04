import oracledb from 'oracledb';
import dotenv from 'dotenv';
dotenv.config();

async function getConnection() {
  return await oracledb.getConnection({
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECT
  });
}

async function getId(sql, args) {
  const connection = await getConnection();

  const result = await connection.execute(sql, args, { outFormat: oracledb.OUT_FORMAT_OBJECT });

  await connection.close();

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
}

async function getAll(sql, args) {
  const connection = await getConnection();

  const result = await connection.execute(sql, args, { outFormat: oracledb.OUT_FORMAT_OBJECT });

  await connection.close();

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows;
}

export default {
  getConnection,
  getId,
  getAll
};

