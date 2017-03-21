import {autoinject} from 'aurelia-framework';
import {MdToastService} from 'aurelia-materialize-bridge';
import {I18N} from 'aurelia-i18n';
//import {DialogService} from 'aurelia-dialog';

@autoinject()
export class HomeViewModel {
    message: string;

    constructor(private toastService:MdToastService,
                private  i18n:I18N,
    //            private dialogService:DialogService
    ){}

    buttonClicked(){
        this.toastService.show(this.i18n.tr('buttonClickedMsg'),5000);
    }

    dialogButtonClicked(){
        //this.dialogService.open({ viewModel: Prompt, model: 'Good or Bad?'})
    }
}
