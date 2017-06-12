var config = {};

config.name = 'FacilitateAnywhere';

config.mainSiteUrl = 'http://facilitateanywhere.com';
config.termsUrl = 'http://facilitateanywhere.com/terms';
config.privacyUrl = 'http://facilitateanywhere.com/privacy';
config.supportUrl = 'http://facilitateanywhere.com/support';
config.faqUrl = 'http://facilitateanywhere.com/faq';

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
db.sessions.push({
	id: 1,
	title: "Alternate breakout #1",
	description: "Click the button below to join the breakout",
	shortCode: "alt-session-1",
	joinCap: 10,
	handUp: false,
	adminPeekingIntoSession: "",
	"session-key": "a7d6e589-f0f9-4290-943a-4f90652ea6df",
	creationKey: "5908c8",
	isPermalinkSession: true,
	"hangout-url": "https://hangouts.google.com/hangouts/_/w4axbux73vcmlixumxrk5hlrcye",
});
db.sessions.push({
	id: 2,
	title: "Alternate breakout #2",
	description: "Click the button below to join the breakout",
	shortCode: "alt-session-2",
	joinCap: 10,
	handUp: false,
	adminPeekingIntoSession: "",
	"session-key": "4676dede-49a2-4c92-b94e-7fc0041d7d58",
	creationKey: "b74271",
	isPermalinkSession: true,
	"hangout-url": "https://hangouts.google.com/hangouts/_/vrwapbspangf7oeoga7gta27vee",
});

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
