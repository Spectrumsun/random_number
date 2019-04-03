import 'core-js';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const baseDir = path.join(__dirname, '/../../data/number.json');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

class Helper {
  static async saveNumber(data) {
    try {
     const findFile = await this.findFile();
      const newData = {
        ...findFile,
        ...data
      }
      const stringData = JSON.stringify(newData);
      await writeFile(baseDir, stringData);
    } catch (error) {
      return error
    }
  }

  static async getNumbers() {
    try {
      const files = await readFile(baseDir, "utf8")
      return this.convertToArray(this.parseJsonToObject(files));
    } catch (error) {
      return error
    }
  }

  static async generateNumbers() {
    try {
     const savedNumbers = await this.findFile();
      const currentNumbers = {};
      const quantity = 1000;
      for (let i = 0; i < quantity; i++) {
        const number = Math.floor(Math.random() * 8 + 1) + Math.random().toString().slice(2, 10);
        const join = 0+number
        if (savedNumbers[join]) delete join[i];
        currentNumbers[join] = true;
      }
      await this.saveNumber(currentNumbers);
      return this.convertToArray(currentNumbers);
    } catch (error) {
      return error
    }
  }

  static parseJsonToObject(str) {
    try {
      const obj = JSON.parse(str);
      return obj;
    } catch (e) {
      return {};
    }
  }

  static convertToArray(numbers) {
    const convert = Object.keys(numbers).map(data => {
      return data;
    })
    return convert;
  }

  static async findFile() {
    try {
      const findFile = await readFile(baseDir, "utf8")
      const savedNumbers = this.parseJsonToObject(findFile);
      return savedNumbers;
    } catch (error) {
      return error;
    }
  }
}

export default Helper;