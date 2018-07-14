var config = {
	apiKey: "AIzaSyB-VgFWXAnwvkrGb6OpjThCiSke7aYT6lQ",
    authDomain: "tinta-up-cebu.firebaseapp.com",
    databaseURL: "https://tinta-up-cebu.firebaseio.com",
    projectId: "tinta-up-cebu",
    storageBucket: "tinta-up-cebu.appspot.com",
    messagingSenderId: "836988490789"
};

firebase.initializeApp(config);

var db = firebase.firestore()

prompts = [
	"'sleeping sound, to waking up woke'",
	"'well, men have rights, too!', says the 'meninist'",
	"you're smart kid, but while you're here, that last bit's probably all that you are",
	"'we must all stand for one another', he typed from the comforts of a lush mansion",
	"A knife scrapes against a wall of a prison cell... the blood of the innocent tracing another tally",
	"'Mam, ser, it is better to give than to receive', the overgrown ragamuffin cracked out of tune",
	"'It ain't gon' matta ta me how many skirtsies ya wear unda ya skin.'",
	"Fifteen million people calling from hell... millions more are coming down",
	"the kind of girl who talked of books, but never about",
	"`LOADING test_hum_sample61513233: 61513233 OF 903,239,148,153 FOR INCLUSION ... CLEANSING SUCCESSFUL`",
	"'This is my 5th name in 3 years. I know precisely who I am.'"
];

randomIndex  = Math.floor(Math.random() * prompts.length);

const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

$('#randomized_drabbler')[0].innerHTML = prompts[randomIndex];

function submitForm() {	
	first_name = $('#first_name')[0];
	middle_name = $('#middle_name')[0];
	last_name = $('#last_name')[0];
	student_number = $('#student_number')[0];
	birthday = $('#birthday')[0];
	sex = $('#sex').find(":selected").text();
	contact_number = $('#contact_number')[0];
	email = $('#email')[0];
	facebook_account = $('#facebook_account')[0];
	interview_schedule = $('#interview_schedule').find(":selected").text();
	preferred_genre = $('#interestedIn').find(":selected").text();
	writing_prompt_answer = $('#writing_prompt_answer')[0];

	console.log(first_name)
	db.collection("submissions").add({
		first_name: first_name.value,
		middle_name: middle_name.value,
		last_name: last_name.value,
		student_number: student_number.value,
		birthday: birthday.value,
		sex: sex,
		contact_number: contact_number.value,
		email: email.value,
		facebook_account: facebook_account.value,
		preferred_genre: preferred_genre,
		interview_schedule: interview_schedule,
		writing_prompt_answer: writing_prompt_answer.value,
	}).then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
		first_name.value = "";
		middle_name.value = "";
		last_name.value = "";
		student_number.value = "";
		birthday.value = "";
		sex.value = "";
		contact_number = "";
		email.value = "";
		facebook_account.value = "";
		interview_schedule.value = "";
		writing_prompt_answer.value = "";

	}).catch(function(error) {
		console.error("Error adding document: ", error);
	});
}