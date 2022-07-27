//Database bilgi ekleme,silme değiştirm
import {useState,useEffect} from "react"
import firebase from "./firebase"
import { getDatabase,ref,set,push, onValue, remove,update} from "firebase/database";
import Toastify from "./Toastify"


//Bilgi ekleme
export const AddUser = (info) => {
    const db = getDatabase(firebase);
    const userRef=ref(db, 'users/')
    const newUserRef = push(userRef);
    set(newUserRef, {
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    });
 
  
}

// Bilgi çağırma

export const useFetch=()=>{
    const [IsLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(()=>{
    
        setIsLoading(true);
        const db = getDatabase(firebase);
        const userRef = ref(db,"users");
        onValue(userRef,(snapshot)=>{
            const data=snapshot.val();
            const contactsArray=[]
            for ( let id in data){
                contactsArray.push({id,...data[id]})
            }
            setContactList(contactsArray)
            setIsLoading(false)
        }  
        )

    },[])

    return {IsLoading,contactList};
}

export const DeleteUser=(id)=>{
 
    const db = getDatabase(firebase);
    const userRef = ref(db,"users");

    remove(ref(db,"users/"+id))
    Toastify("Kayıt silindi")
}

export const EditUser=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["users/"+info.id]=info;
    return update(ref(db),updates);
}