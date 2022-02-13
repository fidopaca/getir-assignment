const RecordService = require("../../services/record");

async function getRecords(filters) {
  const records = await RecordService.fetchRecords(filters);
  return records;
}

module.exports = {
  getRecords,
};
