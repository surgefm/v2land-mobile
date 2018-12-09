const userSelector = state => state.user;

export const userDataSelector = [userSelector, user => user.data];

export const userEmailSelector = [userDataSelector, data => data && data.email]

export const userNameSelector = [userDataSelector, data => data && data.username]

export const userRoleSelector = [userDataSelector, data => data && data.role]
