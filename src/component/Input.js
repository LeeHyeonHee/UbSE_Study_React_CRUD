import React, {useState} from 'react'  //useState 새로운 상태 생성

const Input = props => {

    const {handlerInsert} = props;

    const [people, setpeople] = useState({userName:"", userEmail:""});

    console.log(props);

    const _handlerOnChange = e  => { // 해당 컴포넌트 내에서 쓰는거면 _ 붙이고 명명  전달용이면 언더바없이 
        setpeople({...people,
            [e.target.name]: e.target.value
        })
    }
//            <div style={{...styles.inputBar, backgroundColor: 'red'}}>  기존 style에서 일부만 변경할때 사용방법
    return (
        <div style={styles.divContainer}>
            <div>
                Name
                <input style={styles.inputBar} type='text' name='userName' onChange={_handlerOnChange}></input>
            </div>
            
            <div>
                Email
                <input style={styles.inputBar} type='text' name='userEmail' onChange={_handlerOnChange}></input>
            </div>

            <div style={styles.btnStyle}  onClick={()=> handlerInsert(people)}>
                    버튼
                </div>
        </div>
    )
}

const styles = {
    divContainer: {
        width:"100%",
        display: "flex",
        justifyContent: 'center'
    },
    inputBar: {
        width: "40%",
        height: 25, 
        padding: 10,
        backgroundColor: "#F3F3F3",
        borderRadius: 25,
        border: '1px solid #F3F3F3'
    },
    btnStyle: {
        width: "20%",
        height: 25,
        padding: 10,
        backgroundColor: "#ABCDAA",
        borderRadius:25
    }
}

Input.defaultProps = {
    handlerInsert:() => {}
}

export default Input
