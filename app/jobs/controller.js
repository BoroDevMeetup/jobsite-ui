import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

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
    @tracked searchField = "";

    get filteredJobs() {

        let filter = this.filter;
        let jobs = this.model;
        if (filter) {
            const formattedFilter = filter.replace(" ", "-").toLowerCase();
            return jobs.filterBy('jobType', formattedFilter);
        } else {
            return jobs;
        }
    }

    // TODO: impliment search functionality
    @action searchJobs() {
        console.log(this.searchField);
    }
}