import { Component, ViewChild, Renderer2 } from '@angular/core';
import { AnimationController, Animation, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('blocks') blocks: any;
  @ViewChild('background') background: any;
  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'Adicionar amigos' },
    { icon: 'phone-portrait-outline', text: 'Compartinhar seu codigo' },
    { icon: 'wallet-outline', text: 'Adicionar cupons' },
    { icon: 'options-outline', text: 'Ajustar dados' },
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'barcode-outline', text: 'Pagar' },
    { icon: 'lock-open-outline', text: 'Bloquear' },
    { icon: 'card-outline', text: 'Adicionar cartão' },
  ];
  public slideOptions: any = { slidesPerView: 3, freeMode: true };
  public items: Array<any> = [
    { icon: 'help-circle-outline', text: 'Me ajuda' },
    { icon: 'person-outline', text: 'Perfil' },
    { icon: 'phone-portrait-outline', text: 'Configurações do app' },
  ];
  public initialStep: number = 0;
  private maxTranslate: number;
  private animation: Animation;


  constructor(
    private animationCtrl: AnimationController,
    private platform: Platform,
    private renderer: Renderer2
  ) {
    this.maxTranslate = this.platform.height() - 200;
  }

  ngAfterViewInit() {
    this.createAnimation();
  }

  toggleBlocks() {
    this.initialStep = this.initialStep === 0 ? this.maxTranslate : 0;
    this.animation.direction(this.initialStep === 0 ? 'reverse' : 'normal').play();
    this.setBackgroundOpacity();
  }

  createAnimation() {
    this.animation = this.animationCtrl.create()
      .addElement(this.blocks.nativeElement)
      .duration(300)
      .fromTo('transform', 'translateY(0)', 'translateY(${this.maxTranslate}px)');
  }

  setBackgroundOpacity() {
    this.renderer.setStyle(this.background.nativeElement, 'opacity', this.initialStep === 0 ? '0' : '1');
  }

}

