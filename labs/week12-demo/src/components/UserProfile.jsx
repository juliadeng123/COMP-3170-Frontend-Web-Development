import { Link, useLocation } from 'react-router-dom'

export default function UserProfile() {
    const { state: user } = useLocation();

    return(
        <div className='user-profile'>
            <h2>{user.name}</h2>
            <p>Works at: {user.company.name}</p>
            <p>Addrese:
                <span>Phone: {user.phone}</span>
                <span>Email: {user.email}</span>
                <span>Website: {user.website}</span>
            </p>

            {/* {/users/1/posts} */}
            <p>
                <Link to="posts" state={user}>Read {user.name}'s posts</Link>
            </p>
        </div>
    )
}