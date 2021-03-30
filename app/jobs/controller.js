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
    @tracked model;

    get filteredJobs() {
        let filter = this.filter;
        let jobs = this.model;
        const formattedFilter = filter.replace(" ", "-").toLowerCase();
        if (filter) {
            return jobs.filterBy('jobType', formattedFilter);
        } else {
            return jobs;
        }
    }
}