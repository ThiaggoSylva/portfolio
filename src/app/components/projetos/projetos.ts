import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJETOS } from '../../core/data/projetos';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projetos {
  protected readonly projetos = PROJETOS;
}
