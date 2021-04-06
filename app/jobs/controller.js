import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class JobsController extends Controller {
    menuList = ['Full Time',
        'Part Time',
        'Free Lance',
        'Contract',
        'Temporary',
        'Internship'];


    queryParams = ['filter'];
    @tracked filter = null;
    @tracked searchField = "";

}