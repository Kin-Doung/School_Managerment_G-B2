// src/utils/validators.ts
export const validateUsername = (username: string): boolean => {
    return username.length >= 3;
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 6;
};