const authSelector = state => state.auth;

export const authorizedSelector = [authSelector, auth => auth.authorized];

export const tokenSelector = [authSelector, auth => auth.token];

export const errorMessageSelector = [authSelector, auth => auth.errorMessage];
