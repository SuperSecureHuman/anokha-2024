const BASE_URL = "https://anokha.amrita.edu/api/auth";
const HACKATHON_URL = "https://anokha.amrita.edu/api/intel";

export const EDIT_PROFILE_URL = "https://anokha.amrita.edu/api/user/editStudentProfile";
export const STUDENT_PROFILE_URL = "https://anokha.amrita.edu/api/user/getStudentProfile";
export const LOGIN_URL = BASE_URL + "/loginStudent";
export const REGISTER_URL = BASE_URL + "/registerStudent";
export const STUDENT_REGISTER_VERIFY_URL = BASE_URL + "/verifyStudent";
export const STUDENT_FORGOT_PASSWORD_URL = BASE_URL + "/forgotPasswordStudent";
export const STUDENT_RESET_PASSWORD_URL = BASE_URL + "/resetPasswordStudent";

export const HACKATHON_TEAM_REGISTER_URL =  HACKATHON_URL + "/registerTeam"; 
export const HACKATHON_DASHBOARD_URL =  HACKATHON_URL + "/getDashBoard"; 
export const HACKATHON_FIRST_ROUND_SUBMISSION_URL = HACKATHON_URL + "/submitFirstRound";
export const HACKATHON_EDIT_FIRST_ROUND_SUBMISSION_URL = HACKATHON_URL + "/editFirstRoundSubmission";

// These urls might be  wrong .. /auth/user (needs fix later)
export const ALL_EVENTS_URL = BASE_URL + "/user/getAllEvents";
export const EVENT_DATA_URL = BASE_URL + "/user/getEventData";
export const STAR_UNSTAR_EVENT_URL = BASE_URL + "/user/toggleStarredEvent";
