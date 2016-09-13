var interceptor = ($q) => {
    'ngInject';
   
    return {
        'responseError': (response) => {
            const status = response.status;
            if (status === 401) {
                //window.location = "/welcomepage/welcomepage";
                ////window.location = "/welcomepage/welcomepage?redirectUrl=" + encodeURIComponent(document.URL);
                return;
            }
            return $q.reject(response);
        }
    }
};

export default interceptor;