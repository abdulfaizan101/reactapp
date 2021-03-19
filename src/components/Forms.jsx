import react, { useState } from 'react'

const Forms = ()=> {
    const [name,setName] = useState({'firstName':'','lastName':'','email': ''});
    
    const setNameValue = (e)=> {
        console.log('faizan');

        if( e.target.name == 'firstName'){
            setName({...name , 'firstName': e.target.value});
        }
        if( e.target.name == 'lastName'){
            setName({...name , 'lastName': e.target.value});
        }
        if( e.target.name == 'email'){
            setName({...name , 'email': e.target.value});
        }
        
        //setFirstName(e.target.value);
    }

    const onSubmits = (e) => {
        e.preventDefault();
    }
    return (<>
        <form onSubmit={onSubmits}>
            <h1>hello, {name.firstName} {name.lastName}</h1>
            <p>{name.email}</p>
            <input type="text" name="firstName" value={name.firstName} onChange={setNameValue} />
            <input type="text" name="lastName" value={name.lastName} onChange={setNameValue} />
            <input type="text"n name="email" value={name.email} onChange={setNameValue} />
            <input type="submit"/>
        </form>
    </>);
}

export default Forms;