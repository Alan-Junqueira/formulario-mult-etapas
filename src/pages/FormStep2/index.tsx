import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SelectOption from '../../components/SelectOption';

import Theme from '../../components/Theme';

import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

const FormStep2 = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextStep = () => {
    if (state.name !== '') {
      navigate('/step3');
    } else {
      alert('Preencha os dados');
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz coms eu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar a menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title="Sou programador"
          description="Já programo a 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <Link to="/">Voltar</Link>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

export default FormStep2;
