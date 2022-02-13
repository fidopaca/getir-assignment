const Record = require("../../../data/models/Record");

async function fetchRecords({ startDate, endDate, minCount, maxCount }) {
  const records = await Record.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
    },
    {
      $addFields: {
        totalCount: { $sum: "$counts" },
      },
    },

    {
      $match: {
        totalCount: {
          $gte: minCount,
          $lte: maxCount,
        },
      },
    },

    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: 1,
      },
    },
  ]);
  return records;
}

module.exports = {
  fetchRecords,
};
