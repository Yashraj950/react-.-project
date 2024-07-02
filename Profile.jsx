function Profile (){
    return(
        <div>
            <h1>Profile card Challenge</h1>
            <ProfileCard
            name="Alice"
            age ={30}
            greeting={
            
                <div>
                    <strong>Hi Alice, have a woderful day!</strong>
                </div>
            }
            >
                <p>Hobbies: Reading, Haking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
            name="Bob"
            age={25}
            greeting ={
                <div>
                    <strong>Hello Bob, keep up the great work!</strong>

                </div>
            }
            >
                <p>Hobbies: Gaming, Cording</p>
                <button>Contact</button>

            </ProfileCard>
        </div>
    );
}

export default Profile;

function ProfileCard(props){
  return(
    
    <>
    <h2>Name: {props.name}</h2>
    <p>Age:{props.age}</p>

    <p>{props.greeting}</p>
    <div>{props.children}</div>
    </>

  );
}