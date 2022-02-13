module.exports = {
  components: {
    schemas: {
      Record: {
        type: "object",
        properties: {
          startDate: {
            type: "string",
            description: "String representation of start date as YYYY-MM-DD", 
            example: "2020-12-23",
          },
          endDate: {
            type: "string",
            description: "String representation of start end as YYYY-MM-DD", 
            example: "2021-12-23",
          },
          minCount: {
            type: "number",
            description: "Minimum count of sum of counts", 
            example: 27000,
          },
          maxCount: {
            type: "number",
            description: "Maximum count of sum of counts", 
            example: 3000,
          },
        },
        example: {
          startDate: "2016-01-26",
          endDate: "2018-02-02",
          minCount: 2700,
          maxCount: 3000,
        },
      },
      RecordSuccessResponse: {
        type: "object",
        properties: {
          code: {
            type: "number",
            description: "Code 0 for success", 
            example: "0",
          },
          msg: {
            type: "string",
            description: "Status message", 
          },
          records: {
            type: "array",
            items: {
              type: "object",
              properties: {
                key: {
                  type: "string",
                },
                createdAt: {
                  type: "string",
                },
                totalCount: {
                  type: "number",
                },
              },
            },
          },
        },
      },
      ServerErrorResponse: {
        type: "object",
        properties: {
          code: {
            type: "number",
            description: "Code 5 for server error", 
            example: 5,
          },
          msg: {
            type: "string",
            description: "Error message", 
            example: "Oops! Something went wrong. Try again later.",
          },
        },
        example: {
          code: 5,
          msg: "Oops! Something went wrong. Try again later.",
        },
      },
      RequestBodyValidationErrorResponse: {
        type: "object",
        properties: {
          code: {
            type: "number",
            description: "Code 3 for invalid request body",
            example: 3,
          },
          msg: {
            type: "string",
            description: "Invalid key names of request body.",
            example: "Validation Errors: startDate must be in ISO 8601 date format",
          },
        },
        example: {
          code: 3,
          msg: "Validation Errors: startDate must be in ISO 8601 date format",
        },
      },
      MethodNotAllowedErrorResponse: {
        type: "object",
        properties: {
          code: {
            type: "number",
            description: "Code 1 for forbidden http methods",
            example: 1,
          },
          msg: {
            type: "string",
            description: "Not allowed HTTP methods for resource.",
            example: "GET method is not allowed.",
          },
        },
        example: {
          code: 1,
          msg: "GET method is not allowed.",
        },
      },
      ResourceNotFoundErrorResponse: {
        type: "object",
        properties: {
          code: {
            type: "number",
            description: "Error Code",
            example: 2,
          },
          msg: {
            type: "string",
            description: "Invalid requests to unavailable resources",
            example: "Can not find /restv1/record on this server",
          },
        },
        example: {
          code: 2,
          msg: "Can not find /restv1/record on this server",
        },
      },
    },
  },
};
