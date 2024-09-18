function Greeting(props) {
    console.log(props)
    return (
        <>
            <p>Hello there!</p>
            <p>My name is {props.name}</p>
            <p>I work as a {props.occupation}</p>
        </>
    );
}

export default Greeting
