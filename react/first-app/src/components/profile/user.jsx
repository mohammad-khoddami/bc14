export default function User(props) {
    const user = props.data;
    return (
        <div>
            <h1>{user.name}</h1>
            <h2>
                {user.job[0]} , {user.job[1]}
            </h2>
            <p>{user.disc}</p>
        </div>
    );
}
