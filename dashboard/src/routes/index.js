import {createRouter, createWebHashHistory} from 'vue-router';
import UserLoginPage from "@/components/user/LoginPage";
import UserForgetPassword from "@/components/user/ForgetPassword";
import UserRegistrationPage from "@/components/user/RegistrationPage";
import UserRegistrationSuccess from "@/components/user/RegistrationSuccess";
import DashboardHome from "@/components/home/DashboardHome";
import UserIndex from "@/components/user/UserIndex";
import UsersComponent from "@/components/user/UsersComponent";
import SurveysComponent from "@/components/survey/SurveysComponent";
import QuestionComponent from "@/components/question/QuestionComponent";
import QuestionForm from "@/components/question/QuestionForm";
import FeedbacksComponent from "@/components/feedback/FeedbacksComponent";
import AdminIndex from "@/components/admin/AdminIndex";
import QuestionList from "@/components/question/QuestionList";

const routes = [
    {
        path: '/',
        name: 'home',
        component: DashboardHome,
        meta: {requiresAuth: true},

    },
    {
        path: '/admin',
        component: AdminIndex,
        name: 'adminHome',
        meta: {requiresAuth: true},
        children: [
            {
                path: '/surveys',
                name: 'SurveysComponent',
                component: SurveysComponent
            },
            {
                path: '/question/',
                name: 'QuestionComponent',
                component: QuestionComponent,
                children: [
                    {
                        path: '',
                        name: 'QuestionList',
                        component: QuestionList
                    },
                    {
                        path: 'form',
                        name: 'QuestionForm',
                        component: QuestionForm
                    }
                ]
            },
            {
                path: '/feedbacks',
                name: 'FeedbacksComponent',
                component: FeedbacksComponent,
            },
            {
                path: '/users',
                name: 'UsersComponent',
                component: UsersComponent
            },
        ]
    },
    {
        path: '/user',
        name: 'users',
        component: UserIndex,
        children: [
            {
                path: 'login',
                name: 'userLoginPage',
                component: UserLoginPage
            },
            {
                path: 'forget-password',
                name: 'userForgetPassword',
                component: UserForgetPassword
            },
            {
                path: 'register',
                name: 'userRegistrationPage',
                component: UserRegistrationPage
            },
            {
                path: '/registration-success',
                name: 'userRegistrationSuccess',
                component: UserRegistrationSuccess
            }
        ],
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const session = localStorage.getItem('session');
    if (to.meta.requiresAuth && !session) {
        return next({name: 'userLoginPage'});
    }

    return next();
});


export default router;
