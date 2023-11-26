import { Component, ViewEncapsulation} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SugerenciasComponent {

  constructor(private SanaURL: DomSanitizer){}

  seleccionado: any = this.SanaURL.bypassSecurityTrustResourceUrl("https://static.vecteezy.com/system/resources/thumbnails/017/504/043/small/bodybuilding-emblem-and-gym-logo-design-template-vector.jpg");

  selectVideo(video: any) {
    console.log('video selecionado: ', video);
    this.seleccionado = this.SanaURL.bypassSecurityTrustResourceUrl(video.url);
  }

  videos_Full_body = [
    { title: 'Rutina Full Body (A)', url: 'https://www.youtube.com/embed/VFqTAgyXbYI?si=1iiiqWu1ZGzuntn9' },
  ];

  videos_Full = [
    { title: 'Rutina Full Body (B)', url: 'https://www.youtube.com/embed/ULkxwUCdC1Y?si=HTR94jFk869r9rwT' },
  ];

  videos_Torso = [
    { title: 'Rutina Torso/Pierna (A)', url: 'https://www.youtube.com/embed/wFWL3ZXvPP4?si=Q6BjvuT6yTHjfp0e' },
  ];

  videos_Torso2 = [
    { title: 'Rutina Torso/Pierna (B)', url: 'https://www.youtube.com/embed/LFR7BPbLmTc?si=1WB-DSq7rL-xr1zn' },
  ];
}
