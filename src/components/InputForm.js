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
            <form onSubmit={formSubmitHandler}>
                <div className="form-control">
                    <p className="form-title">Работа с формой ввода данных</p>
                    <label htmlFor='name'>Your Name</label>
                    <input className="form-control" //or invalid from control if validation failed
                           type='text'
                           id='name'
                           onChange={handleChange}
                           onBlur={handlerBlur}
                           value={inputs.name}
                    >
                    </input>
                    {/*проверка что ошибки для поля нет.*/}
                    <p className='error-text'>Name must not be empty.</p>

                    <label htmlFor='email'>Your E-mail</label>
                    <input className="form-control" //or invalid if validation faild
                           type='email'
                           id='email'
                           onChange={handleChange}
                           onBlur={handlerBlur}
                           value={inputs.email}></input>
                    {/*проверка что ошибки для поля нет.*/}
                    <p className='error-text'>Please enter a valid email.</p>
                    <br/>
                    <div>
                        <button className='form-actions'
                                type='submit'>SUBMIT
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default InputForm
