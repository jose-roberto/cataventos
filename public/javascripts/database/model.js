const db = require('./create_database');

class Model {
  constructor(tableName) {
    this.tableName = tableName;
  }

  findAll() {
    const statement = db.prepare(`SELECT * FROM ${this.tableName}`);
    return statement.all();
  }

  findById(id) {
    const statement = db.prepare(`SELECT * FROM ${this.tableName} WHERE id = ?`);
    return statement.get(id);
  }

  create(data) {
    const keys = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const statement = db.prepare(`INSERT INTO ${this.tableName}(${keys}) VALUES(${placeholders})`);
    return statement.run(Object.values(data));
  }

  update(id, data) {
    const updates = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const statement = db.prepare(`UPDATE ${this.tableName} SET ${updates} WHERE id = ?`);
    return statement.run([...Object.values(data), id]);
  }

  delete(id) {
    const statement = db.prepare(`DELETE FROM ${this.tableName} WHERE id = ?`);
    return statement.run(id);
  }
}

module.exports = Model;
