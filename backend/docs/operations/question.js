module.exports = {
    '/question': {
        get: {
            tags: ["Manage Questions"],
            description: "Fetch all questions",
            operationId: "allQuestions",
            parameters: [],
            responses: {
                200: {
                    description: "List of all available questions",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/QuestionResponse",
                            },
                        },
                    },
                },
            },
        },
        post: {
            tags: ["Manage Questions"],
            description: "Add new question",
            operationId: "AddQuestion",
            parameters: [],
            responses: {
                200: {
                    description: "new question is added",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/AddQuestion",
                            },
                        },
                    },
                },
            },
        },
    },
        '/question/{questionNumber}': {
            delete: {
                tags: ["Manage Questions"],
                summary: "Delete a requested question",
                description: " ",
                operationId: "DeleteQuestion",
                produces: [
                    "application/json"
                ],
                parameters: [{
                    name: "questionNumber",
                    description: "delete a enter question number",
                    required: true,
                    type: "integer",
                    format: "int64",
                }],
                responses: {
                    "200":{
                        description: "successfully deleted question",
                        content:{
                            "application/json":{
                                schema:{
                                    $ref:  "#/components/schemas/DeleteQuestion",
                                }

                            }
                        }
                    },
                    "404": {
                        description: "Question number did not find",
                    },
                },
            }
    }
}
