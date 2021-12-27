import {useMoralis} from 'react-moralis';
import Img from './Img.styled';

function Avatar() {
    const {user, logout} = useMoralis()
    console.log(user);
    return (
        <Img
            avatar
            src={`https://avatars.dicebear.com/api/bottts/${user.id||user.get("username")}.svg`}
            onClick={() => logout && logout()}
            layout='fill'
            objectFit='cover'
        />
    )
}

export default Avatar
