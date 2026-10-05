import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contato } from './components/contato/contato';
import { Habilidades } from './components/habilidades/habilidades';
import { Hero } from './components/hero/hero';
import { Projetos } from './components/projetos/projetos';
import { Sobre } from './components/sobre/sobre';
import { Topo } from './components/topo/topo';

@Component({
  imports: [Topo, Hero, Sobre, Habilidades, Projetos, Contato],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
