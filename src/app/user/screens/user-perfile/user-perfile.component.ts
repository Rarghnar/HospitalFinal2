import { Component, Input, OnInit } from '@angular/core';
import { Medico } from '../../../core/models/medico.model';
import { FormGroup, FormControl } from '@angular/forms';
import { SupportProviderService } from '../../../core/providers/support-provider.service';

@Component({
  selector: 'app-user-perfile',
  templateUrl: './user-perfile.component.html',
  styleUrls: ['./user-perfile.component.less']
})
export class UserPerfileComponent implements OnInit {
  public supportFormGroup: FormGroup;

  constructor(
    private supportProvider: SupportProviderService
  ) {
    this.supportFormGroup = new FormGroup({
      description: new FormControl('')
    });
   }

  ngOnInit(): void {
    /*this.supportFormGroup.get('description').valueChanges.subscribe((key) => {
      console.log(key);
    })*/
  }

  public addEnfermera() {
    console.log(this.supportFormGroup.get('nombres').value);
    let enfermera = {
      description: this.supportFormGroup.get('nombres').value
    }
    return this.supportProvider.addEnfermera(enfermera)
  }

}
