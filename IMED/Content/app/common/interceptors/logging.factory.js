var interceptor = ($log) => {
    'ngInject';

    return {
        'responseError': (rejection) => {
            $log.error('$httpProvider', rejection);
        }
    }
};

export default interceptor;