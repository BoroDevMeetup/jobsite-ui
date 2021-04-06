
import Component from '@glimmer/component';

export default class JobsListFilterComponent extends Component {

    get results() {

        let { query, filter, jobs } = this.args;

        let jobsList;
        if (filter) {
            const formattedFilter = filter.replace(" ", "-").toLowerCase();
            jobsList = jobs.filterBy('jobType', formattedFilter);
        }
        else {
            jobsList = jobs;
        }
        if (query) {
            jobsList = jobsList.filter((job) => {
                return job.title.includes(query) || job.companyName.includes(query);
            });
        }
        return jobsList;
    }
}
