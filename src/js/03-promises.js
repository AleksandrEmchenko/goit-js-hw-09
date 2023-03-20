import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(evt) {
	evt.preventDefault();
	let delay = Number(formEl.delay.value);
	for (let i = 1; i <= formEl.amount.value; i += 1) {
		createPromise(i, delay)
			.then(({ position, delay }) => {
				Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
			})
			.catch(({ position, delay }) => {
				Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
			});
		delay += Number(formEl.step.value);
	}
}

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	const object = { position, delay };
	return new Promise((resolve, reject)  => {
		setTimeout(() => {
			if (shouldResolve) {
				resolve(object);
			} else {
				reject(object);
			}
		}, delay);
}); 
	}