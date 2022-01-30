const localizedContent = {
    type: "object",
    properties: {
        _id: {
            type: "string",
            description: "Question identification number",
            example: "61e34633384df7782b1dafc0",
        },
        lang: {
            type: "string",
            description: "en character language code",
            example: "en",
        },
        content: {
            type: "string",
            description: "Content of the string on the provided language",
            example: "Overall Well-being",
        }
    }
};

const category = {
    type: "object",
    properties: {
        _id: {
            type: "string",
            description: "Question identification number",
            example: "61e34633384df7782b1dafc0",
        },
        titles:
            {
                type: "array",
                items: localizedContent
            },
        slug: {
            type: "string",
            description: "machine readable category name",
            example: "overall-well-being",
        },
    },
};

const question = {
    type: "object",
    properties: {
        _id: {
            type: "string",
            description: "Question identification number",
            example: "61e34633384df7782b1dafc0",
        },
        number: {
            type: "number",
            description: "Question Number",
            example: "1",
        },
        titles: {
            type: "array",
            items: localizedContent,
            description: "The title of questions in multiple languages",
            example: [
                {
                    "lang": "en",
                    "content": "I am doing well at work"
                },
                {
                    "lang": "vi",
                    "content": "something else"
                }
            ]

        },
        answerType: {
            type: "scale",
            description: "multiple choice of answer",
            example: "happy, sad, moderate",
        },
        slug: {
            type: "string",
            description: "machine readable questions",
            example: "are-you-happy",
        },
        category: {
            type: "array",
            description: "multiple choice of answer",
            items: category
        },
        additionalInformation: {
            type: "array",
            description: "additional information of operations",
            items: localizedContent,
            example: [
                {
                    "lang": "en",
                    "content": "No explanation needed"
                }
            ]

        },
        answers: {
            type: "array",
            items: localizedContent,
            description: "type of answer",
            example: [
                {
                    "lang": "en",
                    "content": "1"
                }
            ]
        }
    },
};

const questionResponse = {
    type: "object",
    properties: {
        status: {
            type: "string",
            description: "Status of the request",
            example: "success"
        },
        message: {
            type: "string",
            description: "Message describing the response",
            example: "Questions retrieved"
        },
        data: {
            type: "array",
            items: question
        }
    }
};
const error = {
    type: "object",
    properties: {
        message: {
            type: "string",
            description: "Error message",
            example: "Not found",
        },
        internal_code: {
            type: "string",
            description: "Error internal code",
            example: "Invalid parameters",
        },
    },
};


const addQuestionResponse = {
    type: "object",
    properties: {
        status: {
            type: "string",
            description: "Status of the request",
            example: "success"
        },
        message: {
            type: "string",
            description: "Message describing the response",
            example: "Questions added"
        },
        data: {
            items: question
        }
    }
};

const deleteQuestion = {
    type: "object",
    properties: {
        status: {
            type: "string",
            description: "Status of the request",
            example: "success"
        },
        message: {
            type: "string",
            description: "Message describing the response",
            example: "Question deleted"
        },
    },
};


const factory = {
    type: "object",
    properties: {
        _id: {
            type: "string",
            description: "factory identification number",
            example: "61e34633384df7782b1dafc0",
        },
        name: {
            type: String,
            description: "name of factory",
            required: true,
            example: "vaude",
        },
        code: {
            type: String,
            description: "factory related code",
            required: true,
            example: "1234",
        }
    }

};

const factoryResponse = {
    type: "object",
    properties: {
        status: {
            type: "string",
            description: "Status of the request",
            example: "success"
        },
        message: {
            type: "string",
            description: "Message describing the response",
            example: "Factory retrieved"
        },
        data: {
            type: "array",
            items: factory,
        }
    }

}


module.exports = {
    components: {
        schemas: {
            QuestionResponse: questionResponse,
            AddQuestion: addQuestionResponse,
            DeleteQuestion: deleteQuestion,
            FactoryResponse: factoryResponse,
            Error: error,
        },
    },
};