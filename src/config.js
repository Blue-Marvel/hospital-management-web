const BASE_URL = "http://localhost:8000/api/v1";


const SIGN_UP_USER = `${BASE_URL}/auth/register`;
const SIGN_IN_USER = `${BASE_URL}/auth/login`;
const GET_ALL_DOCTORS = `${BASE_URL}/auth/fetchDoctors`;
const CREATE_APPOINTMENT = `${BASE_URL}/appointment`;
const GET_APPOINTMENT = `${BASE_URL}/appointment`;
const EDIT_APPOINTMENT = `${BASE_URL}/appointment`;
const DELETE_APPOINTMENT = `${BASE_URL}/appointment`;
const APPROVE_APPOINTMENT = `${BASE_URL}/appointment`


export{ SIGN_IN_USER, SIGN_UP_USER , GET_ALL_DOCTORS, CREATE_APPOINTMENT, GET_APPOINTMENT, EDIT_APPOINTMENT, DELETE_APPOINTMENT, APPROVE_APPOINTMENT };