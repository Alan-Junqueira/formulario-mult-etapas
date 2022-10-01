import { ChangeEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Theme from '../../components/Theme';

import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

const FormStep3 = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert('Preencha os dados')
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos pra conseguirmos entrar em contato.</p>

        <hr />

        <label htmlFor="">
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="">
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <Link to="/step2">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};

export default FormStep3;
