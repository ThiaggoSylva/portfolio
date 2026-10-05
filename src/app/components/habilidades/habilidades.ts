import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HABILIDADES } from '../../core/data/habilidades';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Habilidades {
  protected readonly grupos = HABILIDADES;
}
