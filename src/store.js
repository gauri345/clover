import {reactive} from "vue";

const store = {
    debug: true,
    state: reactive({
        currentQuestion: {},
        nextQuestion: {},
        previousQuestion: {},
        allQuestions: [
            {
                questionNumber: 1,
                questionTitle: "I am doing well at work",
            },
            {
                questionNumber: 2,
                questionTitle: "My employer ist taking care of me",
            },
            {
                questionNumber: 3,
                questionTitle: "My workload is manageable",
            },
            {
                questionNumber: 4,
                questionTitle: "The physical working conditions are good",
            },
            {
                questionNumber: 5,
                questionTitle: "I feel that my job is secure",
            },
            {
                questionNumber: 6,
                questionTitle: "I feel that my job is meaningful in my life",
            },
            {
                questionNumber: 7,
                questionTitle: "My work environment is safe",
            },
            {
                questionNumber: 8,
                questionTitle: "I feel that I am part of a team",
            },
            {
                questionNumber: 9,
                questionTitle: "I feel that I have a good work-life balance",
            },
            {
                questionNumber: 10,
                questionTitle: "I understand what is expected from me at work",
            },
            {
                questionNumber: 11,
                questionTitle: "I receive a fair wage",
            },
            {
                questionNumber: 12,
                questionTitle: "At work, I have the opportunity to learn new skills",
            },
            {
                questionNumber: 13,
                questionTitle: "I have NEVER experienced abuse at work (e.g., being insulted)",
            },
            {
                questionNumber: 14,
                questionTitle: "At my work, I feel bursting with energy",
            },
            {
                questionNumber: 15,
                questionTitle: "I am enthusiastic about my job",
            },
            {
                questionNumber: 16,
                questionTitle: "I am proud of the work that I do",
            },
            {
                questionNumber: 17,
                questionTitle: "I feel healthy at work in general",
            },
            {
                questionNumber: 18,
                questionTitle: "I am able to eat healthy food at work",
            },
            {
                questionNumber: 19,
                questionTitle: "I have access to clean and sufficient drinking water at work",
            },
            {
                questionNumber: 20,
                questionTitle: "I have good housing",
            },
            {
                questionNumber: 21,
                questionTitle: "What is your gender?",
            },
            {
                questionNumber: 22,
                questionTitle: "What is your age?",
            },
            {
                questionNumber: 23,
    
                questionTitle: "In which position are you working?",
            },
            {
                questionNumber: 24,
                questionTitle: "Please use this text box to explain any of your answers here. We would like to hear your feedback about how you feel at work. Please be aware that if you would like to make a complaint anonymously or raise a problem that you do not feel comfortable raising with a manager, you can do so by clicking here. This link will bring you to Vaude’s complaint mechanism system that can provide you with resources and options that can help."
            },
        ]
    }),

    setQuestionsAction(questionNumber) {
        const previousQuestion = this.findQuestion(questionNumber - 1);
        if (previousQuestion.length > 0) {
            this.state.previousQuestion = previousQuestion[0];
        }

        const currentQuestion = this.findQuestion(questionNumber);
        if (currentQuestion.length > 0) {
            this.state.currentQuestion = currentQuestion[0];
        }

        const nextQuestion = this.findQuestion(questionNumber + 1);
        if (nextQuestion.length > 0) {
            this.state.nextQuestion = nextQuestion[0];
        }
    },

    findQuestion(questionNumber) {
        return this.state.allQuestions.filter(question => question.questionNumber === questionNumber);
    },

    clearSelectedQuestions() {
        this.state.currentQuestion = {}
        this.state.nextQuestion = {}
        this.state.previousQuestion = {}
    },

    totalAvailableQuestions() {
        return this.state.allQuestions.length;
    }
}

export default store;