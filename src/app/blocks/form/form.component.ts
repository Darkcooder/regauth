import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Field {
  type: string;
  label?: string;
  name: string;
  value?: any;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  @Input() fieldset: Field[];
  @Input() submitText: string;

  @Output() formSubmit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
