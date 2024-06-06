import './directmessage.scss'
import UserMenuItem from './UserMenuItem'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'

const DirectMessage = () => {
    const users = [
        { name: 'John Doe', userImage: user1 },
        { name: 'Jane Doe', userImage: user2 },
        { name: 'John Smith', userImage: user3 },
        { name: 'Jane Smith', userImage: user4 },
        { name: 'John Smith', userImage: user3 },
        { name: 'Jane Smith', userImage: user4 },
        { name: 'John Smith', userImage: user3 },
        { name: 'Jane Smith', userImage: user4 },
    ]
    return (
        <div className='directsms'>
            <div className="writeSms">
                <h4>Direct Message</h4>
                <button className='createMsgBtn'>+</button>
            </div>
            <div className="closeContact">
                <UserMenuItem users={users} />
            </div>
        </div>
    )
}

export default DirectMessage