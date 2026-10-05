import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PERFIL } from '../../core/data/perfil';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sobre {
  protected readonly perfil = PERFIL;
}
