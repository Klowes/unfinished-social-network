import { useSelector } from 'react-redux';

const useUser = userID => useSelector(s =>
    s.users.find(user => user.userID === userID) || s.users[0]
);

export default useUser;