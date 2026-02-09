export const validateEmail = (email) => {
    if (!email || !email.trim()) return false;

    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

    return regex.test(email.trim());
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
