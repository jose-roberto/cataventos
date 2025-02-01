const db_connection = require('../config/database');

class Model {
  constructor(table_name) {
    this.table_name = table_name;
    this.db_connection = db_connection;
  }

  find_all() {
    return new Promise((resolve, reject) => {
      try {
        const statement = this.db_connection.prepare(`SELECT * FROM ${this.table_name}`);
        const rows = statement.all();
        resolve(rows);
      } catch (error) {
        reject(error);
      }
    });
  }

  find_by_id(id) {
    return new Promise((resolve, reject) => {
      try {
        const statement = this.db_connection.prepare(`SELECT * FROM ${this.table_name} WHERE id = ?`);
        const row = statement.get(id);
        resolve(row);
      } catch (error) {
        reject(error);
      }
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      try {
        const keys = Object.keys(data).join(', ');
        const placeholders = Object.keys(data).map(() => '?').join(', ');
        const statement = this.db_connection.prepare(`INSERT INTO ${this.table_name}(${keys}) VALUES(${placeholders})`);
        const result = statement.run(Object.values(data));
        resolve({ id: result.lastInsertRowid }); // Retorne o ID do novo registro
      } catch (error) {
        reject(error);
      }
    });
  }

  update(id, data) {
    return new Promise((resolve, reject) => {
      try {
        const updates = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const statement = this.db_connection.prepare(`UPDATE ${this.table_name} SET ${updates} WHERE id = ?`);
        const result = statement.run([...Object.values(data), id]);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      try {
        const statement = this.db_connection.prepare(`DELETE FROM ${this.table_name} WHERE id = ?`);
        const result = statement.run(id);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = Model;
