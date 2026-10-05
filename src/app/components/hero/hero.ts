import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { PERFIL } from '../../core/data/perfil';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly perfil = PERFIL;
  protected readonly textoDigitado = signal(PERFIL.frases[0]);

  private readonly destroyRef = inject(DestroyRef);
  private temporizador?: ReturnType<typeof setTimeout>;

  constructor() {
    const reduzirMovimento =
      typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduzirMovimento) {
      this.textoDigitado.set('');
      this.agendar(500, () => this.digitar(0, 0, false));
    }

    this.destroyRef.onDestroy(() => clearTimeout(this.temporizador));
  }

  private digitar(indiceFrase: number, tamanho: number, apagando: boolean): void {
    const frases = this.perfil.frases;
    const frase = frases[indiceFrase];
    const novoTamanho = tamanho + (apagando ? -1 : 1);
    this.textoDigitado.set(frase.slice(0, novoTamanho));

    if (!apagando && novoTamanho === frase.length) {
      this.agendar(1800, () => this.digitar(indiceFrase, novoTamanho, true));
    } else if (apagando && novoTamanho === 0) {
      this.agendar(350, () => this.digitar((indiceFrase + 1) % frases.length, 0, false));
    } else {
      this.agendar(apagando ? 30 : 65, () => this.digitar(indiceFrase, novoTamanho, apagando));
    }
  }

  private agendar(atrasoMs: number, acao: () => void): void {
    this.temporizador = setTimeout(acao, atrasoMs);
  }
}
