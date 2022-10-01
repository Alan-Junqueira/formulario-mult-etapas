import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Theme from '../../components/Theme';

import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

const FormStep1 = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step2');
    } else {
      alert('Preencha os dados');
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo</p>

        <hr />

        <label htmlFor="">
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

export default FormStep1;
