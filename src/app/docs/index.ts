import apiInfo from './api.info';
import server from './server';
import tags from './tags';
import component from './component';
import apis from './apis/index';

export default {
    ...apiInfo,
    ...server,
    ...tags,
    ...component,
    ...apis,
};
