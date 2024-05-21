import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Props {
  imagem: string;
  title: string;
  description: string;
}

export const CardMarvel = ({ imagem, title, description }: Props) => {
  return (
    <div className="relative shrink-0">
      <img src={imagem} className="" alt=""></img>
      <div className="absolute bottom-0 bg-custom-gradient-red rounded-3xl p-5 text-center flex flex-col gap-4 w-full min-h-[65%] justify-between">
        <div>
          <h2 className="text-2xl text-white font-semibold mb-3">{title}</h2>
          <p className="text-white text-sm text-start">{description}</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="text-2xl text-white ">Ver detalhes</button>
          </DialogTrigger>
          <DialogContent>
            <div className="block sm:flex bg-red-600 text-white rounded-t-full sm:rounded-l-full sm:rounded-r-none">
              <img src={imagem} alt="" />
              <div className="flex items-start mt-10 flex-col mx-auto gap-3">
                <h2 className="text-3xl font-semibold text-center">{title}</h2>
                <div className="text-lg">
                  <p className="font-semibold text-xl">Aparições: </p>
                  <p>vingadores</p>
                  <p>vingadores</p>
                  <p>vingadores</p>
                </div>
                <h3 className="text-3xl font-semibold text-center">
                  Avaliações dos Fãs
                </h3>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
