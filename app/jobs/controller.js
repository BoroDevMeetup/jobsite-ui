import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class JobsController extends Controller {
    menuList = ['Full Time',
        'Part Time',
        'Free Lance',
        'Contract',
        'Temporary',
        'Internship'];

    // jobs = this.store.peekAll('job');

    @action
    filterJobs(filterArg) {
        alert(filterArg);
        const jobs = this.store.peekAll('job');

    }
}