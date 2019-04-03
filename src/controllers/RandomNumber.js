import Helper from '../helper';

class RandomNumber {
  static async createNumbers(req, res) {
    const newNumbers = await Helper.generateNumbers();
    res.status(201).json({
      success: true,
      message: 'Number created',
      newNumbers
    });
  }

  static async getSavedNumbers(req, res) {
    const numbers = await Helper.getNumbers();
    res.status(200).json({
      success: true,
      message: 'List of Numbers',
      savedNumbers: numbers
    })
  }
};

export default RandomNumber;
