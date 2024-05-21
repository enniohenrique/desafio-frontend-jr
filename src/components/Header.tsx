import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link, NavLink } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { LogoMarvel } from './LogoMarvel';

export const Header = () => {
  return (
    <header className="bg-black">
      <div className="max-w-[1200px] mx-auto flex justify-center sm:justify-between items-center flex-wrap">
        <LogoMarvel />
        <nav className="flex text-white text-xl sm:text-3xl font-semibold gap-5 items-center">
          <NavLink
            to="/personagens"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-zinc-700'
            }
          >
            Personagens
          </NavLink>
          <NavLink
            to="/filmes"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-zinc-700'
            }
          >
            Filmes
          </NavLink>
          <NavLink
            to="/hqs"
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-zinc-700'
            }
          >
            HQs
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <Link to="/">Sair</Link>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};
