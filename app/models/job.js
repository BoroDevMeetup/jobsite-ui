import Model, { attr } from '@ember-data/model';

export default class JobModel extends Model {
  @attr('string') title;
  @attr('string') bio;
  @attr('string') facebook;
  @attr('string') twitter;
  @attr('string') linkedIn;
  @attr('string') applyLink;
  @attr('string') jobType;
  @attr('string') xp;
  @attr('string') remote;
  @attr('string') jobDescription;
  @attr('string') city;
  @attr('string') state;
  @attr('string') companyName;
  @attr('string') techStack;
}
