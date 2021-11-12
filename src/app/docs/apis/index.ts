import login from './users/login';
import get_user_by_mobile from './users/get_user_by_mobile';
import get_user_by_name from './users/get_user_by_name';
import update_user from './users/update_user';

export default {
    paths: {
        '/api/v1/auth/login': {
            ...login,
        },
        '/api/v1/auth/user': {
            ...get_user_by_mobile,
        },
        '/api/v1/auth/user/{name}': {
            ...get_user_by_name,
        },
        '/api/v1/auth/update-user': {
            ...update_user,
        },
    },
};
