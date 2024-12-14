import models from '../models';

const { Product } = models;

export class ProductRepo {
  static async create({
    title, description,price, categoryId,
  }) {
    try {
      const product = await Product.create({
        title, description,price, categoryId,
      });
      return product;
    } catch (e) {
      throw new Error(e);
    }
  }
}
// //   static async getOne(recordId, diaryId, userId) {
// //     try {
// //       const data = await Record.findOne({
// //         where: { id: recordId, diaryId },
// //         include: [{
// //           model: Diary,
// //           as: 'diary',
// //           where: { userId },
// //           required: false,
// //           attributes: ['id', 'name', 'userId'],
// //         }],
// //       });
// //       return data;
// //     } catch (e) {
// //       throw new Error(e);
// //     }
// //   }

// //   static async getAll(diaryId) {
// //     try {
// //       const records = await Record.findAll({
// //         where: { diaryId },
// //         include: [{
// //           model: Diary,
// //           as: 'diary',
// //           attributes: ['id', 'name', 'userId'],
// //         }],
// //       });
// //       return records;
// //     } catch (e) {
// //       throw new Error(e);
// //     }
// //   }
// }
