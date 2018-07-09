var config = {
	apiKey: "AIzaSyD-On9DddF8uicT3Fv6U7ZT7fPpoQ5hXqY",
	authDomain: "tinta-recruitment-application.firebaseapp.com",
	databaseURL: "https://tinta-recruitment-application.firebaseio.com",
	projectId: "tinta-recruitment-application",
	storageBucket: "tinta-recruitment-application.appspot.com",
	messagingSenderId: "46899736997"
};

firebase.initializeApp(config);

var db = firebase.firestore()

const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

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