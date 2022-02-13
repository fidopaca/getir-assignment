module.exports = {
  post: {
    tags: ["Post Records"],
    operationId: "Post Records",
    description: "Returns records according to the given filter in request body.",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Record",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Records data after successfull request.",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RecordSuccessResponse", 
            },
          },
        },
      },
      500: {
        description: "Occurs when server encounters with an exception.", 
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ServerErrorResponse", 
            },
          },
        },
      },
      400: {
        description:"Invalid request body.",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RequestBodyValidationErrorResponse", 
            },
          },
        },
      },
      404: {
        description:"Requested resource not foun.",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ResourceNotFoundErrorResponse", 
            },
          },
        },
      },
      405: {
        description:"Not allowed HTTP methods for resource.",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/MethodNotAllowedErrorResponse", 
            },
          },
        },
      }
    },
  },
}