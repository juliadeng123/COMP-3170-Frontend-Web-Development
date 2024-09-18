function Greeting({ person }) {
    console.log(person);

    // const {name, occupation} = props.person;
    const {name, occupation} = person;

    return (
        <>
            <p>Hello there!</p>
            {/* <p>My name is {props.person.name}, I am a {props.person.occupation}</p> */}
            <p>My name is {name}, I am a {occupation}</p>
        </>
    );
}

export default Greeting
