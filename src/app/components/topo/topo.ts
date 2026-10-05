import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemDeNavegacao } from '../../core/models';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.html',
  styleUrl: './topo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Topo {
  protected readonly itens: ItemDeNavegacao[] = [
    { id: 'sobre', rotulo: 'Sobre' },
    { id: 'habilidades', rotulo: 'Habilidades' },
    { id: 'projetos', rotulo: 'Projetos' },
    { id: 'contato', rotulo: 'Contato' },
  ];
}
