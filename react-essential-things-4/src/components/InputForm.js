import React, {useState} from 'react'

const InputForm = () => {

    const [inputs, setInputs] = useState({
        name: '',
        name_touched: false,
        email: '',
        email_touched: false
    });

    const handleChange = (event) => {
        const {id, value} = event.target;
        //console.log(id + ' ' + value);
        //console.log([id + '_touched'] + ' ' + value);
        //интересный доступ к названию поля
        //setInputs({...inputs, [id]: value, [id + '_touched']: true})
        setInputs({...inputs, [id]: value})
    }

    const handlerBlur = (event) => {
        const {id} = event.target;
        console.log('Вышли из поля ввода ' + id);
        setInputs({...inputs, [id + '_touched']: true})
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        console.log('Нажали ввод данных с формы')
        const preparedForSavingClient = {...inputs};
        console.log('Data prepared for saving in form:', preparedForSavingClient);
    }

    return (
        <div>
            <p>Работа с формой </p>

            <form onSubmit={formSubmitHandler}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={handleChange}
                    onBlur={handlerBlur}
                    value={inputs.name}
                ></input>
                <label htmlFor='email'>Your E-mail</label>
                <input
                    type='text'
                    id='email'
                    onChange={handleChange}
                    onBlur={handlerBlur}
                    value={inputs.email}></input>
                <br/>
                <div>
                    <button type='submit'>SUBMIT</button>
                </div>

            </form>

        </div>
    )
}
export default InputForm
