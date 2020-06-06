import React, {useState} from 'react'  //rafce
import { Modal, Button } from 'antd'


const UserList = props => {

    const {user} = props;
    const {handlerDelete, handlerUpdate}  = props;
    const [visible, setvisible] = useState(false);
    const [element, setelement] = useState('');

    const showModal = (params) => {
        console.log("asdfsafasdfasdfsa");
        setvisible(true);
        setelement(params);
    };
    
    const handleOk = e => {
        console.log(e);
        handlerUpdate(element);
        setvisible(false)
      };
    
    const  handleCancel = e => {
        console.log(e);
        setvisible(false)

      };

     const _handlerOnChange = e =>{
         setelement({...element,
            [e.target.name]: e.target.value
         })
     } 

    return (
        <div style= {{ margin: '5% 0'}}>
        <div style={styles.divContainer}>
            <div style={styles.divState}>ID</div>
            <div style={styles.divState}>Name</div>
            <div style={styles.divState}>Email</div>
            <div style={styles.divState}>UPDATE/DELETE</div>
        </div>
            {
                user.map((element,index) =>(
                    <div key={index} style={styles.divContainer}>
                        <div style={styles.divState}>{element.id}</div>              
                        <div style={styles.divState}>{element.userName}</div>              
                        <div style={styles.divState}>{element.userEmail}</div>
                        <div style={{...styles.divState, display:'flex', justifyContent: 'center'}}> 
                            <div style={{...styles.btnStyle, backgroundColor: 'blue'}}  onClick={()=>showModal(element)}>
                                UPDATE
                            </div>
                            
                            <div style={{...styles.btnStyle, backgroundColor: 'red'}}  onClick = {() => handlerDelete(element.id)}>
                                DELETE
                            </div>
                        </div>
                    </div>
                ))
            }
            <Modal
                            title="Basic Modal"
                            visible={visible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            >
                            <input type="text" value={element.id} onChange={_handlerOnChange} name='userId' disabled/>
                            <input type="text" value={element.userName} onChange={_handlerOnChange} name='userName'/>                            
                            <input type="text" value={element.userEmail} onChange={_handlerOnChange} name='userEmail'/>

                            </Modal>
        </div>
    )
}


const styles = { 
    divContainer:{
        width:"100%",
        display: "flex",
        justifyContent: 'center'
    },
    divState: {
        border: "1px solid black",
        width: '30%'
    },
    btnStyle: {
        width: "25%",
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2% 2%',
        borderRadius:25,
        color: '#FFFFFF'
    }
}

UserList.defaultProps = {
    user: []
};

export default UserList
