// const firstDelayEl = document.querySelector('[name="delay"]');
// const stepDelayEl = document.querySelector('[name="step"]');
// const amountEl = document.querySelector('[name="amount"]');
// const submitBtnEl = document.querySelector('[type="submit"]');

// submitBtnEl.addEventListener('submit', createPromise);
// const delay = firstDelayEl.value;
// const step = stepDelayEl.value;
// const amount = amountEl.value;


// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay} ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay} ms`);
//       }
//     }, delay);
//   });
// }

// createPromise(2, 1500)
//   .then(value=> {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });


import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
	evt.preventDefault();
	let delay = Number(formRef.delay.value);
	for (let i = 1; i <= formRef.amount.value; i += 1) {
		createPromise(i, delay)
			.then(({ position, delay }) => {
				Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
			})
			.catch(({ position, delay }) => {
				Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
			});
		delay += Number(formRef.step.value);
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