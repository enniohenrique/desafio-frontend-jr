import { useNavigate } from 'react-router-dom';
import { LogoMarvel } from '../components/LogoMarvel';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="sm:grid sm:grid-cols-2">
      <div className="bg-black flex flex-col items-center justify-center h-screen p-4">
        <LogoMarvel />
        <form action="" className="flex flex-col  max-w-80 gap-4">
          <h2 className="text-red-600 text-3xl font-semibold">
            Bem- vindo(a) de volta!
          </h2>
          <span className="text-zinc-400">Acesse sua conta:</span>
          <input
            type="text"
            className="p-3 rounded-full"
            placeholder="Usuário"
          />
          <input type="text" className="p-3 rounded-full" placeholder="Senha" />
          <div className="flex justify-between">
            <label htmlFor="esqueiSenha" className="text-zinc-400">
              <input
                type="checkbox"
                name="esqueiSenha"
                id="esqueiSenha"
                className=" mr-2"
              />
              Salva login
            </label>
            <a href="" className="border-b-[1px] border-red-600 text-zinc-400">
              Esqueci a senha
            </a>
          </div>
          <button
            onClick={() => navigate('/personagens')}
            className="text-2xl bg-red-600 text-white p-3 rounded-full"
          >
            Entrar
          </button>
          <p className="text-zinc-400">
            Ainda não tem login ?{' '}
            <a href="" className="text-red-600">
              Cadastre-se
            </a>
          </p>
        </form>
      </div>

      <div className=" hidden sm:block bg-fundo bg-cover bg-no-repeat h-screen">
        <div className=" h-full bg-custom-gradient"></div>
      </div>
    </div>
  );
};
