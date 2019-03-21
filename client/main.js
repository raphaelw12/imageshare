import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import'../lib/collection.js';
import './main.html';

Template.myJumbo.events({
	'click .js-addImg'(event){
		$("#addImgModal").modal("show");
	}
});

Template.addImg.events({
	'click .js-saveImg'(event){
		console.log("save");
		$("#addImgModal").modal("hide");	
	}
});