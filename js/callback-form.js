
/*проверяем правильность заполнения полей в форме обратной связи*/

const callback= document.querySelector('#form');
const userName = document.querySelector('#userName');
const userPhone = document.querySelector('#userPhone');
const callback2= document.querySelector('#form2');
const userName2 = document.querySelector('#userName2');
const userPhone2 = document.querySelector('#userPhone2');
let hasError;

userPhone.addEventListener('click', function() { 
	if (!userPhone.value.trim()) {userPhone.value = '+380';}
})
userPhone.addEventListener('blur', function() { 
	if (userPhone.value === '+380') userPhone.value = '';
})

callback.addEventListener('submit', function(event) {

	hasError = false;

	if (!userName.value.trim()){ 
		userName.classList.add('footer-form-modal-error');
		hasError = true;
	} 
	else userName.classList.remove('footer-form-modal-error');
	
	if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)){ 
		userPhone.classList.add('footer-form-modal-error');
		hasError = true;	
	}
	else userPhone.classList.remove('footer-form-modal-error');
	
	if (hasError) event.preventDefault();
	else toggleMenu(feedback);
})

userPhone2.addEventListener('click', function() { 
	if (!userPhone2.value.trim()) {userPhone2.value = '+380';}
})
userPhone2.addEventListener('blur', function() { 
	if (userPhone2.value === '+380') userPhone2.value = '';
})

callback2.addEventListener('submit', function(event) {

	hasError = false;

	if (!userName2.value.trim()){ 
		userName2.classList.add('footer-form-modal-error');
		hasError = true;
	} 
	else userName2.classList.remove('footer-form-modal-error');
	
	if (!userPhone2.value.trim() || !isPhoneValid(userPhone2.value)){ 
		userPhone2.classList.add('footer-form-modal-error');
		hasError = true;	
	}
	else userPhone2.classList.remove('footer-form-modal-error');
	
	if (hasError) event.preventDefault();
	else toggleMenu(feedback);
})

function isPhoneValid(phone = '') {
    const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;
    return phone.match(regexp);
}
