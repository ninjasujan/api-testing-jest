export const platform = {
    ANDROID: 'ANDROID',
    IOS: 'IOS',
    WEB: 'WEB',
};

export const loginMethod = {
    GOOGLE: 'GOOGLE',
    OTP: 'OTP',
    FACEBOOK: 'FACEBOOK',
};

export const genderType = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
};

export const latitudeRange = {
    min: -90,
    max: 90,
};

export const longitudeRange = {
    min: -180,
    max: 180,
};

export const longitudeError = `Longitude must be float and with in the range of ${longitudeRange.min} to ${longitudeRange.max}`;

export const latitudeError = `Latitude must be float and with in the range of ${latitudeRange.min} to ${latitudeRange.max}`;
