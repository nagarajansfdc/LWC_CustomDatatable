import LightningDatatable from 'lightning/datatable';
import picklistcolumn from './picklistcolumn.html';
import pickliststatic from './pickliststatic.html'

export default class Lwccustomdatatabletype extends LightningDatatable {

static customTypes = {
        picklistColumn: {
            template: pickliststatic,
            editTemplate: picklistcolumn,
            standardCellLayout: true,
            typeAttributes: ['label', 'placeholder', 'options', 'value', 'context', 'variant','name']
        }
    };

}