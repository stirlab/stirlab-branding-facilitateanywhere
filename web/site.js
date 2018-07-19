var config = {};

config.name = 'FacilitateAnywhere';

config.mainSiteUrl = 'http://facilitateanywhere.com';
config.termsUrl = 'http://facilitateanywhere.com/terms';
config.privacyUrl = 'http://facilitateanywhere.com/privacy';
config.supportUrl = 'http://facilitateanywhere.com/support';
config.faqUrl = 'http://facilitateanywhere.com/faq';
config.techReportUrl = null;

config.twitterUsername = 'ThisOldPlant';

config.email = {};
config.email.event = {};
config.email.event.register = 'fa-event-register';
config.email.event.registerInvite = 'fa-event-register-invite';
config.email.event.registerMessage = 'fa-event-register-message';
config.email.event.facilitatorInvite = 'fa-event-facilitator-invite';

config.template = {};

module.exports.config = config;

var db = {};

db.events = [];

db.sessions = [];

var completedTasks = {
   setDisplayName: 1496442154,
   connectivityCheck: 1496442154,
   instructionalVideoShort: 1496442154,
};

db.users = [];
db.users.push({
  google_json: {
    id: "111684086248650210604",
    email: "circleanywhere@gmail.com",
    verified_email: true,
    name: "Circle Anywhere",
    given_name: "Circle",
    family_name: "Anywhere",
    link: "https://plus.google.com/111684086248650210604",
    picture: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
    locale: "en",
  },
  displayName: "Circle Anywhere",
  emails: [
    {
      value: "circleanywhere@gmail.com",
    }
  ],
  id: "111684086248650210604",
  link: "https://plus.google.com/111684086248650210604",
  name: {
    familyName: "Anywhere",
    givenName: "Circle",
  },
  picture: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
  provider: "google",
  superuser: true,
  completedTasks: completedTasks,
});

db.users.push({
  google_json: {
    id: "112349864121259291250",
    email: "test.1.circleanywhere@gmail.com",
    verified_email: true,
    name: "Participant One",
    given_name: "Participant",
    family_name: "One",
    picture: "https://lh4.googleusercontent.com/-ox7q9IPfZhE/AAAAAAAAAAI/AAAAAAAAABE/_-70PCoNQVE/photo.jpg",
    locale: "en"
  },
  displayName: "Participant One",
  emails: [
    {
      value: "test.1.circleanywhere@gmail.com"
    }
  ],
  id: "112349864121259291250",
  name: {
    familyName: "One",
    givenName: "Participant"
  },
  picture: "https://lh4.googleusercontent.com/-ox7q9IPfZhE/AAAAAAAAAAI/AAAAAAAAABE/_-70PCoNQVE/photo.jpg",
  provider: "google",
  perms: {
    joinEvents: true,
    memberOnce: true,
  },
  completedTasks: completedTasks,
});

db.users.push({
  google_json: {
    id: "106242390178717671247",
    email: "test.2.circleanywhere@gmail.com",
    verified_email: true,
    name: "Participant Two",
    given_name: "Participant",
    family_name: "Two",
    picture: "https://lh5.googleusercontent.com/-fUtKJ5vSdYc/AAAAAAAAAAI/AAAAAAAAAA0/QU6Gp0xdFOM/photo.jpg",
    locale: "en"
  },
  displayName: "Participant Two",
  emails: [
    {
      value: "test.2.circleanywhere@gmail.com"
    }
  ],
  id: "106242390178717671247",
  name: {
    familyName: "Two",
    givenName: "Participant"
  },
  picture: "https://lh5.googleusercontent.com/-fUtKJ5vSdYc/AAAAAAAAAAI/AAAAAAAAAA0/QU6Gp0xdFOM/photo.jpg",
  provider: "google",
  perms: {
    joinEvents: true,
    memberOnce: true,
  },
  completedTasks: completedTasks,
});

for (var num = 0; num <= 59; num++) {
  var prefix = "10000000000000000000";
  if (num > 99) {
    prefix = "100000000000000000";
  }
  else if (num > 9) {
    prefix = "1000000000000000000";
  }
  var id = prefix + String(num);
  db.users.push({
    id: id,
    displayName: "Test User " + num,
    emails: [{
      value: "test.user." + num + "@circleanywhere.com",
    }],
    picture: "https://connect.circleanywhere.com/public/img/custom/test-user-" + num + "-avatar.jpg",
    perms: {
      joinEvents: true,
      memberOnce: true,
    },
    provider: "google",
    name: {
      familyName: "User " + num,
      givenName: "Test",
    },
    google_json: {
      id: id,
      email: "test.user." + num + "@circleanywhere.com",
      verified_email: true,
      name: "Test User " + num,
      given_name: "Test",
      family_name: "User " + num,
      picture: "https://connect.circleanywhere.com/public/img/custom/test-user-" + num + "-avatar.jpg",
      locale: "en",
    },
    completedTasks: completedTasks,
  });
}

module.exports.db = db;
