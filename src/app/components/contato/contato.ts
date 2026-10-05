import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PERFIL } from '../../core/data/perfil';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contato {
  protected readonly perfil = PERFIL;
  protected readonly ano = new Date().getFullYear();
}
