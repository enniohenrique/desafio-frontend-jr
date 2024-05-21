import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CardMarvel } from '@/components/CardMarvel';
import { Header } from '@/components/Header';
import { cardsHqs } from '@/infoCardsMarvel/Hqs';

export const HQs = () => {
  return (
    <>
      <Header />
      <div className="flex h-[calc(100vh-55px)] items-center justify-center relative">
        <div className="bg-black w-1/2 h-full"></div>
        <div className="bg-fundo bg-cover bg-center bg-no-repeat h-full w-1/2">
          <div className="h-full bg-custom-gradient"></div>
        </div>
        {/* container cards */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div>
            <Select>
              <SelectTrigger className="w-[180px] mb-5 bg-black border-red-500 text-red-500 focus:!ring-0 text-xl">
                <SelectValue placeholder="Filtrar por" />
              </SelectTrigger>
              <SelectContent className="bg-black text-red-500 border-red-500 ">
                <SelectItem value="lancamento" className="text-xl">
                  Lançamento
                </SelectItem>
                <SelectItem value="cronologia" className="text-xl">
                  Cronologia
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-10 max-w-[289px] sm:max-w-[578px] lg:max-w-[867px]">
              <Carousel>
                <CarouselContent>
                  {cardsHqs.map((card, index) => (
                    <CarouselItem
                      className=" sm:basis-1/2 lg:basis-1/3"
                      key={index}
                    >
                      <CardMarvel
                        imagem={card.image}
                        title={card.title}
                        description={card.description}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="!bg-transparent border-none !text-red-600 " />
                <CarouselNext className="!bg-transparent border-none !text-red-600" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
