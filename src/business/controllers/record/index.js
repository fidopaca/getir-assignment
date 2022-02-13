const RecordService = require("../../services/record");
const { validate, validationSchemas } = require("../../services/validation/index");

async function getRecords(filters) {
  const filterObj = await validate(validationSchemas.getRecords, filters);
  const records = await RecordService.fetchRecords(filterObj);
  return records;
}

module.exports = {
  getRecords,
};
