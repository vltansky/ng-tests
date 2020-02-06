import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class I18nComponent implements OnInit {

  @Input() banking_site: string;
  @Input() key: string;
  constructor() { }

  ngOnInit() {
  }

}
