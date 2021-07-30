
export const Routes = {
    // pages
    Presentation: { path: "/" },
    DashboardOverview: { path: "/dashboard/overview" },
    Assessments: { path: "/dashboard/assessments"},
    ConsumerRequests: { path: "/dashboard/consumer-requests"},
    DataInventory: { path: "/dashboard/data-inventory"},
    DataMapping: { path: "/dashboard/data-mapping"},
    Guides: { path: "/dashboard/guides"},
    Organization: { path: "/dashboard/organization"},
    RiskRegister: { path: "/dashboard/risk-register"},

    Signin: { path: "/auth/sign-in" },
    Signup: { path: "/auth/sign-up" },
    ForgotPassword: { path: "/auth/forgot-password" },
    ResetPassword: { path: "/auth/reset-password" },
    Lock: { path: "/auth/lock" },
    NotFound: { path: "/auth/404" },
    ServerError: { path: "/auth/500" },
};