const Joi = require("joi");

module.exports = {
  validationSchemas: {
    getRecords: Joi.object({
      startDate: Joi.date().iso().required(),
      endDate: Joi.date().iso().min(Joi.ref("startDate")).required(),
      minCount: Joi.number().min(0).required(),
      maxCount: Joi.number().min(0).greater(Joi.ref("minCount")).required(),
    }),
  },
  validate: async (schema, payload) => {
    const validData = await schema.validateAsync(payload, { abortEarly: false });
    return validData;
  },
};
